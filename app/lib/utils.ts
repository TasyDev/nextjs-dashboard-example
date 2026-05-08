export const moneyFormat = (num: number, locale: string = 'en-US', currency: string = 'USD'): string => {
  return new Intl.NumberFormat(locale, { style: "currency", currency: currency }).format(num)
}

export const formatDate = (date: Date): string => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
