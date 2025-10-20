export const APP_NAME = 'Gold Price'
export const DEFAULT_LOCALE = 'vi-VN'
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
} as const

export type Theme = typeof THEME[keyof typeof THEME]


