import React from 'react';

type StatusType = 'active' | 'warning' | 'danger' | 'neutral';

interface StatusBadgeProps {
  status: string;
  type?: StatusType;
  showDot?: boolean;
  className?: string;
}

/**
 * StatusBadge Component
 * Displays status information with color-coded backgrounds and animated indicator dot
 */
export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  type = 'neutral',
  showDot = true,
  className = '',
}) => {
  const statusStyles: Record<StatusType, {
    bg: string;
    text: string;
    border: string;
    dot: string;
  }> = {
    active: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      text: 'text-emerald-700 dark:text-emerald-400',
      border: 'border-emerald-200/50 dark:border-emerald-900/50',
      dot: 'bg-emerald-500',
    },
    warning: {
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      text: 'text-amber-700 dark:text-amber-400',
      border: 'border-amber-200/50 dark:border-amber-900/50',
      dot: 'bg-amber-500',
    },
    danger: {
      bg: 'bg-red-50 dark:bg-red-950/30',
      text: 'text-red-700 dark:text-red-400',
      border: 'border-red-200/50 dark:border-red-900/50',
      dot: 'bg-red-500',
    },
    neutral: {
      bg: 'bg-slate-50 dark:bg-slate-800/30',
      text: 'text-slate-700 dark:text-slate-400',
      border: 'border-slate-200/50 dark:border-slate-700/50',
      dot: 'bg-slate-500',
    },
  };

  const style = statusStyles[type];

  return (
    <div
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-full border
        transition-all duration-200
        ${style.bg} ${style.text} ${style.border}
        ${className}
      `}
    >
      {showDot && (
        <div
          className={`
            w-2 h-2 rounded-full flex-shrink-0
            ${style.dot}
            ${type !== 'neutral' ? 'animate-pulse' : ''}
          `}
        />
      )}
      <span className="text-xs font-medium whitespace-nowrap">
        {status}
      </span>
    </div>
  );
};

/**
 * StatusBadgeGroup Component
 * Displays multiple status badges in a row
 */
export const StatusBadgeGroup: React.FC<{
  badges: Array<{ status: string; type: StatusType }>;
  className?: string;
}> = ({ badges, className = '' }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {badges.map((badge, index) => (
      <StatusBadge
        key={index}
        status={badge.status}
        type={badge.type}
      />
    ))}
  </div>
);
