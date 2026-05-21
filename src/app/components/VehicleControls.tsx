import React, { useState } from "react";
// import {
//   Wind,
//   Thermometer,
//   AlertTriangle,
//   Sun,
//   Lock,
//   MoreHorizontal,
//   Camera,
// } from "lucide-react";
import {
  AirConditioner,
  Camera,
  Lock,
  MoreHoriz,
  SunLight,
  WarningTriangle,
  Wifi,
} from "iconoir-react";

export default function CarDashboard() {
  const [temperature, setTemperature] =
    useState(22);

 const controls = [

  {
    icon: AirConditioner,
    label: "AC",
    active: true,
    type: "ac",
  },

  {
    icon: SunLight,
    label: "Seat",
    active: true,
  },

  {
    icon: SunLight,
    label: "Ambient",
    active: false,
  },

  {
    icon: Camera,
    label: "Camera",
    active: false,
  },

  {
    icon: WarningTriangle,
    label: "Hazard",
    active: true,
    danger: true,
  },

  {
    icon: Lock,
    label: "Lock",
    active: false,
  },

  {
    icon: Wifi,
    label: "Connect",
    active: true,
  },

  {
    icon: MoreHoriz,
    label: "More",
    active: false,
  },

];
const [showACPopup, setShowACPopup] =
  useState(false);


  return (
<div className="w-full h-full flex flex-col justify-center">

  {/* Section Title */}

  {/* Embedded Control Strip */}
  <div className="
  w-full
  h-full

  flex
  items-center
  justify-between

  gap-2
">

  {controls.map((control, idx) => {

    const Icon = control.icon;

    return (

      <div
        key={idx}
        className="
          relative
          flex-1
        "
      >

        {/* AC Popup */}
        {control.type === "ac" &&
          showACPopup && (

          <div className="
            absolute

            bottom-[72px]
            left-1/2
            -translate-x-1/2

            z-50

            w-[120px]

            rounded-2xl

            bg-white/80
            dark:bg-[#161B22]/90

            border border-white/20
            dark:border-white/5

            shadow-[0_8px_24px_rgba(59,130,246,0.12)]
            dark:shadow-[0_8px_24px_rgba(16,185,129,0.12)]

            backdrop-blur-xl

            p-2
          ">

            <div className="
              flex
              items-center
              justify-between
            ">

              <button
                onClick={() =>
                  setTemperature(
                    temperature - 1
                  )
                }
                className="
                  w-8 h-8

                  rounded-xl

                  text-foreground

                  hover:bg-muted/30

                  transition-all
                "
              >
                −
              </button>

              <div className="
                text-sm
                font-medium

                text-foreground
              ">
                {temperature}°
              </div>

              <button
                onClick={() =>
                  setTemperature(
                    temperature + 1
                  )
                }
                className="
                  w-8 h-8

                  rounded-xl

                  text-foreground

                  hover:bg-muted/30

                  transition-all
                "
              >
                +
              </button>

            </div>

          </div>

        )}

        {/* Control Button */}
        <button
          onClick={() => {

            if (
              control.type === "ac"
            ) {

              setShowACPopup(
                !showACPopup
              );

            }

          }}
          className={`
            relative

            w-full
            h-[72px]

            rounded-[24px]

            flex
            flex-col
            items-center
            justify-center

            gap-1

            transition-all
            duration-300

            ${
              control.danger
                ? `
                  bg-red-500/10

                  text-red-400

                  shadow-[0_0_18px_rgba(239,68,68,0.12)]
                `
                : control.active
                ? `
                  bg-blue-500/10
                  dark:bg-emerald-400/10

                  text-blue-500
                  dark:text-emerald-400

                  shadow-[0_0_18px_rgba(59,130,246,0.10)]
                  dark:shadow-[0_0_22px_rgba(16,185,129,0.10)]
                `
                : `
                  text-muted-foreground/60
                `
            }
          `}
        >

          <Icon
            className="
              w-6 h-6
            "
            strokeWidth={1.8}
          />

          <span className="
            text-[10px]
            uppercase
            tracking-wide
          ">
            {control.label}
          </span>

        </button>

      </div>

    );

  })}

</div>

</div>
  );
}