import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const URI = process.env.NEXT_PUBLIC_GEOCODED_URL;
    const searchParams = req.nextUrl.searchParams;
    const city = searchParams.get("search");

    const url = `${URI}/direct?q=${city}&limit=5&appid=${API_KEY}`;
    const response = await fetch(url);
    const dailyData = await response.json();
    return NextResponse.json(dailyData);
  } catch (error) {
    console.log("Error in getting geocoded data ");
    return new Response("Error in getting geocoded data ", { status: 500 });
  }
};
