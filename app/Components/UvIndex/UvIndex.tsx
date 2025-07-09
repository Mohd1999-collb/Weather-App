"use client";
import { useGlobalContext } from "@/app/Context/globalContext";
import { sun } from "@/app/utils/Icons";
import { uvIndexCategory } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { UvProgress } from "../UvProgress/UvProgress";

const UvIndex = () => {
  const { uvIndex } = useGlobalContext();
  if (!uvIndex || !uvIndex.daily) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const uvIndexMax = uvIndex.daily.uv_index_max[0].toFixed(0);

  const marginLeftPercentage = (uvIndexMax / 14) * 100;

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">{sun} Uv Index</h2>
        <div className="pt-4 flex flex-col gap-1">
          <p className="text-2xl">
            {uvIndexMax}
            <span className="text-sm">
              ({uvIndexCategory(uvIndexMax).text})
            </span>
          </p>
          <UvProgress
          value={marginLeftPercentage}
          max={14}
          className="progress mt-3.5"
          />

        </div>
      </div>
      <p className="text-sm">{uvIndexCategory(uvIndexMax).protection}</p>
    </div>
  );
};

export default UvIndex;
