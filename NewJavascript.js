
// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log("Today is: ",day);
console.log("current time is :",hours + " PM : " +minutes+" :"+seconds);

// write a javascript program to get current time with AM/PM
const dateq = new Date();
const hoursq = dateq.getHours();
const minutesq = dateq.getMinutes();
const secondsq = dateq.getSeconds();
const ampm = hoursq >=12 ?'PM':'AM';
console.log("current time is :",hoursq +" "+ampm);
