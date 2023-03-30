
const dateFormatter = (dateStr) => {
//   const dateStr = "2023-03-26";
  const dateObj = new Date(dateStr);
  const monthName = dateObj.toLocaleString("default", { month: "long" });
  const daysAgo = Math.floor((Date.now() - dateObj) / (1000 * 3600 * 24));
  const outputStr = `${monthName} ${dateObj.getDate()} (${daysAgo} days ago)`;
  return outputStr;
};

export {dateFormatter}