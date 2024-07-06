const array = [1, 2, 3, 4, 5];

array.forEach((element) => {
    console.log(element);
});
    

// write a javascript program to get the current day of the week
const getDayOfWeek = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
}
console.log(`Today is ${getDayOfWeek()}`);

console.log(new Date().getDay());
