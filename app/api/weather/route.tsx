import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const URI = process.env.NEXT_PUBLIC_BASE_URL;
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const url = `${URI}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const res = await axios.get(url);
    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Error fetching forecast data");
    return new Response("Error fetching forecast data", { status: 500 });
  }
};
