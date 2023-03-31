//Creating elements using DOM

//h1

let h1 = document.createElement("h1");
h1.setAttribute("class", "title");
h1.setAttribute("id", "title");
let h1text = document.createTextNode("Calculator");
h1.appendChild(h1text);
document.body.appendChild(h1);

//main

let main = document.createElement("div");
main.setAttribute("class", "main");
document.body.appendChild(main);

//container

let container = document.createElement("div");
container.setAttribute("class", "container item-center flex flex-col mx-auto");
main.appendChild(container);

//display result or row1

let row1 = document.createElement("div");
row1.setAttribute("class", "row1");
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "0");
input.setAttribute("class", "result");
input.setAttribute("id", "result");
row1.appendChild(input);
container.appendChild(row1);

//row2

let row2 = document.createElement("div");
row2.setAttribute("class", "row2");
let c = document.createElement("button");
c.setAttribute("class", "button clear");
c.setAttribute("id", "clear");
let cText = document.createTextNode("C");
c.appendChild(cText);
row2.appendChild(c);
container.appendChild(row2);

let back = document.createElement("button");
back.setAttribute("class", "button back");
back.setAttribute("id", "back");
let backText = document.createTextNode("←");
back.appendChild(backText);
row2.appendChild(back);

let decimal = document.createElement("button");
decimal.setAttribute("class", "button decimal");
decimal.setAttribute("id", "decimal");
decimal.setAttribute("value", ".");
let decimalText = document.createTextNode(".");
decimal.appendChild(decimalText);
row2.appendChild(decimal);

let multiply = document.createElement("button");
multiply.setAttribute("class", "button multiply");
multiply.setAttribute("id", "multiply");
multiply.setAttribute("value", "*");
let multiplyText = document.createTextNode("*");
multiply.appendChild(multiplyText);
row2.appendChild(multiply);

//row 3

let row3 = document.createElement("div");
row3.setAttribute("class", "row3");
let seven = document.createElement("button");
seven.setAttribute("class", "button");
seven.setAttribute("id", "7");
seven.setAttribute("value", "7");
let sevenText = document.createTextNode("7");
seven.appendChild(sevenText);
row3.appendChild(seven);
container.appendChild(row3);

let eight = document.createElement("button");
eight.setAttribute("class", "button");
eight.setAttribute("id", "8");
eight.setAttribute("value", "8");
let eightText = document.createTextNode("8");
eight.appendChild(eightText);
row3.appendChild(eight);

let nine = document.createElement("button");
nine.setAttribute("class", "button");
nine.setAttribute("id", "9");
nine.setAttribute("value", "9");
let nineText = document.createTextNode("9");
nine.appendChild(nineText);
row3.appendChild(nine);

let divide = document.createElement("button");
divide.setAttribute("class", "button divide");
divide.setAttribute("id", "divide");
divide.setAttribute("value", "/");
let divideText = document.createTextNode("/");
divide.appendChild(divideText);
row3.appendChild(divide);

//row 4

let row4 = document.createElement("div");
row4.setAttribute("class", "row4");
let four = document.createElement("button");
four.setAttribute("class", "button");
four.setAttribute("id", "4");
four.setAttribute("value", "4");
let fourText = document.createTextNode("4");
four.appendChild(fourText);
row4.appendChild(four);
container.appendChild(row4);

let five = document.createElement("button");
five.setAttribute("class", "button");
five.setAttribute("id", "5");
five.setAttribute("value", "5");
let fiveText = document.createTextNode("5");
five.appendChild(fiveText);
row4.appendChild(five);

let six = document.createElement("button");
six.setAttribute("class", "button");
six.setAttribute("id", "6");
six.setAttribute("value", "6");
let sixText = document.createTextNode("6");
six.appendChild(sixText);
row4.appendChild(six);

let subtract = document.createElement("button");
subtract.setAttribute("class", "button subtract");
subtract.setAttribute("id", "subtract");
subtract.setAttribute("value", "-");
let subtractText = document.createTextNode("-");
subtract.appendChild(subtractText);
row4.appendChild(subtract);

//row 5

let row5 = document.createElement("div");
row5.setAttribute("class", "row5");
let one = document.createElement("button");
one.setAttribute("class", "button");
one.setAttribute("id", "1");
one.setAttribute("value", "1");
let oneText = document.createTextNode("1");
one.appendChild(oneText);
row5.appendChild(one);
container.appendChild(row5);

let two = document.createElement("button");
two.setAttribute("class", "button");
two.setAttribute("id", "2");
two.setAttribute("value", "2");
let twoText = document.createTextNode("2");
two.appendChild(twoText);
row5.appendChild(two);

let three = document.createElement("button");
three.setAttribute("class", "button");
three.setAttribute("id", "3");
three.setAttribute("value", "3");
let threeText = document.createTextNode("3");
three.appendChild(threeText);
row5.appendChild(three);

let add = document.createElement("button");
add.setAttribute("class", "button add");
add.setAttribute("id", "add");
add.setAttribute("value", "+");
let addText = document.createTextNode("+");
add.appendChild(addText);
row5.appendChild(add);

//row 6

let row6 = document.createElement("div");
row6.setAttribute("class", "row6");
let zero = document.createElement("button");
zero.setAttribute("class", "button");
zero.setAttribute("id", "0");
zero.setAttribute("value", "0");
let zeroText = document.createTextNode("0");
zero.appendChild(zeroText);
row6.appendChild(zero);
container.appendChild(row6);

let zeroes = document.createElement("button");
zeroes.setAttribute("class", "button zeroes");
zeroes.setAttribute("id", "00");
zeroes.setAttribute("value", "00");
let zeroesText = document.createTextNode("00");
zeroes.appendChild(zeroesText);
row6.appendChild(zeroes);

let equal = document.createElement("button");
equal.setAttribute("class", "button equal");
equal.setAttribute("id", "equal");
equal.setAttribute("value", "=");
let equalText = document.createTextNode("=");
equal.appendChild(equalText);
row6.appendChild(equal);

//p tag

let p = document.createElement("p");
p.setAttribute("class", "description");
p.setAttribute("id", "description");
let pText = document.createTextNode("This is a basic calculator");
p.appendChild(pText);
document.body.appendChild(p)


//JS...

let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {

    button.addEventListener("click", (e) => {
        if (isNaN(e.target.innerHTML) && e.target.innerHTML !== "." && e.target.innerHTML !== "+" && e.target.innerHTML !== "-" && e.target.innerHTML !== "*" && e.target.innerHTML !== "/" && e.target.innerHTML !== "=" && e.target.innerHTML !== "C" && e.target.innerHTML !== "←") {
            alert("Only numbers are allowed");
        } else if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "C") {
            string = "";
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "←") {
            string = string.slice(0, string.length - 1);
            document.querySelector("input").value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
});
