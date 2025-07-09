"use client";
import dynamic from "next/dynamic";
import { useGlobalContext } from "@/app/Context/globalContext";
import { Skeleton } from "@/components/ui/skeleton";

// Dynamically import with SSR disabled
const MapBoxContent = dynamic(() => import("../MapBoxContent/MapBoxContent"), {
  ssr: false,
  loading: () => <Skeleton className="h-[12rem] w-full" />,
});

const MapBox = () => {
  const { forecast } = useGlobalContext();

  if (
    !forecast ||
    !forecast?.coord ||
    !forecast?.coord?.lat ||
    !forecast?.coord?.lon
  ) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const activeCityCords = forecast.coord;

  return (
    <div
      className="flex flex-1 items-center content-center basis-[50%] border rounded-lg"
      style={{
        padding: "1rem",
      }}
    >
      <MapBoxContent activeCityCords={activeCityCords} />
    </div>
  );
};

export default MapBox;
