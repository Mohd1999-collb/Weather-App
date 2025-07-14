"use client";
import {
  useGlobalContext,
  useGlobalContextUpdate,
} from "@/app/Context/globalContext";
import defaultStates from "@/app/utils/defaultStates";
import { commandIcon } from "@/app/utils/Icons";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandInput,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

function SearchDialog() {
  const { geoCodedList, inputValue, handleInput, setInputValue, setGeoCodedList } = useGlobalContext();
  const { setActiveCityCoords } = useGlobalContextUpdate();

  const [hoveredIndex, setHoveredIndex] = React.useState<number>(0);

  const getClickedCoords = (lat: number, lon: number) => {
    setActiveCityCoords([lat, lon]);
    setInputValue("")
    setGeoCodedList(defaultStates)
  };

  return (
    <div className="search-btn">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="border inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#131313] hover:bg-slate-100  ease-in-out duration-200"
          >
            <div className="command dark:bg-[#262626] bg-slate-200  py-[2px] pl-[5px] pr-[7px] rounded-sm ml-[10rem] flex items-center  gap-2">
              {commandIcon}
              <span className="text-[9px]">F</span>
            </div>
            <p className="text-sm text-muted-foreground">Search Here...</p>
          </Button>
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className="p-0">
          <Command className="rounded-lg border shadow-md md:min-w-[450px]">
            <CommandInput
            value={inputValue}
            onChangeCapture={handleInput}
             placeholder="Type a command or search..." />
            <ul className="px-3 pb-2">
              <p className="p-2 text-sm text-muted-foreground">Suggestions</p>
              {geoCodedList?.length === 0 ||
                (!geoCodedList && <p>No Results</p>)}

                {geoCodedList &&
                geoCodedList.map(
                  (
                    item: {
                      name: string;
                      country: string;
                      state: string;
                      lat: number;
                      lon: number;
                    },
                    index: number
                  ) => {
                    const { country, state, name } = item;
                    return (
                      <li
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        className={`py-3 px-2 text-sm  rounded-sm cursor-pointer
                        ${hoveredIndex === index ? "bg-accent" : ""}
                      `}
                      onClick={() => {
                          getClickedCoords(item.lat, item.lon);
                        }}
                      >
                        <p className=" text">
                          {name}, {state && state + ","} {country}
                        </p>
                      </li>
                    );
                  }
                )}
            </ul>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SearchDialog;

