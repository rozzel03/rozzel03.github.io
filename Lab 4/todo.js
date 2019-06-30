//JSON object
var dataJSON = '[{ "id": "1", "title": "Lab 4", "date": "12/17/2017", "desc": "Complete and Submit Lab 4", "status": "in progress", "email": "rozzel03@email.franklin.edu"}, {"id": "2","title": "Final","date": "12/13/2017","desc": "Study for and take Final","status": "waiting", "email": "rozzel03@email.franklin.edu"}, {"id": "3","title": "Reflection Paper","date": "12/13/2017","desc": "Submit Refelection Paper","status": "done","email": "rozzel03@email.franklin.edu"}]';

//Parse JSON object to toDos object
var toDos = JSON.parse(dataJSON);

var app = angular.module('todo', []);

/**
* AngularJS Controller for todo list
* @module app
* @controller TodoController
* @methods addTodo, getTodo, updateTodo, cancelTodo, deleteTodo
*/
app.controller("TodoController", function($scope){

	//Local Scope variables
	$scope.todoList = toDos;
	$scope.createBtn = true;
	$scope.updateBtn = false;
	$scope.required = false;
	$scope.todoid = "";

	$scope.addTodo = function() {
		var id = $('table tbody tr').each(function() {
    		$(this).attr('id', $(this).index() + 1);
    	});

		toDos.push({
			id: id.length,
            title: $scope.user.desc,
            date: $scope.today = new Date(),
            desc: $scope.user.desc,
            email: $scope.user.email,
            status: $scope.user.status
		});

		console.log(toDos);

		dataJSON = JSON.stringify(toDos);

		$scope.user.title = "";
		$scope.user.desc = "";
		$scope.user.status = "";
		$scope.user.email = "";

		$scope.userForm.$setUntouched();
	}

	$scope.getTodo = function(id) {
		var title= "";
		var email = "";
		var desc = "";
		var status = "";

		angular.forEach(toDos, function(todo,index) {
			if(id === todo.id) {
				id = todo.id;
				title = todo.title;
				email = todo.email;
				desc = todo.desc;
				status = todo.status;
			}
		});

		$('#title').val(title);
		$('#desc').val(desc);
		$('#email').val(email);
		$('#status').val(status);

		$scope.createBtn = false;
		$scope.updateBtn = true;
		$scope.todoid = id;
	}

	$scope.updateTodo = function(id) {
		angular.forEach(toDos, function(todo,index) {
			if(id === todo.id) {
				todo.title = $('#title').val();
				todo.desc = $('#desc').val();
				todo.status = $('#status').val();
				todo.email = $('#email').val();
			}
		});

		$('#title').val("");
		$('#desc').val("");
		$('#email').val("");
		$('#status').val("");

		$scope.updateBtn = false;
		$scope.createBtn = true;

		$scope.userForm.$setUntouched();

	}

	$scope.cancelUpdate = function() {
		$('#title').val("");
		$('#desc').val("");
		$('#email').val("");
		$('#status').val("");

		$scope.updateBtn = false;
		$scope.createBtn = true;
	}

	$scope.deleteTodo = function(index) {
		toDos.splice(index, 1);
	}

});


/**
* AngularJS Controller handles display the footer and copyright/date info
* @module app
* @controller footer
*/
app.controller('footer', function($scope) {
	$scope.today = new Date();
});
