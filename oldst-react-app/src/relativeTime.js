export default function relativeTime(date) {
  const prevDate = new Date(date);
  const diff = Number(new Date()) - prevDate;
  const min = 60 * 1000; //multiplied by 1000 since time is calculated in milliseconds
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;
  switch (true) {
    case diff < min:
      const seconds = Math.round(diff / 1000);
      return `Posted ${seconds} ${seconds > 1 ? " seconds" : " second"} ago`;
    case diff < hour:
      const minutes = Math.round(diff / min);
      return `Posted ${minutes} ${minutes > 1 ? " minutes" : " minute"} ago`;
    case diff < day:
      const hours = Math.round(diff / hour);
      return `Posted ${hours} ${hours > 1 ? " hours" : " hour"} ago`;
    case diff < week:
      const days = Math.round(diff / day);
      return `Posted ${days} ${days > 1 ? " days" : " day"} ago`;
    default:
      return `Posted on ${date}`;
  }
}
