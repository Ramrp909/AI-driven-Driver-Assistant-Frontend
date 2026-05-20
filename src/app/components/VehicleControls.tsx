import React, { useState } from "react";
import {
  Wind,
  Thermometer,
  AlertTriangle,
  Sun,
  Lock,
  MoreHorizontal,
  Camera,
} from "lucide-react";

export default function CarDashboard() {
  const [temperature, setTemperature] =
    useState(22);

  const controls = [
    {
      icon: Wind,
      label: "AC",
      color: "cyan",
    },
    {
      icon: Thermometer,
      label: `${temperature}°C`,
      color: "cyan",
      isTemp: true,
    },
    {
      icon: Camera,
      label: "Seat",
      color: "orange",
    },
    {
      icon: AlertTriangle,
      label: "Hazard",
      color: "red",
      isDanger: true,
    },
    {
      icon: Sun,
      label: "Ambient",
      color: "purple",
    },
    {
      icon: Camera,
      label: "Camera",
      color: "green",
    },
    {
      icon: Lock,
      label: "Lock",
      color: "yellow",
    },
    {
      icon: MoreHorizontal,
      label: "More",
      color: "slate",
    },
  ];

  return (
<div className="w-full h-full flex flex-col justify-center">

  {/* Section Title */}
  <h2
    className="
      text-[10px]
      uppercase
      tracking-[0.25em]
      text-muted-foreground
      mb-2
    "
  >
    Vehicle Controls
  </h2>

  {/* Embedded Control Strip */}
  <div
    className="
      flex
      items-center
      justify-between
      flex-1
      px-2
    "
  >

    {controls.map((control, idx) => {

      const Icon = control.icon;

      const isHighlighted =
        control.isTemp;

      const isDanger =
        control.isDanger;

      return (

        <button
          key={idx}
          data-active={isHighlighted}
          data-danger={isDanger}
          className="
            relative

            flex
            flex-col
            items-center
            justify-center

            gap-1

            min-w-[52px]
            h-full

            transition-all
            duration-300

            text-muted-foreground

            hover:text-foreground

            data-[active=true]:text-blue-500
            dark:data-[active=true]:text-emerald-400

            data-[danger=true]:text-red-400
          "
        >

          {/* Active Indicator */}
          {isHighlighted && (

            <div className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2

              w-6 h-[2px]

              rounded-full

              bg-blue-500
              dark:bg-emerald-400
            " />

          )}

          {/* Icon */}
          <Icon
            className="
              w-4 h-4
            "
          />

          {/* Label */}
          <span
            className="
              text-[9px]
              uppercase
              tracking-wide
              font-medium
            "
          >
            {control.label}
          </span>

        </button>

      );

    })}

  </div>

</div>
  );
}