

//console.log("hello");


//var num1 = 10;
//num1++;
//console.log(num1);
//num1--;
//console.log(num1);

//function fun(){
   // console.log('This is a function.')

//}
//fun();


//function greeting(){
   // var name = prompt('What is your name');
   // var result ='Hello my dear ' + name;
    //console.log(result);
//}
//greeting();

//function sumNumbers(num1, num2){
    //var result = num1 + num2;
   // console.log(result);
//}
//sumNumbers(20, 30);
/* while loop
var num = 0;
while (num<100){
num += 1;
console.log(num);
}
*/
//for loop
//for (let num = 0; num < 100; num++){
    //console.log(num);
//}
//Data types
var yourAge = 18; //number
let first = 'Susan';
let last = ' The Lobster'; //string
let yourName = first + ' ' + last;//object
let truth = false;//bolean
let groceries = ['apple', 'banana', 'oranges'];//array
let random;//undefined
let nothing = null;//value null
console.log(yourName);

//strings in JS
let fruit = 'banana,apple,melon,blueberry';
let moreFruits = 'banana/apple'; //new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', 'Tob'));
console.log(fruit.toUpperCase ());
console.log(fruit.toLowerCase ());
console.log(fruit.charAt(4));
console.log(fruit[3]);
console.log(fruit.split(',')); //split by a comma
console.log(fruit.split('')); //split by charactar

//Array
let fruits = ['banana', 'apple', 'orange', 'pinapples',];
fruits = new Array('banana', 'apple', 'orange', 'pinapples' , 'wonderfruits');
//console.log ( fruits[2])
//fruits[0] ='pear';
//console.log(fruits);
//fruits[2] ='bananahammock';
//console.log(fruits);
//console.log(fruits[4]);

for (let i = 0; i < fruits.length; i++) {
   console.log(fruits [i] );
}
console.log('to string' ,fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberries'), fruits);
fruits.shift(); 
 
let vegetables = ['tomatoes', 'qucumber', 'carrots'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.reverse());
console.log(allGroceries.slice(1,4));
console.log(allGroceries.sort());

let someNumber= [1, 4, 67, 45,34,23,89,99, 144,544];
console.log(someNumber.sort(function(a,b){return a-b}));
console.log(someNumber.sort(function(a,b){return b-a}));

let emptyArray = new Array();
for (let num = 0; num < 10; num++){
   emptyArray.push(num);
}
console.log(emptyArray);
   
   let student = {
   first:'Dick', 
   last: 'Strom',
   age:52,
   height:177,
   studentInfo: function(){
      return this.first + '\n' + this.last + '\n' + this.age
   }

};
console.log(student.first);
console.log(student.last);
student.first = 'Big Dick';
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

//Conditionals, control flows(if else)
//var age = prompt('What is yor  age?')
//if( (age >= 18) && (age <= 35)){
  // var status = prompt('Target audience')
//}else{
  // var status = prompt('Not my audience')
//}

//switch statements
//difference between weekend or weekday
//day 0 sunday--weekend
//day 1 monday
//day 2 tuesday
//day 3 wednesday
//day 4 thursday
//day 5 friday
//day 6 saturday--weekend

switch(6) {
   case 0:
      text = 'weekend';
      break;
   case 5:
      text = 'weekend';
      break;
   case 6:
      text = 'weekend';
      break;
      default:
      text = 'weekday';   
}
console.log(text);






