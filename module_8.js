//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by ptattern: letter 'a', any characer, letter 'b'
const task1 = 'ahb acb aeb aeeb adcb axeb';
const re =/a.b/g;
console.log(task1.match(re))
//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const task2 = '2 + 3 223 2223';
const reg =/2\s\+\s3/g;
console.log(task2.match(reg))
//Get the day, month and year of the current date and output it to the console separately
let date = new Date();
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getFullYear())