export const getYear = (date: string) => {
  try {
    const _date = new Date(date);
    if (!_date || !(_date instanceof Date)) throw new Error(`Invalid date`);
    return _date.getFullYear();
  } catch (error) {
    return error;
  }
};
