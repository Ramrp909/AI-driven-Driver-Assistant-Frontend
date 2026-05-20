export default function VehicleStatus() {

  return (

    <div className="h-full flex flex-col">

      {/* Header */}
      <div className="mb-2">

        <h2 className="
          text-[11px]
          uppercase
          tracking-[0.2em]
          text-slate-400
        ">
          Vehicle Status
        </h2>

      </div>

      {/* Speedometer */}
      <div className="
        flex-1
        flex flex-col
        items-center
        justify-center
      ">

        {/* Outer Meter */}
        <div className="
          relative
          w-20 h-20
          rounded-full
          border-[10px]
          border-cyan-500/30
          flex items-center
          justify-center
          shadow-[0_0_40px_rgba(34,211,238,0.12)]
        ">

          {/* Inner Circle */}
          <div className="
            w-15 h-15
            rounded-full
            bg-slate-950
            border border-slate-700
            flex flex-col
            items-center
            justify-center
          ">

            <span className="
              text-2xl
              font-bold
              text-white
            ">
              78
            </span>

            <span className="
              text-[8px]
              uppercase
              tracking-wide
              text-slate-400
            ">
              km/h
            </span>

          </div>

        </div>

        {/* Gear Strip */}
        <div className="
          mt-2
          flex items-center
          gap-2
          rounded-2xl
          bg-slate-800/80
          border border-slate-700
          px-3 py-2
        ">

          {["P", "R", "N", "D"].map((gear) => (

            <div
              key={gear}
              className={`
                w-5 h-5
                rounded-xl
                flex items-center
                justify-center
                text-xs
                font-semibold
                transition-all

                ${
                  gear === "D"
                    ? "bg-cyan-500 text-black"
                    : "text-slate-400"
                }
              `}
            >
              {gear}
            </div>

          ))}

        </div>

      </div>

    </div>

  );

}