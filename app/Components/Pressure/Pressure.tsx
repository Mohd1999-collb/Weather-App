"use client"
import { useGlobalContext } from '@/app/Context/globalContext';
import { gauge } from '@/app/utils/Icons';
import { getPressureDescription } from '@/app/utils/misc';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const Pressure = () => {

  const { forecast } = useGlobalContext();
  if (!forecast || !forecast?.main || !forecast?.main?.pressure) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { pressure } = forecast.main;

  console.log(forecast.main)

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none">
          <div className="top">
            <h2 className="flex items-center gap-2 font-medium">
              {gauge} Pressure
            </h2>
            <p className="pt-4 text-2xl">{pressure} hpa</p>
          </div>
          <p className="text-sm">{getPressureDescription(pressure)}</p>
        </div>
  )
}

export default Pressure