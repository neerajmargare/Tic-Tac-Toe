// //Arithmetic Operators
// let a = 5;
// let b = 2;

// console.log("a+b=", a + b);
// console.log("a-b=", a - b);
// console.log("a*b=", a * b);
// console.log("a/b", a / b);
// // Modulus
// console.log("a%b=", a % b);

// // Exponentiation
// console.log("a**b", a ** b); // it means a^b

// //UNARY OPERATORS
// // Increment/Decrement
// console.log("a= ", a, "b= ", b);
// a++; b++;
// console.log("a= ", a, "b= ", b);
// a--; b--;
// console.log("a= ", a, "b= ", b);

// //Assingment Operator
// a = 5 //update value of a
// b = 2 //update value of b

// console.log("a+=b= ", a += b); // a = a+b  = 7
// console.log("a-=b= ", a -= b); // a = 7-2  = 5
// console.log("a*=b= ", a *= b); // a = 5*2  = 10
// console.log("a/=b= ", a /= b); // a = 10/2 = 5
// console.log("a%=b)= ", a %= b);// a = 5%2  = 1
// console.log("a**=b= ", a **= b); // a = 5**2=1



// //comparison operator
// a = 5 //update value of a
// b = 2 //update value of b 

// console.log("5 == 2", a == b); //false
// console.log("5 != 2", a != b); //true
// console.log("5 === 2", a === b); //false
// console.log("5 !== 2", a !== b); //true



// // Logical operators
// a = 5 //update value of a
// b = 2 //update value of b 

// let cond1 = a > b;
// let cond2 = a === 6;
// console.log("cond1 && cond2 = ", cond1 && cond2);
// console.log("cond1 && cond2 = ", cond1 || cond2);
// console.log("a>b = ",!(a<b));

// //conditional statements
// // if statement
// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light") {
//     color = "white";
// }
// console.log(color);


// // if-else statement
// if (mode === "dark-mode") {
//     color = "black";
// }
// else {
//     color = "white";
// }
// console.log(color);

// // else-if statements
// let age = 14 ;
// if(age<18){
//     console.log("junior");
// }else if (age>60){
//     console.log("senior");
// }else{
//     console.log("middle");
// }

// //ternary  operator 
// age = 25; //updated value 

// let result = age>=18 ? "adult" : "not adult";
// console.log(result);



// // practice question 1
// let num = prompt(" Enter a number: ");

// if(num%5===0){
//     console.log(num," is multiple of 5 ");
// }else{
//     console.log(num,"is not a multiple of 5");
// }



// // practice question 2
// let score = 90 ;
// let grade ;

// if(score>=90 && score<=100){
//     grade = "A";
// }else if(score>=70 && score<=89){
//     grade = "B";
// }else if(score>=60 && score<=69){
//     grade = "C";
// }else if (score>=50 && score<=59){
//     grade = "D";
// }if(score>=0 && score<=49){
//     grade = "F";
// }
// console.log("According to your score your grade is: ",grade);