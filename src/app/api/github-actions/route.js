import { NextResponse } from "next/server";

export async function GET() {
  // 1. Klasyczny format URL bez "refs/heads"
  const url =
    "https://raw.githubusercontent.com/MichalKolban/elea/main/public/data.json";
  const token = process.env.GITHUB_TOKEN;

  // DEBUG: Sprawdź w logach Vercela czy zmienna w ogóle istnieje
  console.log("Token length:", token ? token.length : "BRAK TOKENA");

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3.raw",
      },
      // Zapobiega serwowaniu błędu 404 z cache'u Vercela
      cache: "no-store",
    });

    if (!res.ok) {
      // Jeśli tutaj dostaniesz 404, oznacza to że token nie ma uprawnień do repo
      return NextResponse.json(
        { error: `GitHub API returned ${res.status}`, url_checked: url },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
