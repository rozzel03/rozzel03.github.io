/**
 * @author Martina Rozzell
 *
 *
 */


var ToDoArray = [["Homework 8","Work on homework 8 for WEBD 335","10/21/2017", "In Progess", "mrozzell@franklin.edu"]
	["Lab 3","Work on Lab 3 for WEBD 335","10/22/2017", "Ready", "mrozzell@franklin.edu"]
	["Lab 2","Turn in Lab 2","10/22/2017", "Done", "mrozzell@franklin.edu"]];


function ToDo(id, title, date, desc, status, email) {
	this.id = id;
	this.title = title;
	this.date = date;
	this.desc = desc;
	this.status = status;
	this.email = email;
	this.todos = todos;
};

ToDo.prototype.addToDo = function () {
	var id = $('table tbody tr').each(function() {
	    		$(this).attr('id', $(this).index() + 1);
	    	});

	    	this.todos.push({
	    		id: id.length,
	    		title: this.title,
	    		date: this.date,
	    		desc: this.desc,
	    		status: this.status,
	    		email: this.email,
	    	});

	    	this.title = null;
	    	this.date = null;
	    	this.desc = null;
	    	this.email = null;
	    	this.status = null;
	    	  
};

ToDo.prototype.getToDo = function () {
	var title= "";
			var email = "";
			var desc = "";
			var status = "";

			this.todos.forEach(function(todo,index) {
				if(id === todo.id) {
					id = todo.id;
					title = todo.title;
					email = todo.email;
					desc = todo.desc;
					status = todo.status;
				}
			});

			this.title = title;
			this.desc = desc;
			this.status = status;
			this.email = email;
			this.todoid = id;
};

ToDo.prototype.updateToDo= function () {
				this.todos.forEach(function(todo,index) {
				if(id === todo.id) {
					todo.title = $('#title').val();
					todo.desc = $('#desc').val();
					todo.status = $('#status').val();
					todo.email = $('#email').val();
				}
			});

			this.title = null;
			this.desc = null;
			this.status = null;
			this.email = null;

		},
}

ToDo.prototype.deleteToDo = function () {
	this.todos.$remove(todo);
}



