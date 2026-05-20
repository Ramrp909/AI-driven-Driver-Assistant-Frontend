import DriverMonitor
from "../app/components/DriverMonitor";
import VehicleControls from "../app/components/VehicleControls";
import VehicleMetrics from "../app/components/VehicleMetrics";
import VehicleStatus from "../app/components/VehicleStatus";


export default function CockpitLayout() {

  return (

    <div className="min-h-screen p-4 overflow-hidden">

  {/* Header */}
  <div
    className="
      h-16 mb-4 rounded-2xl
      border border-slate-700
      bg-slate-900/80
    "
  >
    Header
  </div>

  {/* Outer Cockpit Shell */}
    <div className="flex gap-4 h-[calc(100vh-72px)]">

    {/* Full Height Navigation Rail */}
    <div
      className="
        w-[80px]
        rounded-2xl
        border border-slate-700
        bg-slate-900/80
        p-4
        flex-shrink-0
      "
    >
      Nav Rail
    </div>

    {/* Right Cockpit Content */}
    <div className="flex-1 flex flex-col gap-4 overflow-hidden">

      {/* Main Cockpit Grid */}
      <div
        className="
          grid
          grid-cols-3
          gap-4
          flex-1
          min-h-0
        "
      >

        {/* Driver Monitor */}


            <div
            className="
              rounded-[32px]
              border border-slate-700
              bg-slate-900/80
              p-4
              overflow-hidden
              h-full
            "
          >
          <DriverMonitor />
        </div>

        {/* AI Center */}
        
            <div
            className="
              rounded-[32px]
              border border-slate-700
              bg-slate-900/80
              p-4
              overflow-hidden
              h-full
            "
          >
          AI Center
        </div>

        {/* Right Side Stack */}
            <div className="
          grid
          grid-rows-3
          gap-4
          h-full
          min-h-0
          ">

          <div
            className="
              
              rounded-[28px]
overflow-hidden
min-h-0
              border border-slate-700
              bg-slate-900/80
              p-4
            "
          >
          <VehicleStatus />
          </div>

          <div
            className="
              
              rounded-[28px]
overflow-hidden
min-h-0
              border border-slate-700
              bg-slate-900/80
              p-4
            "
          >
            <VehicleMetrics />
          </div>

          <div
            className="
              rounded-[28px]
              overflow-hidden
              min-h-0
              border border-slate-700
              bg-slate-900/80
              p-4
            "
          >
            AI Alerts
          </div>

        </div>

      </div>

      {/* Bottom Controls */}
      <div
        className="
          grid
          grid-cols-[1.2fr_0.8fr]
          gap-4
          h-[140px]
          flex-shrink-0
        "
      >

        <div
          className="
            rounded-xl
            border border-slate-700
            bg-slate-900/80
          "
        >
          <VehicleControls />
        </div>

        <div
          className="
            rounded-[28px]
            border border-slate-700
            bg-slate-900/80
          "
        >
          AI Assistant
        </div>

      </div>

    </div>

  </div>

</div>

  );

}