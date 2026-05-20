import {
  Car,
  Navigation,
  Radar,
  LocateFixed,
} from "lucide-react";

export default function AICenter() {

  return (

    <div className="w-full h-full flex flex-col">

      {/* Header */}
      <div className="
        flex items-center
        justify-between
        mb-2
      ">

        <div>

          <h2 className="
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-muted-foreground
          ">
            AI Navigation
          </h2>

          <p className="
            text-[11px]
            text-muted-foreground/70
            mt-1
          ">
            Autonomous Assistance Active
          </p>

        </div>

        {/* AI State */}
        <div className="
          flex items-center
          gap-2
          text-blue-500
          dark:text-emerald-400
        ">

          <div className="
            w-2 h-2
            rounded-full
            bg-blue-500
            dark:bg-emerald-400
            animate-pulse
          " />

          <span className="
            text-[10px]
            uppercase
            tracking-wide
          ">
            Active
          </span>

        </div>

      </div>

      {/* AI Visualization Surface */}
      <div className="
        relative
        flex-1
        overflow-hidden
        rounded-[28px]

        bg-muted/20
      ">

        {/* Background Grid */}
        <div className="
          absolute inset-0
          opacity-[0.06]
        ">

          <div className="
            w-full h-full
            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[size:36px_36px]
          " />

        </div>

        {/* Sensor Radar Rings */}
        <div className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          w-[280px]
          h-[280px]
          rounded-full
          border
          border-blue-500/10
          dark:border-emerald-400/10
        " />

        <div className="
          absolute
          bottom-16
          left-1/2
          -translate-x-1/2
          w-[220px]
          h-[220px]
          rounded-full
          border
          border-blue-500/10
          dark:border-emerald-400/10
        " />

        <div className="
          absolute
          bottom-24
          left-1/2
          -translate-x-1/2
          w-[160px]
          h-[160px]
          rounded-full
          border
          border-blue-500/10
          dark:border-emerald-400/10
        " />

        {/* Route Path */}
        <div className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          h-full
          w-[2px]

          bg-blue-500/30
          dark:bg-emerald-400/30
        " />

        {/* Lane Guides */}
        <div className="
          absolute
          left-[36%]
          top-0
          h-full
          border-l
          border-dashed
          border-foreground/10
        " />

        <div className="
          absolute
          right-[36%]
          top-0
          h-full
          border-l
          border-dashed
          border-foreground/10
        " />

        {/* Autonomous Vehicle */}
        <div className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2

          w-16 h-24
          rounded-[24px]

          bg-blue-500/10
          dark:bg-emerald-400/10

          border
          border-blue-500/40
          dark:border-emerald-400/40

          backdrop-blur-sm

          flex
          items-center
          justify-center

          shadow-[0_0_30px_rgba(16,185,129,0.12)]
        ">

          <Car className="
            w-7 h-7
            text-blue-500
            dark:text-emerald-400
          " />

        </div>

        {/* YOLO Detection Placeholder */}
        <div className="
          absolute
          top-[26%]
          left-[32%]

          px-2 py-1

          text-[9px]
          uppercase
          tracking-wide

          rounded-md

          border
          border-yellow-400/40

          text-yellow-400
        ">
          Vehicle
        </div>

        {/* Park Assist Placeholder */}
        <div className="
          absolute
          bottom-[24%]
          right-[18%]

          flex
          items-center
          gap-1

          text-[9px]
          uppercase
          tracking-wide

          text-blue-500
          dark:text-emerald-400
        ">

          <Radar className="
            w-3 h-3
          " />

          Park Assist

        </div>

        {/* HUD Destination */}
        <div className="
          absolute
          top-6
          right-6
          text-right
        ">

          <div className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-muted-foreground
          ">
            Destination
          </div>

          <div className="
            mt-1
            text-sm
            font-medium
            text-foreground
          ">
            Downtown Hub
          </div>

        </div>

        {/* Live Telemetry */}
        <div className="
          absolute
          left-6
          top-6

          flex
          flex-col
          gap-2
        ">

          <div className="
            flex items-center
            gap-2

            text-[10px]
            uppercase
            tracking-wide

            text-muted-foreground
          ">

            <Navigation className="
              w-3 h-3
              text-blue-500
              dark:text-emerald-400
            " />

            Route Optimized

          </div>

          <div className="
            flex items-center
            gap-2

            text-[10px]
            uppercase
            tracking-wide

            text-muted-foreground
          ">

            <LocateFixed className="
              w-3 h-3
              text-blue-500
              dark:text-emerald-400
            " />

            Lane Tracking Active

          </div>

        </div>

      </div>

      {/* Bottom HUD Telemetry */}
      <div className="
        mt-2

        flex
        items-center
        justify-between

        px-2

        text-[10px]
        uppercase
        tracking-wide

        text-muted-foreground
      ">

        <div>
          ETA
          <span className="
            ml-2
            text-foreground
            font-medium
          ">
            18m
          </span>
        </div>

        <div>
          Traffic
          <span className="
            ml-2
            text-yellow-400
          ">
            Moderate
          </span>
        </div>

        <div>
          Weather
          <span className="
            ml-2
            text-foreground
            font-medium
          ">
            24°
          </span>
        </div>

      </div>

    </div>

  );

}