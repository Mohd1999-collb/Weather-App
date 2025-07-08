import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const URI = process.env.NEXT_PUBLIC_UV_URL;
    const url = `${URI}?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`;

    const response = await fetch(url, {
      next: {
        revalidate: 900,
      },
    });
    const uvData = await response.json();
    return NextResponse.json(uvData);
  } catch (error) {
    return new Response("Error in getting uv data", { status: 500 });
  }
};
