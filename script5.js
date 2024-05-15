// // EX 1
// function myFunction(){
//     console.log("Welcome to Apna College!");
//     console.log("We are learning Js:)");
// }
// myFunction();
// myFunction();



// //EX 2
// function myFunction(msg){
//     console.log(msg)
// }
// myFunction("I love JS"); 



// // EX 3
// function sum(x,y){
//     console.log(x+y)
// }
// sum(5,6)


// //Ex 4
// function sum(x,y){
//     s = x+y;
//     return s;
// }
// console.log(sum(3,4))




// //ARROW FUNCTION

//// EX1.normal funciton 
// function sum(a,b){
//     return a+b
// }
// console.log(sum(4,5))

//// arrow function
// const arrowSum = (a,b)=>{
//     console.log(a+b);
// };




// //Ex.2
// function mul(a,b){    //normal function
//     return a*b
// }
// console.log(mul(3,6))


// const arrowMul = (a,b)=>{  //arrow function
//     console.log(a*b);
// }
// arrowMul(3,4)




////example 3 Arrow function
// const printHello = () =>{
//     console.log("hello");
// }
// printHello()




// //PRACTICE 1
// Create a function using the function keyword that takes a string as an argument & returns the number of vowels in the string

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }




////Practice 2
//do same task with arrow function 

// const countVow = (str)=>{
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }







////FOR EACH LOOP IN ARRAY
// let arr = [1,2,3,4,5,"tera","mera"];

// arr.forEach(function printVal(val) {  //normal function
//     console.log(val);
//  });

// arr.forEach((val)=>{   //arrow function with same task
//     console.log(val);
// });

// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr);
// });



//PRACTICE 1
//For a given array of numbers , print the square of each value using the forEachloop

//  let nums = [2,3,4,5];

// nums.forEach((num)=>{
//     console.log(num*num);
// });

// //another way
// let calcSquare = (num)=>{
//     console.log(num*num);
// };

// nums.forEach(calcSquare);




//SOME MORE METHOD OF ARRAYS
//1.MAP

// let nums = [67,52,39];
// nums.map((val)=>{
//     console.log(val);
// });

////another way 

// let newArr = nums.map((val) =>{
//     return val*val;
// })
// console.log(newArr);



// //2.FILTER
// let arr = [1,2,3,4,5,6,7];
// let evenArr = arr.filter((val)=>{
//     return val%2 !==0;
// });
// console.log(evenArr);



////3.REDUCE 

////sum of array by reduce
// let arr = [1,2,3,4,5];
// const output = arr.reduce((res,curr) => {
//     return res + curr;
// })
// console.log(output);

//// print largest number of array  by reduce
// let arr = [1,2,3,4,5];
// const output = arr.reduce((prev,curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);


////PRACTICE 1 
// we are given array of marks of students . filter out  of the marks of students that scored  90 + 
// let marks = [97,89,98,94,64,34,62,56,78];

// let newArray  = marks.filter((val)=>{
//     return val>90;
// })
// console.log(newArray);


////PRACTICE 2 

let n = prompt ("enter a number: ");
let arr = [];
for(let i = 1; i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res , curr) =>{
    return res + curr;
})
console.log(sum);

let factorial  = arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("factorial = ",factorial);