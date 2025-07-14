"use client";
import { useGlobalContextUpdate } from "@/app/Context/globalContext";
import defaultStates from "@/app/utils/defaultStates";
import React from "react";

const TopLargeCity = () => {
  const { setActiveCityCoords } = useGlobalContextUpdate();

  const getClickedCityCords = (lat: number, lon: number) => {
    console.log(lat, lon);
    setActiveCityCoords([lat, lon]);
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="states  flex flex-col gap-3 flex-1">
      <h2 className="text-center gap-2 font-medium">Top Large Cities</h2>
      <div className="flex flex-col gap-4 ">
        {defaultStates.map((state, index) => (
          <div
            key={index}
            className="border rounded-lg h-[3.9rem] cursor-pointer font-medium bg-gradient-to-r from-orange-600 via-yellow-500 to-indigo-400 inline-block text-transparent bg-clip-text dark:bg-dark-grey shadow-sm dark:shadow-none "
            onClick={() => getClickedCityCords(state.lat, state.lon)}
          >
            <p className="px-6 py-4 text-center">{state.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLargeCity;
