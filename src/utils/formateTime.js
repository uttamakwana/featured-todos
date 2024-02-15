export default function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  // Get hours, minutes, and seconds
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be converted to 12

  // Get day, month, and year
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based
  const year = date.getFullYear();

  // Format time string
  const timeString = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds} ${ampm}`;

  // Format date string
  const dateString = `${day}/${month}/${year}`;
  return { time: timeString, date: dateString };
}
