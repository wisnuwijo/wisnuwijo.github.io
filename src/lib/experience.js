export const CAREER_START_YEAR = 2018

/**
 * Returns current years of experience based on the current calendar year.
 * e.g., in 2026: 2026 - 2018 = 8
 * in 2027: 2027 - 2018 = 9
 */
export function getYOE() {
  const currentYear = new Date().getFullYear()
  return Math.max(1, currentYear - CAREER_START_YEAR)
}

export function getYOEText() {
  return `${getYOE()}+`
}
