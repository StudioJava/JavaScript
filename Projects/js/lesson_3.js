// JavaScript Document
/*JUNE 25 2018*/
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
	this.displayTodos();
	},
	//It should have a change method for out todo list
	changeTodos: function(position,item){
	this.todos[position] = item;
	this.displayTodos();
	},
	//it should have a delete method for our todo list
	deleteTodos: function(position){
		this.todos.splice(position,1);
		this.displayTodos();
	}
};


