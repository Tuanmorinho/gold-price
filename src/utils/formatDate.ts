export function formatDate(date: Date | string | number, locale = 'vi-VN', options: Intl.DateTimeFormatOptions = {}) {
  const d = date instanceof Date ? date : new Date(date)
  const defaultOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
  return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(d)
}


