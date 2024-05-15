let btn1 = document.querySelector("#btn1");
// btn1.onclick = ()=>{
//     console.log("btn1 was clicked");
//     let a= 25;
//     a++;
//     console.log(a);
// }
// btn1.onclick = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }


let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
}


//eventhandlers

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked");
});

btn1.addEventListener("click",(e)=>{
    console.log("button1 was clicked -handler 2");
    console.log(e);
    console.log(e.type);
});

//remove eventListers

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler1");
});

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler2");
});

const handler3 = ()=> {
    console.log("button1 was clicked-handler3");
}

btn1.addEventListener("click",handler3);

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler4");
});


btn1.removeEventListener("click",handler3);

// create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click",()=>{
    if(currMode ==="light"){
        currMode ="dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});