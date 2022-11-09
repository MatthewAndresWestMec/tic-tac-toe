"use strict"
// original values for button + score
let cturn = 0
let but1 = 0
let but2 = 0
let but3 = 0
let but4 = 0
let but5 = 0
let but6 = 0
let but7 = 0
let but8 = 0
let but9 = 0
let cwin= false;
//turn function
function turn(){
    if(cturn%2 == 1){
        document.getElementById("currentturn").innerHTML = " O";
        // cturn++;
    }else{
    //    cturn++;
        document.getElementById("currentturn").innerHTML = " X"; 
    }
    console.log(cturn);
    document.getElementById("cturn").innerHTML = cturn;
}
// all button function
function b1(){
  if(cturn%2 == 1  && document.getElementById("b1").innerHTML == ""){
        cturn++;
        document.getElementById("b1").innerHTML = " O";
        but1 = "O"
    }else if (cturn%2 == 0  && document.getElementById("b1").innerHTML == ""){
       cturn++;
        document.getElementById("b1").innerHTML = " X";
        but1 = "X"
    }  
}

function b2(){
   if(cturn%2 == 1  && document.getElementById("b2").innerHTML == ""){
        cturn++;
        document.getElementById("b2").innerHTML = " O";
        but2 = "O"
    }else if (cturn%2 == 0  && document.getElementById("b2").innerHTML == ""){
       cturn++;
        document.getElementById("b2").innerHTML = " X";
        but2 = "X"
    }   
}

function b3(){
    if(cturn%2 == 1  && document.getElementById("b3").innerHTML == ""){
        cturn++;
        document.getElementById("b3").innerHTML = " O";
        but3 = "O"
    }else if (cturn%2 == 0  && document.getElementById("b3").innerHTML == ""){
       cturn++;
        document.getElementById("b3").innerHTML = " X";
        but3 = "X"
    }  
}

function b4(){
    if(cturn%2 == 1  && document.getElementById("b4").innerHTML == ""){
        cturn++;
        document.getElementById("b4").innerHTML = " O";
        but4 = "O"
    }else if (cturn%2 == 0  && document.getElementById("b4").innerHTML == ""){
       cturn++;
        document.getElementById("b4").innerHTML = " X";
        but4 = "X"
    }  
}

function b5(){
    if(cturn%2 == 1  && document.getElementById("b5").innerHTML == ""){
        cturn++;
        document.getElementById("b5").innerHTML = " O";
        but5 = "O"
    }else if (cturn%2 == 0  && document.getElementById("b5").innerHTML == ""){
       cturn++;
        document.getElementById("b5").innerHTML = " X";
        but5 = "X"
    }  
}

function b6(){
    if(cturn%2 == 1  && document.getElementById("b6").innerHTML == ""){
        cturn++;
        document.getElementById("b6").innerHTML = " O";
        but6 = "O"
    }else if (cturn%2 == 0  && document.getElementById("b6").innerHTML == ""){
       cturn++;
        document.getElementById("b6").innerHTML = " X";
        but6 = "X"
    }  
}

function b7(){
    if(cturn%2 == 1  && document.getElementById("b7").innerHTML == ""){
        cturn++;
        document.getElementById("b7").innerHTML = " O";
        but7 = "O"
    }else if (cturn%2 == 0  && document.getElementById("b7").innerHTML == ""){
       cturn++;
        document.getElementById("b7").innerHTML = " X";
        but7 = "X"
    }  
}

function b8(){
    if(cturn%2 == 1  && document.getElementById("b8").innerHTML == ""){
        cturn++;
        document.getElementById("b8").innerHTML = " O";
        but8 = "O"
    }else if (cturn%2 == 0  && document.getElementById("b8").innerHTML == ""){
       cturn++;
        document.getElementById("b8").innerHTML = " X"; 
        but8 = "X"
    }  
}

function b9(){
    if(cturn%2 == 1  && document.getElementById("b9").innerHTML == ""){
        cturn++;
        document.getElementById("b9").innerHTML = " O";
        but9 = "O"

    }else if (cturn%2 == 0  && document.getElementById("b9").innerHTML == ""){
       cturn++;
        document.getElementById("b9").innerHTML = " X";
        but9 = "X"
    }  
}

function win(){
    //scores
let xscore = 0
let oscore = 0 
    //check win
    let cwin= false;
//check X wins
//check rows
if((but1 == "X" && but2 == "X" && but3 == "X")){
    console.log("X WINS")
    document.getElementById("whowon").innerHTML = "X WINS!";
    document.getElementById("b1").style.backgroundColor = "#5998c5";
    document.getElementById("b2").style.backgroundColor = "#5998c5";
    document.getElementById("b3").style.backgroundColor = "#5998c5";
    cwin = true;
    xscore++;
    document.getElementById("xscore").innerHTML = xscore;
} if(but4 == "X" && but5 == "X" && but6 == "X"){
    console.log("X WINS")
    document.getElementById("whowon").innerHTML = "X WINS!";
    document.getElementById("b4").style.backgroundColor = "#5998c5";
    document.getElementById("b5").style.backgroundColor = "#5998c5";
    document.getElementById("b6").style.backgroundColor = "#5998c5";
    xscore++;
    document.getElementById("xscore").innerHTML = xscore;
    cwin = true;
}if((but7 == "X" && but8 == "X" && but9 == "X")){
    console.log("X WINS")
    document.getElementById("whowon").innerHTML = "X WINS!";
    document.getElementById("b7").style.backgroundColor = "#5998c5";
    document.getElementById("b8").style.backgroundColor = "#5998c5";
    document.getElementById("b9").style.backgroundColor = "#5998c5";
    xscore++;
    document.getElementById("xscore").innerHTML = xscore;
}
//check cols
if((but1 == "X" && but4 == "X" && but7 == "X")){
    console.log("X WINS")
    document.getElementById("whowon").innerHTML = "X WINS!";
    document.getElementById("b1").style.backgroundColor = "#5998c5";
    document.getElementById("b4").style.backgroundColor = "#5998c5";
    document.getElementById("b7").style.backgroundColor = "#5998c5";
    xscore++;
    document.getElementById("xscore").innerHTML = xscore;
    cwin = true;
}if((but2 == "X" && but5 == "X" && but8 == "X")){
    console.log("X WINS")
    document.getElementById("whowon").innerHTML = "X WINS!";
    document.getElementById("b2").style.backgroundColor = "#5998c5";
    document.getElementById("b5").style.backgroundColor = "#5998c5";
    document.getElementById("b8").style.backgroundColor = "#5998c5";
    cwin = true;
    xscore++;
    document.getElementById("xscore").innerHTML = xscore;
}if((but3 == "X" && but6 == "X" && but9 == "X")){
    console.log("X WINS")
    document.getElementById("whowon").innerHTML = "X WINS!";
    document.getElementById("b3").style.backgroundColor = "#5998c5";
    document.getElementById("b6").style.backgroundColor = "#5998c5";
    document.getElementById("b9").style.backgroundColor = "#5998c5";
    cwin = true;
    xscore++;
    document.getElementById("xscore").innerHTML = xscore;
}


//check diagonals
if((but1 == "X" && but5 == "X" && but9 == "X")){
    console.log("X WINS")
    document.getElementById("whowon").innerHTML = "X WINS!";
    document.getElementById("b1").style.backgroundColor = "#5998c5";
    document.getElementById("b5").style.backgroundColor = "#5998c5";
    document.getElementById("b9").style.backgroundColor = "#5998c5";
    cwin = true;
    xscore++;
    document.getElementById("xscore").innerHTML = xscore;
}if((but3 == "X" && but5 == "X" && but7 == "X")){
    console.log("X WINS")
    document.getElementById("whowon").innerHTML = "X WINS!";
    document.getElementById("b3").style.backgroundColor = "#5998c5";
    document.getElementById("b5").style.backgroundColor = "#5998c5";
    document.getElementById("b7").style.backgroundColor = "#5998c5";
    cwin = true;
    xscore++;
    document.getElementById("xscore").innerHTML = xscore;
}

// O wins

 //check rows  
if((but1 == "O" && but2 == "O" && but3 == "O")){
    console.log("O WINS")
    document.getElementById("whowon").innerHTML = "O WINS!";
    document.getElementById("b1").style.backgroundColor = "#5998c5";
    document.getElementById("b2").style.backgroundColor = "#5998c5";
    document.getElementById("b3").style.backgroundColor = "#5998c5";
    cwin = true;
    oscore++;
    document.getElementById("oscore").innerHTML = oscore;
}if((but4 == "O" && but5 == "O" && but6 == "O")){
    console.log("O WINS")
    document.getElementById("whowon").innerHTML = "O WINS!";
    document.getElementById("b4").style.backgroundColor = "#5998c5";
    document.getElementById("b5").style.backgroundColor = "#5998c5";
    document.getElementById("b6").style.backgroundColor = "#5998c5";
    cwin = true;
    oscore++;
    document.getElementById("oscore").innerHTML = oscore;
}if((but7 == "O" && but8 == "O" && but9 == "O")){
    console.log("O WINS")
    document.getElementById("whowon").innerHTML = "O WINS!";
    document.getElementById("b7").style.backgroundColor = "#5998c5";
    document.getElementById("b8").style.backgroundColor = "#5998c5";
    document.getElementById("b9").style.backgroundColor = "#5998c5";
    cwin = true;
    oscore++;
    document.getElementById("oscore").innerHTML = oscore;
}


//check cols 
if((but1 == "O" && but4 == "O" && but7 == "O")){
    console.log("O WINS")
    document.getElementById("whowon").innerHTML = "O WINS!";
    document.getElementById("b1").style.backgroundColor = "#5998c5";
    document.getElementById("b4").style.backgroundColor = "#5998c5";
    document.getElementById("b7").style.backgroundColor = "#5998c5";
    cwin = true;
    oscore++;
    document.getElementById("oscore").innerHTML = oscore;
}if((but2 == "O" && but5 == "O" && but8 == "O")){
    console.log("O WINS")
    document.getElementById("whowon").innerHTML = "O WINS!";
    document.getElementById("b2").style.backgroundColor = "#5998c5";
    document.getElementById("b5").style.backgroundColor = "#5998c5";
    document.getElementById("b8").style.backgroundColor = "#5998c5";
    cwin = true;
    oscore++;
    document.getElementById("oscore").innerHTML = oscore;
}if((but3 == "O" && but6 == "O" && but9 == "O")){
    console.log("O WINS")
    document.getElementById("whowon").innerHTML = "O WINS!";
    document.getElementById("b3").style.backgroundColor = "#5998c5";
    document.getElementById("b6").style.backgroundColor = "#5998c5";
    document.getElementById("b9").style.backgroundColor = "#5998c5";
    oscore++;
    document.getElementById("oscore").innerHTML = oscore;
    cwin = true;
}    
    
//check diagonals

if((but1 == "O" && but5 == "O" && but9 == "O")){
    console.log("O WINS");
    document.getElementById("whowon").innerHTML = "O WINS!";
    document.getElementById("b1").style.backgroundColor = "#5998c5";
    document.getElementById("b5").style.backgroundColor = "#5998c5";
    document.getElementById("b9").style.backgroundColor = "#5998c5";
    cwin = true;
    oscore++;
    document.getElementById("oscore").innerHTML = oscore;
}if(but3 == "O" && but5 == "O" && but7 == "O"){
    console.log("O WINS");
    document.getElementById("whowon").innerHTML = "O WINS!";
    document.getElementById("b3").style.backgroundColor = "#5998c5";
    document.getElementById("b5").style.backgroundColor = "#5998c5";
    document.getElementById("b7").style.backgroundColor = "#5998c5";
    cwin = true;
    oscore++;
    document.getElementById("oscore").innerHTML = oscore;
}

//checks for draw using 9th turn + if there is no win
if (cturn == 9 && !cwin) {
    console.log("draw");
    document.getElementById("whowon").innerHTML = "haha draw";
}
}

//refresh button which resets values to original values
function refresh(){
     cturn = 0;
    but1 = 0;
     but2 = 0;
     but3 = 0;
     but4 = 0;
     but5 = 0;
     but6 = 0;
     but7 = 0;
     but8 = 0;
     but9 = 0;
   cwin= false;
    document.getElementById("whowon").innerHTML = "";
    document.getElementById("b1").style.backgroundColor = "#ffd5ff";
    document.getElementById("b2").style.backgroundColor = "#ffd5ff";
    document.getElementById("b3").style.backgroundColor = "#ffd5ff";
    document.getElementById("b4").style.backgroundColor = "#ffd5ff";
    document.getElementById("b5").style.backgroundColor = "#ffd5ff";
    document.getElementById("b6").style.backgroundColor = "#ffd5ff";
    document.getElementById("b7").style.backgroundColor = "#ffd5ff";
    document.getElementById("b8").style.backgroundColor = "#ffd5ff";
    document.getElementById("b9").style.backgroundColor = "#ffd5ff";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("b4").innerHTML = "";
    document.getElementById("b5").innerHTML = "";
    document.getElementById("b6").innerHTML = "";
    document.getElementById("b7").innerHTML = "";
    document.getElementById("b8").innerHTML = "";
    document.getElementById("b9").innerHTML = "";
}