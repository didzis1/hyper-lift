export const getCurrentDate = () => {
  const date = new Date();
  const day = date.toLocaleDateString('en-us', { weekday: 'short' });
  const month = date.toLocaleDateString('en-us', { month: 'short' });

  return `${day}, ${date.getDate()} ${month}`;
};
