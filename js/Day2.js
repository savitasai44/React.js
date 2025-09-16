console.log("==========Day 2============");

console.log("CONDITIONAL STATEMENT ")

/*
let a=5;
let b=9;
if(a==b){
    console.log("equal")
}else{
    console.log("Not equal")
}*/

console.log("Strict comparison (===)→checks both value and type.(==) check for only contents")

if(5==5){
    console.log("equal ")
}else{
    console.log("Not equal ")
}


console.log("SWITCH STATEMENT ") //switch statement is used when you want to compare a variable or expression against
//  multiple possible values and run code based on which one matches.

let day =4;
switch(day){
    case 1: console.log("sunday"); break;               //break → Stops execution after a case is matched. Without it, execution "falls through" to the next case.
    case 2:console.log("monday");break ;
    case 3:console.log("tuesday"); break;
    case 4:console.log("wednesday");break;
    case 5:console.log("thruday"); break;
    case 6:console.log("friday"); break;
    dafault :console.log("please enter the valid number ......")    //default → Runs when no case matches (like else).
}



