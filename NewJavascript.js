
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