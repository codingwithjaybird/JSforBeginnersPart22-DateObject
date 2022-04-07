// DATE OBJECT:
// Date ()

// Date Object by Default:
const today = new Date();
console.log(today);
// Date is stored as a number: number of milliseconds since midnight January 1, 1970.

// getTime()
let msSince1970 = today.getTime();
console.log(msSince1970);

// toDateString()
let organizedDate = today.toDateString();
console.log(organizedDate);

// getFullYear()
console.log('*** Year in 4 digits ***');
let currentYear = today.getFullYear();
console.log(currentYear);

// getDate()
console.log('*** Day of Month 1-31');
let currentDate = today.getDate();
console.log(currentDate);

// getMonth()
console.log('*** Month 0 - 11 ***');
let currentMonth = today.getMonth();
console.log(currentMonth);

// getHours()
console.log('*** Hours 0 - 23 ***');
let currentHour = today.getHours();
console.log(currentHour);

// getMinutes()
console.log('*** Minutes 0-59 ***');
let currentMinute = today.getMinutes();
console.log(currentMinute);

// getSeconds()
console.log('*** Seconds 0-59 ***');
let currentSecond = today.getSeconds();
console.log(currentSecond);

// getDay()
console.log('*** Day of the week ***');
let dayOfWeek = today.getDay();
console.log(dayOfWeek);

// Manually set a new date with the Date constructor
console.log('*** Set our own Date Object ***');
const newDate = new Date("October 25, 2006 04:19:03");
console.log(newDate);