"use client"
import { useGlobalContext } from '@/app/Context/globalContext'
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const UvIndex = () => {
  const {uvIndex} = useGlobalContext();
  if (!uvIndex || !uvIndex.daily) {
    return <Skeleton className="h-[12rem] w-full" />
  }

  const uvIndexMax = uvIndex.daily.uv_index_max[0].toFixed(0);
  

  console.log("UV Index:", uvIndexMax);  

  return (
    <div>UvIndex</div>
  )
}

export default UvIndex