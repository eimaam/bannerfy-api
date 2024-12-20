import { formatISO, startOfDay, addYears } from "date-fns";
import { toZonedTime } from "date-fns-tz";

const getCurrentUTCDate = () => {
  const now = new Date();
  return toZonedTime(now, 'UTC');
};

export const dates = {
  CURRENT_DATE_TIME_UTC: getCurrentUTCDate().toISOString(), // Current date and time in UTC
  CURRENT_DATE_UTC: startOfDay(getCurrentUTCDate()).toISOString(), // Start of the current day in UTC
};

/**
 * Generates a date range of a specified number of years starting from a given date.
 *
 * @param fromDate - The starting date of the range. It can be a Date object or a string. Defaults to the current UTC date.
 * @param range - The number of years to include in the range. Defaults to 1 year.
 * @returns An object containing the start date and end date of the range.
 */
export const generateYearDateRange = (
  fromDate: Date | string = dates.CURRENT_DATE_UTC,
  range: number = 1
) => {
  const startDate = new Date(fromDate);
  const endDate = addYears(startDate, range);

  return {
    startDate: formatISO(startDate),
    endDate: formatISO(endDate),
  };
};
