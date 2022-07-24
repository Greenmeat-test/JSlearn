// Create a car object, add a color property to it with the value equals 'black'
const car = {
    color: "black",
};
console.log(car.color)
//Change the color property of the car object to 'green'
car.color = "green"
console.log(car.color)
// Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function func(EnginPower){
    return console.log(EnginPower)
}
car.power(10)
console.log(car)
//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
function task4(pears,apples) {
    return console.log(pears + apples)   
}
task4(4,10)
//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
let TerminalName = 'Sergey';
function task5(CheckName) {
    if (CheckName === TerminalName) {
        return console.log(`Hello ${TerminalName}`)  
    } else {
        return console.log('there is no such name')   
    }   
}
task5("Sergey")
task5("bbb")
//Write a function for calculating the type of argument and type output to the console
function task6(arg){
    return console.log(typeof arg)
}
task6(6)
task6("something")
task6(true)
//Write a function that determines whether a number is prime or not
function task7(num) {

    if (num === 2) {
      return console.log('number is prime');
    } else if (num > 1) {
      for (var i = 2; i < num; i++) {
  
        if (num % i !== 0) {
          return console.log('number is prime');
        } else if (num === i * i) {
          return console.log('number is not prime')
        } else {
          return console.log('number is not prime');
        }
      }
    } else {
      return false;
    }
  
  }
  task7(7)
  task7(12)