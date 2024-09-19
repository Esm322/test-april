export function numberFormat(value: number): string {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'EUR' }).format(value);
}
