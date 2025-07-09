"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function UvProgress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
      {...props}
    >
      <ProgressPrimitive.Indicator
       className="h-2 w-2 flex-1 rounded-full bg-primary shadow-lg shadow-white ring-2
       dark:ring-gray-500"
       style={{ marginLeft: `${value}%` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { UvProgress }
