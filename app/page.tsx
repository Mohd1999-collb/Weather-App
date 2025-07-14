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
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-6 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <FiveDayForecast />
        </div>

        <div className="flex flex-col w-full">
          <div className="grid gap-6 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution />
            <Sunset />
            <Wind />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
          <div className="mapbox-con mt-6 flex gap-6">
            <MapBox />
            <TopLargeCity />
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
