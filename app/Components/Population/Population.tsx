import { people } from '@/app/utils/Icons'
import React from 'react'

const Population = () => {
  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none">
          <div className="top">
            <h2 className="flex items-center gap-2 font-medium">{people} Population</h2>
            <div className="pt-4 flex flex-col gap-1">
              <p className="text-2xl">
               
              </p>
             
    
            </div>
          </div>
          <p className="text-sm"></p>
        </div>
  )
}

export default Population