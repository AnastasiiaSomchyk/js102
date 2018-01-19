console.log("hello main.js");

let skyIsBlue = true;
if (!skyIsBlue){

    console.log("yeah the sky is blue");
}else{
    console.log("hmmm, what color is the sky?");
}

let jedi = ["Skywalker", "Yoda", "Obi-wan", "Qui-Gon", "Windu"];
let  jediText = "";

jedi.push("Ana");
jedi.unshift("My Sejf");
//jedi.shift();
//jedi.pop();

console.log("howmany jegdi", jedi.length);

for (let potato = 0; potato < jedi.length; potato++) {
    console.log("what x", potato);
    console.log(jedi[potato]);

// jediText = "<li>" what is this: " + jedi[potato] + "</li>";

jediText += `<li>What is this:? ${jedi[potato]}</li>`;
console.log("jediText", jediText);
}

document.getElementById("demo").innerHTML = jediText;


let colors = ["red", "yello", "blue", "green", "orange", "purple"];
let reverseColors = colors.reverse();


console.log("reverse colors", reverseColors);
let sortedArrat = colors.sort();
console.log("sorted colors", sortedArray);

let numbers = [2, 4, 100, 33, 54, 1, 6];
//console.log("numbers sorted", number.sort());
console.log("numbers:", numbers);
let sortedNumbers = number.sort(function(first, second){
    // console.log("first:", first, "second:", second);
     //console.log("first mines second", first - second);
     //console.log("change", numbers);
     return second - first;
});

let joinedColors = colord.join();
console.log(joinedColors);

let fruits = ("Peaches", "Orandges", "Lemons", "Banana", "Mango");
let citrus = fruits.slice(1,3);
//console.log("citrus", citrus);
console.log("fruits", fruits);

let evenOdds = ["middle"];

for (let i = 100; i >= 0; i--){
console.log("i modulus", i, i % 3);
if (i % 2 === 0){

    evenOdds.unshift(i);

}else{
    evenOdds.push(i);
}

}

console.log("evenOdds", evenOdds);











































