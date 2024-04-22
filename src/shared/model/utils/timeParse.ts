export const toUnix = (date: string) => {
  const parts = date.split(".");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  const dateObject = new Date(year, month, day);
  const unixTime = Math.floor(dateObject.getTime() / 1000);

  return unixTime;
};
