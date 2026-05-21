/**
 * Design Tokens
 * Centralized design system values for consistency across the application
 */

export const designTokens = {
  colors: {
    primary: {
      light: '#06B6D4',    // cyan-500
      dark: '#06B6D4',
      hover: '#0891B2',    // cyan-600
      50: '#CFFAFE',
      100: '#A5F3FC',
      500: '#06B6D4',
      600: '#0891B2',
      900: '#164E63',
    },
    secondary: {
      light: '#2563EB',    // blue-600
      dark: '#3B82F6',     // blue-500
      500: '#3B82F6',
      600: '#2563EB',
    },
    semantic: {
      success: '#22C55E',   // green-500
      warning: '#F59E0B',   // amber-500
      danger: '#EF4444',    // red-500
      info: '#3B82F6',      // blue-500
    },
    neutral: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
      950: '#020617',
    },
  },
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
  },
  radius: {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 20px rgba(59, 130, 246, 0.06)',
    xl: '0 8px 30px rgba(16, 185, 129, 0.06)',
    elevated: 'shadow-[0_4px_20px_rgba(59,130,246,0.1)]',
    prominent: 'shadow-[0_8px_32px_rgba(59,130,246,0.15)]',
    interactive: 'shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
  },
  transitions: {
    fast: '150ms ease-out',
    base: '200ms ease-out',
    slow: '300ms ease-out',
    smooth: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  typography: {
    h1: {
      size: 'text-3xl md:text-4xl',
      weight: 'font-bold',
      tracking: 'tracking-tight',
    },
    h2: {
      size: 'text-2xl md:text-3xl',
      weight: 'font-semibold',
      tracking: 'tracking-tight',
    },
    h3: {
      size: 'text-xl md:text-2xl',
      weight: 'font-semibold',
    },
    body: {
      size: 'text-base',
      weight: 'font-normal',
    },
    small: {
      size: 'text-sm',
      weight: 'font-normal',
    },
    xsmall: {
      size: 'text-xs',
      weight: 'font-normal',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  zIndex: {
    hide: '-1',
    base: '0',
    dropdown: '1000',
    sticky: '1100',
    fixed: '1200',
    backdrop: '1300',
    offcanvas: '1400',
    modal: '1500',
    popover: '1600',
    tooltip: '1700',
  },
} as const;

// Export color palette for easy access
export const colors = designTokens.colors;
export const spacing = designTokens.spacing;
export const radius = designTokens.radius;
export const shadows = designTokens.shadows;
export const transitions = designTokens.transitions;
export const typography = designTokens.typography;
