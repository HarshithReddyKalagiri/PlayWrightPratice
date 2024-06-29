
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


// write a javascript program to add 5 days to current date
const currentDate = new Date();
const newDate = new Date(currentDate);
newDate.setDate(newDate.getDate()+200);
let dd = newDate;
console.log("5 days from now is: ",parseInt(dd.getDate())+"-"+parseInt(dd.getMonth()+1)+"-"+dd.getFullYear());

// write a javascript program to get your current age by providing your date of birth
const dob = new Date("1992-03-14");
const today = new Date();
const diff = today - dob;  //difference in milliseconds
const age = Math.floor(diff/31536000000);    
console.log("your age is: ",age);


// write a javascript program to get percent of a number
const number = 500000;
const percent = 10;
const result = (percent/100)*number;
console.log(`${percent}% of ${number} is ${result}`);


// write a javascript program to display the number in human readable format
const number1 = 5000;
const number2 = 20000000;
const number3 = 100000000;
const number4 = 1000000000;
const number5 = 10000000000;
const number6 = 100000000000;
const number7 = 1000000000000;
const number8 = 10000000000000;
const number9 = 100000000000000;
const number10 = 1000000000000000;
const number11 = 10000000000000000;
const number12 = 100000000000000000;
const number13 = 1000000000000000000;
const number14 = 10000000000000000000;
const number15 = 100000000000000000000;

//convert the number to english words
const numberToWords = (number) => {
    const words = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", "nineteen"];
    const scales = ["", "thousand", "million", "billion", "trillion"];
    const numberString = number.toString();
    const numberLength = numberString.length;
    const groups = Math.ceil(numberLength / 3);
    if (number === 0) {
        return "zero";
    }
    let word = "";
    for (let i = 0; i < groups; i++) {
        const chunk = numberString.slice(-3 * (i + 1), numberLength - 3 * i);
        let chunkWord = "";
        let chunkLength = chunk.length;
        for (let j = 0; j < chunkLength; j++) {
            const digit = parseInt(chunk.charAt(j));
            const position = chunkLength - j - 1;
            if (position === 0) {
                chunkWord += words[digit];
            } else if (position === 1) {
                if (digit === 1) {
                    chunkWord += teens[parseInt(chunk.charAt(j + 1))];
                    break;
                } else {
                    chunkWord += tens[digit];
                }
            } else if (position === 2) {
                chunkWord += words[digit] + " hundred";
            }
        }
        if (chunkWord !== "") {
            word = chunkWord + " " + scales[i] + " " + word;
        }
    }
    return word.trim();
}

console.log(`${number2} in words is ${numberToWords(number2)}`);

// write a javascript program to get the last day of a month
const getLastDayOfMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();  //0 is the last day of the previous month
}
console.log(`Last day of month is ${getLastDayOfMonth(2024, 3)}`);


//write a javascript program to get the first day of a month
const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();   //1 is the first day of the month
}
console.log(`First day of month is ${getFirstDayOfMonth(2024, 4)}`);

// write a javascript program to get the number of days in a month
const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
}
console.log(`Number of days in month is ${getDaysInMonth(2024, 3)}`);

// write a javascript program to get the number of days left in a year
const getDaysLeftInYear = () => {
    const today = new Date();
    //const year = today.getFullYear();
    const daysInYear = 365;
    const daysElapsed = Math.floor((today - new Date(year, 0, 0)) / 86400000);  //difference in milliseconds
    return daysInYear - daysElapsed;
}
console.log(`Number of days left in year is ${getDaysLeftInYear()}`);

console.log(today);
console.log(year);

// write a javascript program to get the number of days left in a month
const getDaysLeftInMonth = () => {
    const today = new Date().getDate();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth - today;
}
console.log(`Number of days left in month is ${getDaysLeftInMonth()}`);

// write a javascript program to get the number of days left in a week 
const getDaysLeftInWeek = () => {
    const today = new Date().getDay();
    const daysInWeek = 7;
    return daysInWeek - today;
}
console.log(`Number of days left in week is ${getDaysLeftInWeek()}`);

// write a javascript program to convert a sting to title case
const toTitleCase = (String) => {
    return String.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

}
console.log(toTitleCase('hello world'));
 