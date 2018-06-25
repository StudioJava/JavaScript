// JavaScript Document
//Creating an object that stores items in an array
var todoList = {
	todos: ["item 1","item 2","item 3"],
	//It should have a way to display our todos list in a Method
	displayTodos: function(){
	console.log("My List:",this.todos);
	},
	//It should have an add method for our todo list
	addTodos: function(item){
	this.todos.push(item);
	}
};

