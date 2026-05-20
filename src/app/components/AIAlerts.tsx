import {
  AlertTriangle,
  ShieldAlert,
  Navigation,
  Brain,
} from "lucide-react";

const alerts = [

  {
    title: "Driver Attention Reduced",
    time: "2s ago",
    type: "warning",
    icon: AlertTriangle,
  },

  {
    title: "Lane Assist Active",
    time: "12s ago",
    type: "safe",
    icon: Navigation,
  },

  {
    title: "AI Route Optimized",
    time: "1m ago",
    type: "info",
    icon: Brain,
  },

  {
    title: "Collision Monitoring Enabled",
    time: "3m ago",
    type: "danger",
    icon: ShieldAlert,
  },

];

export default function AIAlerts() {

  return (

    <div className="h-full flex flex-col">

      {/* Header */}
      <div className="
        flex items-center
        justify-between
        mb-3
      ">

        <div
        className="grid grid-cols-3">

          <h2 className="
            text-[11px]
            uppercase
            tracking-[0.2em]
            text-slate-400
            
          ">
            AI Alerts
          </h2>

          <p className="
            text-[10px]
            text-slate-500
            
          ">
            Live Autonomous Feed
          </p>

        </div>

        {/* Active Pulse */}
        <div className="
          relative
          w-3 h-3
          rounded-full
          bg-cyan-400
        ">

          <div className="
            absolute inset-0
            rounded-full
            bg-cyan-400
            animate-ping
            opacity-50
          " />

        </div>

      </div>

      {/* Alerts Feed */}
      <div className="
        grid
grid-cols-2
gap-2
h-full
      ">

        {alerts.map((alert, index) => {

          const Icon = alert.icon;

          return (

            <div
              key={index}
              className={`
               
                rounded-[20px]
                border
                px-2.5 py-2
                w-full
                max-w-[220px]
                backdrop-blur-md
                transition-all
                hover:scale-[1.01]

                ${
                  alert.type === "danger"
                    ? "bg-red-500/10 border-red-400/30"
                    : alert.type === "warning"
                    ? "bg-yellow-500/10 border-yellow-400/30"
                    : alert.type === "safe"
                    ? "bg-green-500/10 border-green-400/30"
                    : "bg-cyan-500/10 border-cyan-400/30"
                }
              `}
            >

              <div className="
                flex items-start
                gap-3
              ">

                {/* Icon */}
                <div
                  className={`
                    w-9 h-9
                    rounded-xl
                    flex items-center
                    justify-center
                    flex-shrink-0

                    ${
                      alert.type === "danger"
                        ? "bg-red-500/20"
                        : alert.type === "warning"
                        ? "bg-yellow-500/20"
                        : alert.type === "safe"
                        ? "bg-green-500/20"
                        : "bg-cyan-500/20"
                    }
                  `}
                >

                  <Icon
                    className={`
                      w-4 h-4

                      ${
                        alert.type === "danger"
                          ? "text-red-300"
                          : alert.type === "warning"
                          ? "text-yellow-300"
                          : alert.type === "safe"
                          ? "text-green-300"
                          : "text-cyan-300"
                      }
                    `}
                  />

                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">

                  <div className="
                    text-xs
                    font-medium
                    text-white
                    truncate
                  ">
                    {alert.title}
                  </div>

                  <div className="
                    text-[10px]
                    text-slate-500
                    mt-1
                  ">
                    {alert.time}
                  </div>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}