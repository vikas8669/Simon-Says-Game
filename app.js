let gameSeq = [];
let userSeq = [];

let btn = ['red', 'yellow', 'green', 'purple'];

let started = false;
let level = 0 ;


let h2 =document.querySelector('h2')
document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
   
});

function levelUp() {
    userSeq = [];                    // reset the userSeq 
    level++ ; 
    h2.innerHTML = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btn[randIdx];   //select the random color index 

    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
};


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250)
};


// check or match  userSeq 

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length ==  gameSeq.length) {
           setTimeout(levelUp, 1000);
        }
    }else {
        h2.innerHTML = `game over! Your score was <b> ${level} </b> Pres any key to start.`;
         document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200)
        reset();
    };
};



// track the click button by user

function pressBtn () {
    let btn = this;
    btnFlash(btn);

   userColor = btn.getAttribute("id");   // track color by user, user which color clicked 
//    console.log(userColor); 
   userSeq.push(userColor);  // add color by user in gameSeq array
   checkAns(userSeq.length-1);
};


let allBtns = document.querySelectorAll(".btn");
for (let button of allBtns) {
    button.addEventListener("click", pressBtn);
};


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};