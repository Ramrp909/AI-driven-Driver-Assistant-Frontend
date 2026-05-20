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
    <div className="w-full h-full flex flex-col">

      {/* Section Title */}
      <h2
        className="
          text-[11px]
          uppercase
          tracking-[0.2em]
          text-slate-400
          mb-2
        "
      >
        Vehicle Controls
      </h2>

      {/* Controls Dock */}
      <div
        className="
          grid
          grid-cols-8
          gap-3
          flex-1
        "
      >
        {controls.map((control, idx) => {
          const Icon = control.icon;

          const isHighlighted =
            control.isTemp;

          const isDanger =
            control.isDanger;

          const bgColor =
            isDanger
              ? "bg-red-500/15"
              : isHighlighted
              ? "bg-cyan-500/15"
              : "bg-slate-200/70 dark:bg-slate-800/70";

          const borderColor =
            isDanger
              ? "border-red-400/60"
              : isHighlighted
              ? "border-cyan-400/60"
              : "border-slate-300 dark:border-slate-700";

          const textColor =
            isDanger
              ? "text-red-300"
              : isHighlighted
              ? "text-cyan-300"
              : "text-slate-900 dark:text-white";

          return (
            <button
              key={idx}
              className={`
                w-full
                h-[72px]
                rounded-[20px]
                ${bgColor}
                border
                ${borderColor}
                backdrop-blur-md
                flex
                flex-col
                items-center
                justify-evenly
                gap-1
                transition-all
                hover:scale-[1.03]
                active:scale-95
                hover:border-cyan-400/60
                hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
                ${
                  isHighlighted
                    ? "shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                    : ""
                }
              `}
            >
              <Icon
                className={`
                  w-5 h-5
                  ${textColor}
                `}
              />

              <span
                className={`
                  text-[10px]
                  tracking-wide
                  uppercase
                  font-medium
                  ${textColor}
                `}
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