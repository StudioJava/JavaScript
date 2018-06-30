// JavaScript Document
//BOOLEANS REP OF TRUE AND FALSE
//CHANGE FROM AN ARRAY OF TEXT TO ARRAY OF OBJECTS.
//todoList.addTodo should add objects
var todoList = {
	todos: [],
	//It should have a way to display our todos list in a Method
	displayTodos: function(){
	console.log("My List:",this.todos);
	},
	//It should have an add method for our todo list
	addTodos: function(todoText){
	this.todos.push({todoText: todoText,
					completed: false});
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
