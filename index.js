// Функции, function expression и function declaration
// Задача: Простой пример функции

function greet(name){
    console.log("Привет," + name + "!");
}
greet("Николай");

// Задача: Функция как выражение
const multiply = function(a, b){
    return a * b;
}
console.log(multiply(10, 5));

// Задача: Функция для проверки четности числа
function isEven(i)
{
   return i % 2 === 0;
}
console.log(isEven(1));

// Стрелочные функции
// Задача: Сложение двух чисел
const add = (a, b) => a + b;
console.log(add(2, 3));

// Задача: Возведение числа в квадрат
const square = d => d *d;
console.log(square(3));

// Задача: Приветствие с именем
const sayHello = name => "";
console.log("Привет," + " " + "Николай");

// Рекурсия
// Задача: Факториал числа
function factorial (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

// Задача: Фибоначчи
function fibonacci(n){
    if (n <= 1)
    return n;
    return fibonacci(n-1) + fibonacci (n - 2);
}
console.log(fibonacci(6));

// Задача: Сумма чисел от 1 до N
function sum(n){
    if (n === 1)
    return n;
    return n + sum(n - 1);
}
console.log(sum(10));

// Область видимости функции, замыкание
// Задача: Простой замыкание

function creatCounter() {
let count = 0;
return function() {
count++;
return count;
};
}
const counter = creatCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Задача: Защищенное значение
// тут я совсем потерялся. правильно понял, что внутри функции должна быть еще одна функция, которая хранит какое-то значение, и для получения этого значения мы вызываем внешнюю функцию?

function createSecret (){

}

// Задача: Счетчик с начальным значением
//  то  же потерялся на задаче. Получается, что мы используем счетчик во внутренней функции? А возвращаем мы внешнюю функци? в чем тут отличие от простого замыкания? 
function createCounterWithInitial (){
    
}
