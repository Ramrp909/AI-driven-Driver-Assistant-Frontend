import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

/**
 * EmptyState Component
 * Displays a friendly empty state with icon, title, description, and optional action button
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  action,
  className = '',
}) => (
  <div
    className={`
      flex flex-col items-center justify-center
      py-12 px-4 text-center
      ${className}
    `}
  >
    {/* Icon */}
    <div
      className={`
        w-16 h-16 rounded-full
        bg-slate-100 dark:bg-slate-800
        flex items-center justify-center mb-4
        flex-shrink-0
      `}
    >
      <Icon className="w-8 h-8 text-slate-400 dark:text-slate-500" />
    </div>

    {/* Title */}
    <h3
      className={`
        text-lg font-semibold
        text-slate-900 dark:text-white
        mb-2
      `}
    >
      {title}
    </h3>

    {/* Description */}
    <p
      className={`
        text-sm
        text-slate-600 dark:text-slate-400
        max-w-sm mb-6
      `}
    >
      {description}
    </p>

    {/* Action Button */}
    {action && (
      <button
        onClick={action.onClick}
        className={`
          px-4 py-2 rounded-lg
          bg-cyan-500 hover:bg-cyan-600
          text-white font-medium text-sm
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-cyan-500/50
        `}
      >
        {action.label}
      </button>
    )}
  </div>
);

/**
 * EmptyAlertState
 * Specific empty state for alerts section
 */
export const EmptyAlertState: React.FC<{ onRefresh?: () => void }> = ({
  onRefresh,
}) => {
  const AlertIcon: LucideIcon = ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  return (
    <EmptyState
      icon={AlertIcon}
      title="No Alerts"
      description="Everything is running smoothly. Keep up the great driving!"
      action={
        onRefresh
          ? { label: 'Refresh', onClick: onRefresh }
          : undefined
      }
    />
  );
};

/**
 * EmptyDataState
 * Specific empty state for data sections
 */
export const EmptyDataState: React.FC<{
  title?: string;
  description?: string;
  onRetry?: () => void;
}> = ({
  title = 'No Data',
  description = 'There is no data to display at the moment.',
  onRetry,
}) => {
  const DataIcon: LucideIcon = ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );

  return (
    <EmptyState
      icon={DataIcon}
      title={title}
      description={description}
      action={
        onRetry
          ? { label: 'Retry', onClick: onRetry }
          : undefined
      }
    />
  );
};

/**
 * EmptySearchState
 * Specific empty state for search results
 */
export const EmptySearchState: React.FC<{
  query: string;
  onClear?: () => void;
}> = ({ query, onClear }) => {
  const SearchIcon: LucideIcon = ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  return (
    <EmptyState
      icon={SearchIcon}
      title="No Results Found"
      description={`We couldn't find any results for "${query}". Try adjusting your search terms.`}
      action={
        onClear
          ? { label: 'Clear Search', onClick: onClear }
          : undefined
      }
    />
  );
};
