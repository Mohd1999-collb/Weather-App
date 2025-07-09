"use client";
import { useGlobalContext } from "@/app/Context/globalContext";
import { eye } from "@/app/utils/Icons";
import { getVisibilityDescription } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Visibility = () => {
  const { forecast } = useGlobalContext();
  if (!forecast || !forecast?.visibility) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { visibility } = forecast;
  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">
          {eye} Visibility
        </h2>
        <p className="pt-4 text-2xl">{Math.round(visibility / 1000)} km</p>
      </div>
      <p className="text-sm">{getVisibilityDescription(visibility)}</p>
    </div>
  );
};

export default Visibility;
