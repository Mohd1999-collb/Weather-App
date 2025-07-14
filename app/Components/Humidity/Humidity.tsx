"use client";
import { useGlobalContext } from "@/app/Context/globalContext";
import { droplets } from "@/app/utils/Icons";
import { getHumidityText } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Humidity = () => {
  const { forecast } = useGlobalContext();
  if (!forecast || !forecast.main || !forecast.main.humidity) {
    return <Skeleton className="h-[12rem] w-full" />;
  }
  const { humidity } = forecast.main;

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">{droplets} Humidity</h2>
        <p className="pt-4 text-2xl">{humidity}%</p>
      </div>
      <p className="text-sm">{getHumidityText(humidity)}.</p>
    </div>
  );
};

export default Humidity;
