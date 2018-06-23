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
}
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









