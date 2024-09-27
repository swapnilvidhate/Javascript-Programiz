// const leapYear = 2020;
const leapYear = 2023;

if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0) {
    console.log("This Is Leap Year")
}

else {
    console.log("This Is Not A Leap Year")
}