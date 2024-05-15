// let marks = [97, 89, 87, 67, 37];
// console.log(marks);
// console.log(marks.length); //property



// let heroes = ["ironman","hulk","spideman","batman","deadpool","vishal"];
// console.log(heroes);
// console.log(typeof heroes);
// console.log(heroes.length);

// for( let idx =0 ;idx<heroes.length;idx++){
//     console.log(heroes[idx]) 
// }



// // printing array value using FOR OF LOOP
// let cities = ["indore","pithmapur","dewas","ujjain","depalpur","khandwa"]

// for(let city of cities){
//     console.log(city.toUpperCase());
// }



// //Practice 1

// // for a given array with marks of students -> [85,97,44,37,76,60] find the average marks of the entire class

// let marks = [85,97,44,37,76,60];

// let sum =0;
// for(let val of marks){      //for of loop
//     console.log(val);
//     sum+=val;

// } 
// console.log(`sum of marks of the class = ${sum}`);
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);






//Practice 2

// for a given array with prices of 5 items -> [250,645,300,900,50].All items have an offer of 10% OFF on them.Change the array to store final sprice after applying offer.


// let items = [250 ,645,300,900,50];

// // let i =0;
// // for(let val of items){
// //     //console.log(`value at index ${i}= ${val}`);
// //     let offer  = val/10;
// //     items[i]=items[i]-offer;
// //     console.log(`value after offer = ${items[i]}`);
// //     i++;
// // }

// for(let i=0;i<items.length;i++){
//     console.log(`value at index ${i} = ${items[i]}`);
//     let offer=items[i]/10
//    // console.log(offer)
//     items[i]-=offer //items[i]=items[i]-offer;
//     console.log(` value after offer = ${items[i]}`);
     
// }





// // ARRAY METHODS

// let veggies = ["potato","apple","mango","banana"]
// veggies.push("chips","hello","kewal");
// console.log(veggies)
// veggies.pop();
// console.log(veggies) 
// console.log(veggies.toString()) // convert array into string

// let marvelHeroes = ["thor","spiderman","hulk"]
// let dcHeroes = ["superman","batman"]
// let indianHeroes = ["shaktiman","juniorji"]
// let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroes);
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes)
// dcHeroes.shift()
// console.log(dcHeroes)



// //slice
// marvelHeroes.unshift("antman","hulk","strange","shangchi");
// console.log(marvelHeroes)
// console.log(marvelHeroes.slice(1,3))

// //splice
// let arr = [1,2,3,4,5,6,7]
// //arr.splice(2,2,101,102);

// //Add Element
// arr.splice(2,0,101);
// console.log(arr)

// //Delete element
// arr.splice(3,1);
// console.log(arr)

// //Replace element
// arr.splice(3,1,101);
// console.log(arr)









