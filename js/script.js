// JavaScript Document
// JavaScript Document
/* It should store the todos array on an object 
it should hava a displayTodos method
it should have an addTodos method
it should have a changeTodo method
it should have a deleteTodo method
group a set of related data in an object
*/
//OBJECTS HAVE PROPERTIES, name of property:
var myComputer = {
	operatingSystem: "mac",
	screenSize: "15 inches",
	purchaseYear: 2011
	
};
//var todosList = {
//	todos: ["item 1","item 2","item 3"] //When you setting the value of property you do not end the value with a semicolumn
//	
//};
//This will store the list in an array
var todoList = {
	todos: ["item 1","item 2","item 3"],
	displayTodos: function() {
	console.log("My Todos:",this.todos);
	}

};
//Relationship between objects and functions
//method is a property equal to a function
var edgar = {
	name:"Edgar", //this is property
	sayName: function(){//no need to name the function you'll call it my the name of property
		console.log("Hello"this.sayName);
	}
};

