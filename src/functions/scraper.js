import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export default async function handler(req, res) {
  let browser = null;

  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.goto("https://ortodoncjaprzyparku.e-lea.com/sales", {
      waitUntil: "networkidle0",
    });

    const links = await page.$$eval(".slider-container a", (els) =>
      els.map((el) => el.href)
    );

    const results = await Promise.all(
      links.map(async (url) => {
        const p = await browser.newPage();
        await p.goto(url, { waitUntil: "networkidle0" });
        const meta = await p.evaluate(() => {
          const getMeta = (property) =>
            document.querySelector(`meta[property='${property}']`)?.content || "";
          return {
            title: getMeta("og:title"),
            url: getMeta("og:url") || window.location.href,
            description: getMeta("og:description"),
            image: getMeta("og:image"),
          };
        });
        await p.close();
        return { url, ...meta };
      })
    );

    res.status(200).json({ results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Nie udało się pobrać kursów" });
  } finally {
    if (browser) await browser.close();
  }
}
