const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");
const colors = ["blue", "red", "pink", "purple", "yellow", "gold", "green", "aqua", "greenyellow"];

let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let c7 = document.getElementById("c7");
let c8 = document.getElementById("c8");
let c9 = document.getElementById("c9");

let mySum;
let sound = new Audio();

function makeSum() {
 var a = Math.floor(Math.random() * 9 + 1);
 var b = Math.floor(Math.random() * 9 + 1);
 mySum = a + " * " + b;
 n1.innerHTML = a;
 n2.innerHTML = " * ";
 n3.innerHTML = b;
 myAnswer.focus();
 setColor();
 //mySum.style.color = colors[Math.floor(Math.random() * colors.length)];


}

function setColor() {

  c1.style.color = colors[Math.floor(Math.random() * colors.length)];
  c2.style.color = colors[Math.floor(Math.random() * colors.length)];
  c3.style.color = colors[Math.floor(Math.random() * colors.length)];
  c4.style.color = colors[Math.floor(Math.random() * colors.length)];
  c5.style.color = colors[Math.floor(Math.random() * colors.length)];
  c6.style.color = colors[Math.floor(Math.random() * colors.length)];
  c7.style.color = colors[Math.floor(Math.random() * colors.length)];
  c8.style.color = colors[Math.floor(Math.random() * colors.length)];
  c9.style.color = colors[Math.floor(Math.random() * colors.length)];
  n1.style.color = colors[Math.floor(Math.random() * colors.length)];
  n2.style.color = colors[Math.floor(Math.random() * colors.length)];
  n3.style.color = colors[Math.floor(Math.random() * colors.length)];
}


function animation(){
    let i = 0;
    setInterval(function(){
    if(i < 5){
        makeSum();
        i++;
    }else{
        clearInterval(this);
    }
  }, 150);
}


function keyPressed(evt) {
  if (evt.keyCode == 13) {
    if ( eval(mySum) == myAnswer.value ) {
      feedback.src = "cheers.jpg";
      myAnswer.style.backgroundColor = "green";
    } else {
      feedback.src = "palm.jpg";
      myAnswer.style.backgroundColor = "red";
    }
    window.setTimeout(waiting, 2000);
  }
}

function waiting() {
  feedback.src = "#";
  myAnswer.value = "";
  makeSum();
  animation();
  myAnswer.style.backgroundColor = "white";
}

makeSum();
animation();
myAnswer.addEventListener("keydown", keyPressed, false);
