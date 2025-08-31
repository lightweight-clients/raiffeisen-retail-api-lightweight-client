/**
 * Converts a Date to a Serbian timestamp string in the format DD.MM.YYYY HH:mm:ss.
 * @param date - The date to format.
 * @returns The formatted timestamp string.
 */
export const dateToSerbianTimestamp = (date: Date): string => {
  return date.toLocaleTimeString('sr-RS', {
    hour12: false,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replace('. ', ' ');
};
