export const getCurrentDate = () => {
  const date = new Date();
  const day = date.toLocaleDateString('en-us', { weekday: 'short' });
  const month = date.toLocaleDateString('en-us', { month: 'short' });

  return `${day}, ${date.getDate()} ${month}`;
};

export const formatStringDate = (date: string | Date) => {
  const toDateObj = new Date(date);
  const day = toDateObj.getDate();
  const month = toDateObj.toLocaleDateString('en-us', { month: 'short' });
  const year = toDateObj.getFullYear();

  return `${day}. ${month}, ${year}`;
};
