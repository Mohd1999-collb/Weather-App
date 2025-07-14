import FiveDayForecast from "./Components/FiveDayForecast/FiveDayForecast";
import AirPollution from "./Components/AirPollution/AirPollution";
import Navbar from "./Components/Navbar/Navbar";
import Temperature from "./Components/Temperature/Temperature";
import Wind from "./Components/Wind/Wind";
import DailyForecast from "./Components/DailForecast/DailyForecast";
import Sunset from "./Components/Sunset/Sunset";
import UvIndex from "./Components/UvIndex/UvIndex";
import Population from "./Components/Population/Population";
import FeelsLike from "./Components/FeelsLike/FeelsLike";
import Humidity from "./Components/Humidity/Humidity";
import Visibility from "./Components/Visibility/Visibility";
import Pressure from "./Components/Pressure/Pressure";
import MapBox from "./Components/MapBox/MapBox";
import TopLargeCity from "./Components/TopLargeCity/TopLargeCity";
import Footer from "./Components/Footer/Footer";
import "./globals.css";

export default function Home() {
  return (
    <main className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-24 2xl:mx-64 m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-6 md:flex-row">
        {/* Left column */}
        <div className="flex flex-col gap-6 w-full md:w-2/5">
          <Temperature />
          <FiveDayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="col-span-full flex flex-col gap-6 lg:flex-row">
              <MapBox />
              <TopLargeCity />
            </div>
            <AirPollution />
            <Wind />
            <Sunset />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
