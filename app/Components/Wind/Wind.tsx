"use client";
import { useGlobalContext } from "@/app/Context/globalContext";
import { wind } from "@/app/utils/Icons";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

const Wind = () => {
  const { forecast } = useGlobalContext();
  const windSpeed = forecast?.wind?.speed;
  const windDirection = forecast?.wind?.deg;
  if (!windSpeed || !windDirection) {
    return <Skeleton className="h-[12rem] w-full" />;
  }
  return (
    <div
      className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex 
    flex-col gap-3 dark:bg-dark-grey shadow-sm dark:shadow-none"
    >
      <h2 className="flex items-center gap-2 font-medium">{wind}Wind</h2>

      <div className="compass relative flex items-center justify-center">
        <div className="image relative">
          <Image
            src="/compass_body.png"
            alt="compass"
            width={125}
            height={125}
          />
          <Image
            src="/compass_arrow.png"
            alt="arrow"
            width={9}
            height={9}
            className="absolute top-6 left-[45%] transition-all duration-500 ease-in-out dark:invert"
            style={{
              transform: `rotate(${windDirection}deg) translate(-50%)`,
              height: "60%",
            }}
          />
        </div>
        <p
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs
            dark:text-white font-medium"
        >
          {Math.round(windSpeed)} m/s
        </p>
      </div>
    </div>
  );
};

export default Wind;
