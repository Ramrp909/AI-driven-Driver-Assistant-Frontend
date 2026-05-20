import {
  Battery,
  Gauge,
  Thermometer,
  Zap,
} from "lucide-react";

export default function VehicleMetrics() {

  return (

    // <div className="h-full flex flex-col">

    //   {/* Header */}
    //   <div className="mb-2">

    //     <h2 className="
    //       text-[11px]
    //       uppercase
    //       tracking-[0.2em]
    //       text-slate-400
    //     ">
    //       Vehicle Metrics
    //     </h2>

    //   </div>

    //   {/* Metrics */}
    //   <div className="
    //     grid grid-cols-4
    //     gap-2
    //     flex-1
    //   ">

    //     {/* Battery */}
    //     <div className="
    //       rounded-[22px]
    //       bg-slate-800/80
    //       border border-slate-700
    //       p-3
    //       flex flex-col
    //       justify-between
    //     ">

    //       <Battery className="
    //         w-5 h-5
    //         text-green-400
    //       " />

    //       <div>

    //         <div className="
    //           text-xl
    //           font-bold
    //           text-white
    //         ">
    //           84%
    //         </div>

    //         <div className="
    //           text-[10px]
    //           uppercase
    //           tracking-wide
    //           text-slate-400
    //         ">
    //           Battery
    //         </div>

    //       </div>

    //     </div>

    //     {/* Range */}
    //     <div className="
    //       rounded-[22px]
    //       bg-slate-800/80
    //       border border-slate-700
    //       p-3
    //       flex flex-col
    //       justify-between
    //     ">

    //       <Gauge className="
    //         w-5 h-5
    //         text-cyan-400
    //       " />

    //       <div>

    //         <div className="
    //           text-xl
    //           font-bold
    //           text-white
    //         ">
    //           420
    //         </div>

    //         <div className="
    //           text-[10px]
    //           uppercase
    //           tracking-wide
    //           text-slate-400
    //         ">
    //           km Range
    //         </div>

    //       </div>

    //     </div>

    //     {/* Temperature */}
    //     <div className="
    //       rounded-[22px]
    //       bg-slate-800/80
    //       border border-slate-700
    //       p-3
    //       flex flex-col
    //       justify-between
    //     ">

    //       <Thermometer className="
    //         w-5 h-5
    //         text-orange-400
    //       " />

    //       <div>

    //         <div className="
    //           text-xl
    //           font-bold
    //           text-white
    //         ">
    //           24°
    //         </div>

    //         <div className="
    //           text-[10px]
    //           uppercase
    //           tracking-wide
    //           text-slate-400
    //         ">
    //           Cabin Temp
    //         </div>

    //       </div>

    //     </div>

    //     {/* Charging */}
    //     <div className="
    //       rounded-[22px]
    //       bg-slate-800/80
    //       border border-slate-700
    //       p-3
    //       flex flex-col
    //       justify-between
    //     ">

    //       <Zap className="
    //         w-5 h-5
    //         text-yellow-400
    //       " />

    //       <div>

    //         <div className="
    //           text-xl
    //           font-bold
    //           text-white
    //         ">
    //           Fast
    //         </div>

    //         <div className="
    //           text-[10px]
    //           uppercase
    //           tracking-wide
    //           text-slate-400
    //         ">
    //           Charging
    //         </div>

    //       </div>

    //     </div>

    //   </div>

    // </div>
<div className="h-full flex flex-col">

  {/* Header */}
  <div className="mb-2">

    <h2
      className="
        text-[10px]
        uppercase
        tracking-[0.25em]
        text-muted-foreground
      "
    >
      Vehicle Metrics
    </h2>

  </div>

  {/* Embedded Metrics Strip */}
  <div
    className="
      flex
      items-center
      justify-between
      flex-1
      px-2
    "
  >

    {/* Battery */}
    <div
      className="
        flex flex-col
        items-center
        justify-center
        gap-1

        text-muted-foreground
      "
    >

      <Battery
        className="
          w-4 h-4
          text-green-400
        "
      />

      <div
        className="
          text-sm
          font-semibold
          text-foreground
        "
      >
        84%
      </div>

      <div
        className="
          text-[9px]
          uppercase
          tracking-wide
        "
      >
        Battery
      </div>

    </div>

    {/* Range */}
    <div
      className="
        flex flex-col
        items-center
        justify-center
        gap-1

        text-muted-foreground
      "
    >

      <Gauge
        className="
          w-4 h-4
          text-blue-500
          dark:text-emerald-400
        "
      />

      <div
        className="
          text-sm
          font-semibold
          text-foreground
        "
      >
        420
      </div>

      <div
        className="
          text-[9px]
          uppercase
          tracking-wide
        "
      >
        Range
      </div>

    </div>

    {/* Temperature */}
    <div
      className="
        flex flex-col
        items-center
        justify-center
        gap-1

        text-muted-foreground
      "
    >

      <Thermometer
        className="
          w-4 h-4
          text-orange-400
        "
      />

      <div
        className="
          text-sm
          font-semibold
          text-foreground
        "
      >
        24°
      </div>

      <div
        className="
          text-[9px]
          uppercase
          tracking-wide
        "
      >
        Cabin
      </div>

    </div>

    {/* Charging */}
    <div
      className="
        flex flex-col
        items-center
        justify-center
        gap-1

        text-muted-foreground
      "
    >

      <Zap
        className="
          w-4 h-4
          text-yellow-400
        "
      />

      <div
        className="
          text-sm
          font-semibold
          text-foreground
        "
      >
        Fast
      </div>

      <div
        className="
          text-[9px]
          uppercase
          tracking-wide
        "
      >
        Charge
      </div>

    </div>

  </div>

</div>
    
    

  );

}