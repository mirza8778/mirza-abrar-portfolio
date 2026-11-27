export function experienceYears(): string {
  const now = new Date();
  const months = (now.getFullYear() - 2023) * 12 + (now.getMonth() + 1 - 3);
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem === 0 ? `${years}+` : `${years}.${rem}+`;
}