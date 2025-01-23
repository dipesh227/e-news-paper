"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  angle?: number
  cellSize?: number
  opacity?: number
  lightLineColor?: string
  darkLineColor?: string
}

export const GridPattern = React.forwardRef<HTMLDivElement, GridPatternProps>(
  (
    {
      className,
      angle = 65,
      cellSize = 60,
      opacity = 0.3,
      lightLineColor = "rgb(var(--primary) / 0.1)",
      darkLineColor = "rgb(var(--primary) / 0.2)",
      ...props
    },
    ref,
  ) => {
    const gridStyles = {
      "--grid-angle": `${angle}deg`,
      "--cell-size": `${cellSize}px`,
      "--opacity": opacity,
      "--light-line": lightLineColor,
      "--dark-line": darkLineColor,
    } as React.CSSProperties

    return (
      <div
        className={cn(
          "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
          `opacity-[var(--opacity)]`,
          className
        )}
        style={gridStyles}
        ref={ref}
        {...props}
      >
        <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
          <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent to-90%" />
      </div>
    )
  }
)

GridPattern.displayName = "GridPattern"
