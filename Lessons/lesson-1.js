// JavaScript Document
//creating an array with 3 items
var todos = ["item 1","item 2","item 3"];
//A way to display the array
console.log("My todos:",todos);
//PRINT**this will print My todos: ["item 1","item 2","item 3"]
//ADDING** to our list use .push to the end of the array
todos.push("item 4","item 5");
//CHANGE** to change a todo item

todos[4] = "item 1 updated";

//DELET** A WAY TO DELETE the (position,how many)

todos.splice(0,1);

//FUNCTIONS what's inside the parenthesis are your arguments
function makeTurkeySandwich(){
	
}
// function sayHiTo (personName is your parameter-variable)
function sayHiTo (personName) {
	console.log("hi",personName );//your paramenter variable is repeated here.
}//commet
sayHiTo();
makeTurkeySandwich();
//CREATE A FUNCION TO DISPLAY, TO ADD, TO CHANGE, TO DELETE
function displayTodos(){
	console.log("My Todos:",todos);
	
}
function addTodos(itemToAdd) {
	todos.push(itemToAdd);
	displayTodos();
}
function changeTodos(position,newValue) {
	todos[position] = newValue;
}
function deleteTodos(positionNum,positionEnd){
	todos.splice(positionNum,positionEnd);//todos.splice(positionNum,1); to only remove that specific one
	()
}
//June 23 2018
// Relations between variables and function
var myNmae = "Gordon"; //This variables is global
function sayName(a){ //a is your parameter also called access point.
	var secret = "whatchcode"; //This variable is local
	console.log(myNmae);
}



//What is an object?
/*
You use objects to group related data and function together.
example:
Computer:
operating system, screen size, purchaseYear, memory etc
var myComputer {
Properties separated by comas,
opearatingSystem: "mac",
screenSize: "15 inches",
purchaseYear: 2011
}
*/
var myComputer = {
		operatingSystem: "mac",
		screenSize: "15 inches",
		purchaseYear: 2011
		
}
//To obtain each individual item myComputer.operatingSystem

myComputer.operatingSystem

// OBJECTS AND FUNCTIONS
var person = {
	name: "Gordon",
	sayName: function(){// syName is a method on the person object
		console.log(this.name);
	}
}
//sayName: function() this is a unanimous fuction , when you have a function on an object no need to give a name, this will refer to the property in the ojcts

//METHOD IS A PROPERTY THAT IS EQUAL TO A FUNCTION




