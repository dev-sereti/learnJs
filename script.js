    // Year, month (0-indexed), day, hour, minute, second, millisecond
const date = new Date(1672531200000); // Represents January 1, 2023, 00:00:00 UTC
document.getElementById("todayDate").innerHTML=timestampDate;

const year= date.getDate();
const month=date.getMonth();
const day=date.getDay();
const hour=date.getHours();
const minutes=date.getMinutes()



