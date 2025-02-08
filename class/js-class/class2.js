console.log("Class 2");

// assignment operators

var a = 10;
// a++ post increment
// ++a pre increment

console.log(2 > 1 && 20 > 10); // logical and relational operator

let math_marks = 80;
a = (math_marks > 39)? "Pass":"Fail"; // ternary operator
console.log(a);

// if else statements
math_marks = 40;
if (math_marks < 39){
    console.log("Fail");
}
else if (math_marks < 80){
    console.log("Average");
}
else{
    console.log("Pass");
}

let day = 6; // 1 = mon, 6 = sat, 7 = sun

if (day == 1){
    console.log("Another week of work");
}
else if (day == 6){
    console.log("Rest this saturday");
}
else if (day == 7){
    console.log("Tomorrow is monday");
}
else{
    console.log("Are you ok?")
}

// 
math_marks = 45;
if (math_marks<80){
    if (math_marks>60 && math_marks<80){
        console.log("A");
    }
    else if (math_marks<50){
        console.log("B");
    }
}

// response from user in webpage
// let name = prompt("Enter your name");
// console.log(name);

// switch case

var c = 4;
switch (c){
    case (1):
        console.log("one");
    case (4):
        console.log("four");
        break; // stop the iteration and go outside the iteration block
}

// continue: stop iteration and jump to next iteration
// return: returns value

var mystr = "hello world i am here in this world of good deeds and life where google meet is a video platform to meet virtually using audio and video over the internet lines";

console.log(mystr[9]);
console.log(mystr.slice(0,5));


// loops


for(x=0; x<=10; x++){
    console.log(x);
}
var x = 10;
while (x>=0){
    console.log("Hello");
    x--;
}
let i = 1;
do{
    var text = "the Value: " + i;
    console.log(text);
    i++;
}
while(i<10)

// array
let p = [1,2,5,10,"roti",["hmm",2,3.14]];
console.log(p);
console.log(p[1]);
console.log(p[4][2]);
console.log(p[5][0]);
console.log(p[5][0][1]);

// manipulating arrays with push

p.push("new ele"); // pushes to end
console.log(p);
p.pop(); // removes last element
console.log(p);
p.shift(); // removes first element
console.log(p);
p.unshift("new ele");  // pushes to start
console.log(p);