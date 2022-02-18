export const availableMonths = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

export const useCalculateAge = (
  birthYear?: string | number,
  birthMonth?: string,
): number | null => {
  if (birthYear && birthMonth) {
    const birthMonthIndex = availableMonths.indexOf(birthMonth);
    if (!birthYear || birthMonthIndex < 0) {
      return null;
    }
    const today = new Date();
    const years = today.getFullYear() - Number(birthYear);
    const months = today.getMonth() - birthMonthIndex;
    return years + months / 12;
  }
  return null;
};
