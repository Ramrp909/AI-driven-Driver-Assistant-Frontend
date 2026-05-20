import {
  Navigation,
  Car,
  MapPinned,
  CloudRain,
  Clock3,
} from "lucide-react";

export default function AICenter() {

  return (

    <div className="h-full flex flex-col">

      {/* Header */}
      <div className="
        flex items-center
        justify-between
        mb-3
      ">

        <div>

          <h2 className="
            text-[11px]
            uppercase
            tracking-[0.2em]
            text-slate-400
          ">
            AI Navigation
          </h2>

          <p className="
            text-xs
            text-slate-500
            mt-1
          ">
            Autonomous Assistance Active
          </p>

        </div>

        <div className="
          w-10 h-10
          rounded-2xl
          bg-cyan-500/10
          border border-cyan-400/30
          flex items-center
          justify-center
        ">
          <Navigation className="
            w-5 h-5
            text-cyan-300
          " />
        </div>

      </div>

      {/* Visualization Area */}
      <div className="
        relative
        flex-1
        rounded-[28px]
        overflow-hidden
        border border-slate-700
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-slate-950
      ">

        {/* Grid Background */}
        <div className="
          absolute inset-0
          opacity-20
        ">

          <div className="
            w-full h-full
            bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
            bg-[size:40px_40px]
          " />

        </div>

        {/* Route Path */}
        <div className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          h-full
          w-1
          bg-cyan-400/40
        " />

        {/* Lane Markers */}
        <div className="
          absolute
          left-[35%]
          top-0
          h-full
          border-l
          border-dashed
          border-white/10
        " />

        <div className="
          absolute
          right-[35%]
          top-0
          h-full
          border-l
          border-dashed
          border-white/10
        " />

        {/* Vehicle */}
        <div className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          w-16 h-24
          rounded-[24px]
          bg-cyan-500/20
          border border-cyan-400
          backdrop-blur-md
          flex items-center
          justify-center
          shadow-[0_0_30px_rgba(34,211,238,0.25)]
        ">

          <Car className="
            w-8 h-8
            text-cyan-300
          " />

        </div>

        {/* Destination */}
        <div className="
          absolute
          top-10
          right-10
          rounded-2xl
          bg-slate-900/80
          border border-slate-700
          px-4 py-3
          backdrop-blur-md
        ">

          <div className="
            flex items-center
            gap-2
          ">

            <MapPinned className="
              w-4 h-4
              text-cyan-400
            " />

            <div>

              <div className="
                text-xs
                text-slate-400
              ">
                Destination
              </div>

              <div className="
                text-sm
                font-medium
                text-white
              ">
                Downtown Hub
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Telemetry */}
      <div className="
        mt-3
        grid grid-cols-3
        gap-2
      ">

        <div className="
          rounded-2xl
          bg-slate-800/80
          border border-slate-700
          px-3 py-2
        ">

          <div className="
            flex items-center
            gap-2
          ">

            <Clock3 className="
              w-4 h-4
              text-cyan-400
            " />

            <div>

              <div className="
                text-[10px]
                uppercase
                tracking-wide
                text-slate-500
              ">
                ETA
              </div>

              <div className="
                text-sm
                font-semibold
                text-white
              ">
                18 min
              </div>

            </div>

          </div>

        </div>

        <div className="
          rounded-2xl
          bg-slate-800/80
          border border-slate-700
          px-3 py-2
        ">

          <div className="
            text-[10px]
            uppercase
            tracking-wide
            text-slate-500
          ">
            Traffic
          </div>

          <div className="
            text-sm
            font-semibold
            text-yellow-400
          ">
            Moderate
          </div>

        </div>

        <div className="
          rounded-2xl
          bg-slate-800/80
          border border-slate-700
          px-3 py-2
        ">

          <div className="
            flex items-center
            gap-2
          ">

            <CloudRain className="
              w-4 h-4
              text-cyan-400
            " />

            <div>

              <div className="
                text-[10px]
                uppercase
                tracking-wide
                text-slate-500
              ">
                Weather
              </div>

              <div className="
                text-sm
                font-semibold
                text-white
              ">
                24°C
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}