//Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
let movies = ['The Green Mile','Schindler List','The Shawshank Redemption','Forrest Gump']
for (let i=0;i < movies.length; i++){//first option
console.log(movies[i])
}
for (let el of movies){//second option
    console.log(el)
}
movies.forEach(name => console.log(name))// third option
//Given an array of car manufacturers, convert the array to a string and back to an array
let task2 = ['Hundai','Ford','BMW','Honda'];
console.log(typeof task2,task2);
task2 = task2.toString();
console.log(typeof task2,task2);
task2 = task2.split(',');
console.log(typeof task2,task2);
//Given an array of the names of your friends, add the words hello to each element of the array
let task3 = ['Nacho','Dima','Vanya','Gena']
let task3_1 = []
task3.forEach((currentNumber) => task3_1.push('Hello ' + currentNumber))
console.log(task3_1)
let task3_2 = task3.map((currentNumber) => ('Hello ' + currentNumber))
console.log(task3_2)
//Convert numeric array to Boolean
let task4 = [1,6,7,8,3,4,5,6];
let task4_1 = [];
task4.forEach((currentNumber) =>task4_1.push(!!currentNumber))
console.log(typeof task4, task4)
console.log(typeof task4_1, task4_1)
//Sort the array [1,6,7,8,3,4,5,6] in descending order
let task5 = [1,6,7,8,3,4,5,6];
console.log(task5.sort(function(a, b){return b-a}));
//Filter array [1,6,7,8,3,4,5,6] by value> 3
let task6 = [1,6,7,8,3,4,5,6];
let task6filtered = task6.filter(currentNumber => currentNumber > 3);
console.log(task6filtered);
//Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
function task7(array,number) {
    return console.log(array[number])
}
task7(task6,1)
task7(movies,2)
//Implement a loop that will print the number 'a' until it is less than 10
a = 0;
while (a < 10){
    a++
    console.log(a)
}
//Implement a loop that prints prime numbers to the console
let task9 = 35;
for(let i = 1;i <=task9;i++){
    let flag = 0;
    for(let j =2; j < i;j++){
        if(i%j == 0){
            flag = 1
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i,'is prime');
}
}
//Implement a loop that prints odd numbers to the console
number = 30;
for(i=1;i <= number; i++){
    if (i%2 != 0) {
        console.log(i,'is odd')
    }
}
