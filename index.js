let name = 'saurabh';
console.log(name);

//cannot be reserved keyword
// should be meaningful
// cannot start with number
//cannot contain a space or hypen (-);
//are case-sensitive

let FirstName = 'saurabh';
let LastName = 'Mungle' 
// these are different form each other

console.log(FirstName, LastName);


//constants in javascript

let insterestRate = 0.3;
//interestRate = 1; //cannot reassign a constant
console.log(insterestRate);

/* javascript  Primitive types*/

//string, number, boolean, null, undefined, symbol

let name1 = 'mosh';
let age = 23;
let isApproved = true; //boolean literal
let firstName = undefined;
let lastName = null;
let selectedColor = null;


// dynamic language (javascript)  

//reference type : objects , arrays, functions in java script

let person = {
    name: 'saurabh',
    age: 23
};

//to change name
//dot notation
person.name = 'josh';
//bracket notation
person['name'] = 'josh';
console.log(person)


//arrays:  data structure used to represent a list of items 
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
selectedColors[3] = 'green';
selectedColors.push('black');
selectedColors.push('33');
console.log(selectedColors)
console.log(selectedColors.length); //6 returns number of items in the given array


// functions in javascript
//set of statements that performs a task or calculates a value

function greet(name, lastName){
    console.log('hello '+ name + ' ' + lastName);
}

greet('saurabh', 'smith');
greet('mary' , 'jackson');

function square(number) {
    return number * number;

}

console.log(square(95))

