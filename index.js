
let WelcomeEl=document.getElementById("welcome-el");
let greeting = "Welcome "

WelcomeEl.innerText = greeting;

 let count = 0;
 let countEL = document.getElementById("count-el");

 let saveEl = document.getElementById("save-el");

 function increment(){
     count += 1
     countEL.innerText = count;
 }

 function decrement(){
    count -= 1
    countEL.innerText = count;
}

 function save(){
    let countStr = " " + count + " - "
    saveEl.innerText += countStr
     console.log(count)
     count = 0
     countEL.innerText = count
 }

