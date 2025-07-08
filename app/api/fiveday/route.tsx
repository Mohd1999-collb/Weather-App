import { NextRequest, NextResponse } from "next/server";
export const GET = async (req: NextRequest) => {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const URI = process.env.NEXT_PUBLIC_BASE_URL;
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const url = `${URI}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response = await fetch(url, {
      next: {
        revalidate: 3600, // Revalidate every hour
      },
    });
    const dailyData = await response.json();
    return NextResponse.json(dailyData);
  } catch (error) {
    console.log("Error in getting daily data ");
    return new Response("Error in getting daily data ", { status: 500 });
  }
};
