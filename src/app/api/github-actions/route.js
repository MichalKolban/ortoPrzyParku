import { NextResponse } from "next/server";

export async function GET() {
  const url =
    "https://raw.githubusercontent.com/MichalKolban/elea/refs/heads/main/public/data.json";
  const token = process.env.GITHUB_TOKEN;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
