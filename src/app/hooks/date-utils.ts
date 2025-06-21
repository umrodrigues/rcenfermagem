export const DEFAULT_SIX_MONTHS = '6';
export const DEFAULT_THREE_MONTHS = '3';

export const getLastTenYears = () => {
  const currentYear = new Date().getFullYear();
  const years: { value: string; text: string }[] = [];

  for (let i = currentYear; i > currentYear - 10; i--) {
    years.push({ value: i.toString(), text: i.toString() });
  }

  return years;
};

export const getCurrentDateFormatted = (): string => {
  const currentDate = new Date();
  return formatDate(currentDate);
};

export const getPastMonthsDateFormatted = (months: string): string => {
  const pastDate = new Date();
  pastDate.setMonth(pastDate.getMonth() - Number(months));
  return formatDate(pastDate);
};

export const getYearRangeFormatted = (year: number): { initDate: string; endDate: string } => {
  const initDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);
  return {
    initDate: formatDate(initDate),
    endDate: formatDate(endDate),
  };
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  return `${year}-${month}-${day}`;
};

export const padZero = (value: number): string => {
  return value < 10 ? `0${value}` : `${value}`;
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const formatToBrazilianDate = (inputDate: any): string => {
  const parts = inputDate.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  const dateObj = new Date(year, month, day);

  const formattedDay = dateObj.getDate().toString().padStart(2, '0');
  const formattedMonth = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const formattedYear = dateObj.getFullYear();

  return `${formattedDay}/${formattedMonth}/${formattedYear}`;
};

export const getDatesByFilter = (value: string) => {
  if (value === DEFAULT_THREE_MONTHS || value === DEFAULT_SIX_MONTHS) {
    return {
      endDate: getCurrentDateFormatted(),
      initDate: getPastMonthsDateFormatted(parseInt(value, 10).toString()),
    };
  }

  const year = parseInt(value, 10);
  const { initDate, endDate } = getYearRangeFormatted(year);

  return { initDate, endDate };
};
