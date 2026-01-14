// import puppeteer from "puppeteer";

// export async function GET() {
//   const baseUrl = "https://ortodoncjaprzyparku.e-lea.com/sales1";

//   try {
//     console.log("Uruchamiam Puppeteer...");

//     const browser = await puppeteer.launch({ headless: true });
//     const page = await browser.newPage();

//     await page.goto(baseUrl, { waitUntil: "networkidle0" });

//     const links = await page.$$eval(".slider-container a", (els) =>
//       els.map((el) => el.href)
//     );

//     console.log("Znalezione linki:", links);

//     if (links.length === 0) {
//       console.warn("Nie znaleziono żadnych linków w .slider-container");
//       await browser.close();
//       return Response.json({ results: [] });
//     }

//     async function fetchMeta(url) {
//       try {
//         console.log("Pobieram meta dane z:", url);

//         const newPage = await browser.newPage();
//         await newPage.goto(url, { waitUntil: "networkidle0" });

//         const meta = await newPage.evaluate(() => {
//           const getMeta = (property) =>
//             document.querySelector(`meta[property='${property}']`)?.content ||
//             "";

//           return {
//             title: getMeta("og:title"),
//             url: getMeta("og:url") || window.location.href,
//             description: getMeta("og:description"),
//             image: getMeta("og:image"),
//           };
//         });

//         await newPage.close();
//         console.log("Znalezione meta:", meta);
//         return { url, ...meta };
//       } catch (err) {
//         console.error("Błąd przy pobieraniu meta:", url, err);
//         return null;
//       }
//     }

//     const results = await Promise.all(links.map(fetchMeta));

//     await browser.close();
//     console.log("Wszystkie meta dane pobrane:", results.filter(Boolean));

//     return Response.json({ results: results.filter(Boolean) });
//   } catch (err) {
//     console.error("Błąd główny:", err);
//     return Response.json({ error: err.message }, { status: 500 });
//   }
// }

import puppeteer from "puppeteer";

export async function GET() {
  const baseUrl = "https://ortodoncjaprzyparku.e-lea.com/sales";
  const TIMEOUT_MS = 30000; // 30 sekund

  // Funkcja pomocnicza do timeoutu
  const withTimeout = (promise, timeoutMs) =>
    Promise.race([
      promise,
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("Timeout: przekroczono 30 sekund")),
          timeoutMs
        )
      ),
    ]);

  try {
    console.log("Uruchamiam Puppeteer...");

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Pobranie linków z timeoutem
    const links = await withTimeout(
      (async () => {
        await page.goto(baseUrl, { waitUntil: "networkidle0" });
        return await page.$$eval(".slider-container a", (els) =>
          els.map((el) => el.href)
        );
      })(),
      TIMEOUT_MS
    );

    console.log("Znalezione linki:", links);

    if (links.length === 0) {
      console.warn("Nie znaleziono żadnych linków w .slider-container");
      await browser.close();
      return Response.json({
        results: [],
        message: "Przepraszamy, wystąpił błąd przy pobieraniu kursów",
      });
    }

    async function fetchMeta(url) {
      try {
        console.log("Pobieram meta dane z:", url);

        const newPage = await browser.newPage();
        await newPage.goto(url, { waitUntil: "networkidle0", timeout: 10000 }); // max 10s na stronę

        const meta = await newPage.evaluate(() => {
          const getMeta = (property) =>
            document.querySelector(`meta[property='${property}']`)?.content ||
            "";

          return {
            title: getMeta("og:title"),
            url: getMeta("og:url") || window.location.href,
            description: getMeta("og:description"),
            image: getMeta("og:image"),
          };
        });

        await newPage.close();
        console.log("Znalezione meta:", meta);
        return { url, ...meta };
      } catch (err) {
        console.error("Błąd przy pobieraniu meta:", url, err);
        return null;
      }
    }

    // Pobranie wszystkich meta danych z timeoutem
    const results = await withTimeout(
      Promise.all(links.map(fetchMeta)),
      TIMEOUT_MS
    );

    await browser.close();

    const filteredResults = results.filter(Boolean);
    console.log("Wszystkie meta dane pobrane:", filteredResults);

    if (filteredResults.length === 0) {
      return Response.json({
        results: [],
        message: "Przepraszamy, obecnie nie możemy pobrać kursów",
      });
    }

    return Response.json({ results: filteredResults });
  } catch (err) {
    console.error("Błąd główny:", err);
    return Response.json(
      { error: "Przepraszamy, obecnie nie możemy pobrać kursów" },
      { status: 500 }
    );
  }
}
