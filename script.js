    // Year, month (0-indexed), day, hour, minute, second, millisecond
const date = new Date(); // Represents January 1, 2023, 00:00:00 UTC
document.getElementById("todayDate").innerHTML=date;

const year= date.getFullYear();
const month=date.getMonth();
const day=date.getDay();
const hour=date.getHours();
const minutes=date.getMinutes()

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
