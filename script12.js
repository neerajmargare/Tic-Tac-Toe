//SYNCHRONUS PROGRAMMING 
// console.log("One");
// console.log("Two");
// console.log("Three");

//Asynchronus Programming
// console.log("1");
// console.log("2");
// function hello() {
//     console.log("hello");
// }
// setTimeout(hello, 2000)  //2s = 2000ms 
// console.log("4");
// console.log("5");



//Callback
// // example 1
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,7,sum)

// // example 2
// const hello = () =>{
//     console.log("hello");
// };
// setTimeout(hello,1000);



// // Callback Hell
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     console.log("getting data2...")
//     getData(2,()=>{
//         console.log("getting data3...")
//         getData(3,()=>{
//             console.log("getting data4...")
//             getData(4,()=>{
//                 console.log("getting data5...")
//                 getData(5)
//             });
//         });
//     });
// });



//Promises
//example1

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a Promise");
//     reject("error")
// })


// // example 2 
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }
// let promise = getData(123)



//USE OF THEN AND CATCH IN PROMISES
//example 3 of promises

const getPromise = () => {
   return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        // resolve("success");
        reject("error");

    });
};
let promise = getPromise();

promise.then((res)=>{
    console.log("promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("rejected",err);
})