"use client";
export function toFixed(fractionDigits: number | undefined = 2): (value: string) => string {
  return (value) => parseFloat(value).toFixed(fractionDigits);
}
export function toLocale(value: string): string {
  return parseFloat(value).toLocaleString();
}
