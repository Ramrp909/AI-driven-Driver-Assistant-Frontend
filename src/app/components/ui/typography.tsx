import { ReactNode } from 'react';
import { designTokens } from '../../styles/design-tokens';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

/**
 * H1 - Primary heading for page titles
 */
export const H1 = ({ children, className = '' }: TypographyProps) => (
  <h1
    className={`
      ${designTokens.typography.h1.size}
      ${designTokens.typography.h1.weight}
      ${designTokens.typography.h1.tracking}
      text-slate-900 dark:text-white
      ${className}
    `}
  >
    {children}
  </h1>
);

/**
 * H2 - Section heading
 */
export const H2 = ({ children, className = '' }: TypographyProps) => (
  <h2
    className={`
      ${designTokens.typography.h2.size}
      ${designTokens.typography.h2.weight}
      ${designTokens.typography.h2.tracking}
      text-slate-900 dark:text-white
      ${className}
    `}
  >
    {children}
  </h2>
);

/**
 * H3 - Subsection heading
 */
export const H3 = ({ children, className = '' }: TypographyProps) => (
  <h3
    className={`
      ${designTokens.typography.h3.size}
      ${designTokens.typography.h3.weight}
      text-slate-800 dark:text-slate-100
      ${className}
    `}
  >
    {children}
  </h3>
);

interface PProps extends TypographyProps {
  variant?: 'base' | 'small' | 'xsmall';
}

/**
 * P - Body text with variants
 * @param variant - 'base' (default), 'small', or 'xsmall'
 */
export const P = ({ children, variant = 'base', className = '' }: PProps) => {
  const variants = {
    base: 'text-base text-slate-700 dark:text-slate-300',
    small: 'text-sm text-slate-600 dark:text-slate-400',
    xsmall: 'text-xs text-slate-500 dark:text-slate-500',
  };

  return (
    <p className={`${variants[variant]} ${className}`}>
      {children}
    </p>
  );
};

/**
 * Label - For form labels and small headings
 */
export const Label = ({ children, className = '' }: TypographyProps) => (
  <label
    className={`
      text-sm font-medium
      text-slate-700 dark:text-slate-300
      ${className}
    `}
  >
    {children}
  </label>
);

/**
 * Caption - For small, secondary text
 */
export const Caption = ({ children, className = '' }: TypographyProps) => (
  <span
    className={`
      text-xs font-medium
      text-slate-500 dark:text-slate-500
      uppercase tracking-wide
      ${className}
    `}
  >
    {children}
  </span>
);

/**
 * Muted - For disabled or secondary text
 */
export const Muted = ({ children, className = '' }: TypographyProps) => (
  <span
    className={`
      text-sm
      text-slate-500 dark:text-slate-400
      ${className}
    `}
  >
    {children}
  </Muted>
);
