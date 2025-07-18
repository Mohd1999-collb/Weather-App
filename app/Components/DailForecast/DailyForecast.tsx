"use client";
import { useGlobalContext } from "@/app/Context/globalContext";
import { getIcon, kelvinToCelsius } from "@/app/utils/misc";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import moment from "moment";
import { forecastFlake } from "@/app/utils/Icons";
import React from "react";

const DailyForecast = () => {
  const { forecast, fiveDaysForecast } = useGlobalContext();

  const { weather } = forecast;
  const { city, list } = fiveDaysForecast;

  if (!fiveDaysForecast || !city || !list) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  if (!forecast || !weather) {
    return <Skeleton className="h-[12rem] w-full" />;
  } else {
    var { main: weatherMain } = weather[0];
  }

  const todayString = moment().format("YYYY-MM-DD");

  const todayForecast = list.filter(
    (forecast: { dt_txt: string; main: { temp: number } }) =>
      forecast.dt_txt.startsWith(todayString)
  );

  if (todayForecast.length < 1) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2" />
    );
  }

  return (
    <div
      className="pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
       dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2"
    >
      <h2 className="flex items-center gap-2 font-medium">
        {forecastFlake} Daily Forecast
      </h2>
      <div className="h-full flex gap-10 overflow-hidden">
        {todayForecast.length < 1 ? (
          <div className="flex justify-center items-center">
            <h1 className="text-[3rem] line-through text-rose-500">
              No Data Available!
            </h1>
          </div>
        ) : (
          <div className="w-full">
            <Carousel>
              <CarouselContent>
                {todayForecast.map(
                  (
                    forecast: { dt_text: string; main: { temp: number } },
                    index: number
                  ) => {
                    return (
                      <CarouselItem
                        key={index}
                        className="flex flex-col gap-2 basis-[8.5rem] cursor-grab"
                      >
                        <p className="text-gray-300">
                          {moment(forecast.dt_text).format("HH:mm")}
                        </p>
                        <p>{getIcon(weatherMain)}</p>
                        <p>{kelvinToCelsius(forecast.main.temp)}°C</p>
                      </CarouselItem>
                    );
                  }
                )}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyForecast;
