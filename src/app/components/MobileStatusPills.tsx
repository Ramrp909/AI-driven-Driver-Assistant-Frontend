interface StatusCard {
  label: string;
  value: string;
  color: string;
  icon: any;
}

interface Props {
  statusCards: StatusCard[];
}

export default function MobileStatusPills({
  statusCards,
}: Props) {

  const colorClasses = {
    green:
      "bg-green-500/10 text-green-500 border-green-500/20",

    cyan:
      "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",

    red:
      "bg-red-500/10 text-red-500 border-red-500/20",

    amber:
      "bg-amber-500/10 text-amber-500 border-amber-500/20",
  };

  return (
    <div className="flex flex-wrap gap-2">

      {statusCards.map((card) => {

        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className={`
              flex items-center gap-2
              px-3 py-2 rounded-xl
              border backdrop-blur-lg
              text-xs font-medium

              ${colorClasses[
                card.color as keyof typeof colorClasses
              ]}
            `}
          >
            <Icon className="w-4 h-4" />

            <span>
              {card.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}