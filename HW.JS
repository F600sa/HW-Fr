let length = 10;
let width = 5;
let area= length*width;
console.log("area of a rectangle :", area,"cm");




var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');




 const array1=[16,4,2,0,19,6];
let sum1=0;
for(i=0;i < array1.length;i++){
    sum1 +=array1[i];
}
console.log("sum of arrary= ", sum1);





const arr=[1,2,3,4,5,6,7,8,9,10];
revers=arr.reverse();
console.log(revers);




let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);