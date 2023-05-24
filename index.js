console.log('Hello World');
let color = null;
console.log(color);
let future = undefined;

// Creatig object variable

let person = {
    name: 'Balaji',
    age: 32
};
console.log(person.age);


// Create array variable and work with it

let myFavColor = ['red', 'blue']
myFavColor[2] = 1;
console.log(myFavColor);
console.log(myFavColor[2]);
console.log(myFavColor.length);


// Create function and work with it
function greet()
{
    console.log("Heyyy")
};
greet();

function myname(firstname,lastname)
{
    console.log("Hellooo "+ firstname + ' ' +lastname);

};
myname("Chidambara","Sundaraam");

// Using return inside the function
function square(number)
{
 return number * number
}
let num = square(60);
console.log(num)
