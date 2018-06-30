// JavaScript Document
/* Creating an object practice
Hotel

*/
var hotel = {
	booking: ["January 1", "january 2"],
	displayBooking: function () {
		console.log("Your Booking:", this.booking);
	},
	addBooking: function (day) {
		this.booking.push(day);
		this.displayBooking();
	},
	changeBooking: function(position,newBooking){
		this.booking[position] = newBooking;
		this.displayBooking();
	},
	deleteBooking: function(position){
		this.booking.splice(position,1);
		this.displayBooking();
	}

};
var autoParts = {
	parts:[],
	displayAutoParts: function(){
		console.log("Your auto parts list:",this.parts);
	},
	addAutoParts: function(item){
		this.parts.push(item);
		this.displayAutoParts();
	},
	deleteAutoParts: function(position){
		this.parts.splice(position,1);
		this.displayAutoParts();
	},
	updateAutoparts: function(position,item){
		this.parts[position] = item;
		this.displayAutoParts();
	}
};