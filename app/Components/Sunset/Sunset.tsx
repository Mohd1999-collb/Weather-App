"use client";
import { useGlobalContext } from "@/app/Context/globalContext";
import { sunset } from "@/app/utils/Icons";
import { unixToTime } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Sunset = () => {
  const { forecast } = useGlobalContext();
  if (
    !forecast ||
    !forecast?.sys ||
    !forecast?.sys?.sunset ||
    !forecast?.sys?.sunrise
  ) {
    return <Skeleton className="h-[12rem] w-full" />;
  } else {
    var times = forecast?.sys?.sunset;
  }

  const timezone = forecast?.timezone;

  const sunsetTime = unixToTime(times, timezone);
  const sunriseTime = unixToTime(forecast?.sys?.sunrise, timezone);
  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">{sunset}Sunset</h2>
        <p className="pt-4 text-2xl">{sunsetTime}</p>
      </div>
      <p className="text-sm">Sunrise : {sunriseTime}</p>
    </div>
  );
};

export default Sunset;
