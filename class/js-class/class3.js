var a = new Array(1, true, "helo");
console.log(a)
// a.length = 1;
// console.log(a)
// a.length = 3;
// console.log(a)


var b = [11,22,33];
console.log(a.concat(b));

console.log(b.join("|"));

var a1 = [1,2,[21,22],23,[4,3,[312,21]],376];
console.log(a1);

a2 = a1.flat(Infinity);
console.log(a2);


function myfunc (p1, p2){
    return p1*p2;
}

console.log(myfunc(10,3));

const func2 = function (a,b) {return a+b};
console.log(func2(10,3));

// html DOM
// your actions = methods
// your values = properties

 

console.log(typeof NaN);

// function f (){
//     console.log(bar);
//     var bar = 10;
// }
// console.log(f())

document.getElementById("demo").innerHTML = "Hello world";
// document.getElementsByTagName("")
// document.getElementsByClassName("")

// changing the html elements
/*
1. element.innerHTML = new html content ------ changes html content
2. element.attribute = new value ------ change element attribute value of element
3. element.style.property = value ------ change styling
4. element.setAttribute(attribute, value) --------- change the attribute value of that attribute
*/

// adding or deleting of elements

// create ---- d.createElement(ele)
// remove ---- d.removeChild(ele)
// adding ---- d.appendChild(ele)
// replace ---- d.replaceChild(ele)
//                 d.write(text) ---- write into HTML output

// event handlers
// method
// d.getElementById(id).onclick = function()

// finding HTML objecsts
/*
returning the <a> elements: document.anchors
*/

const ele1 = document.getElementById("pid");
const ele2 = document.getElementsByTagName("p");
const ele3 = document.getElementsByClassName("pclass");

// discussing dynamic html