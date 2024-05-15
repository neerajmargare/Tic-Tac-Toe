//// Loop in js
//// For loop 
// for(let i = 1; i<=5;i++){
//     console.log("Neeraj Margare");
// }
// console.log("loop has ended");

// //calculate sum of n numbers
// let sum = 0 ;
// let n = 5;
// for(let i = 1 ; i<=n;i++){
//      sum = sum + i;  
// }
// console.log("sum is: ",sum);




// //while loop
// let i = 1;
// while(i<=5){
//     console.log("Neeraj Margare");
//     i++;
// }



// //do-while loop
// let i = 1;
// do{
//     console.log("i= ",i);
//     i++;
// }while(i<=5);




// //for-of loop
// let str = "Javascript";
// let size = 0;
// for(let i of str){
//     console.log("i= ",i);
//     size = size + 1;
// }
// console.log("size of string is: ",size);




// //for in loop
// let student = {
//     name: "Neeraj Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for(let key in student){      // it return key 
//     console.log("key= ",key,"value= ",student[key]);
// }




// //PRACTICE Q1 :- 
// //print all even numbers
// for(let num=0; num<=100; num+=2){
//     console.log("num= ",num)
// }



// //PRACTICE Q2 :- 

// let gameNum = 25;
// let userNum = prompt("Guess the game number: ");

// while(userNum!=gameNum){
//     userNum = prompt("You Entered wrong number.Guess again: ");
// }
// console.log("Congratulations,you entered the right number");


// // STRINGS
// let str = "ApnaCollege";
// console.log(str[2]); 
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());



// // Template Literals

// let specialString = `This is a template literal ${1+2+3}`;
// console.log(typeof specialString); 
// console.log(specialString);

// let obj = {
//     item: "pen",
//     price: 10,
// };

// console.log(`the cost of ${obj.item} is ${obj.price} rupees`); //template literals
// console.log("the cost of",obj.item,"is",obj.price,"rupees");// normal string



// // Practice 1

// let fullName = prompt("Enter your fullname without spaces");

// let username = "@" + fullName + fullName.length;
// console.log(username);