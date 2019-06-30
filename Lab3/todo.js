$(document).ready(function() {
    //a.  Select and modify element style (onready, css) in the Todo List using jQuery.
      $(".table").css("font-family","\'Garamond\'");

    //c.  Employ at least one selector with filter example to style elements using jQuery.  Show the same example not using filter; just using selector if possible; if not possible explain why.
    // In the example below I use the filter to color the even li items, then I use just a selector setup to override the filter for the object not in the dropdown list. I then had to override the nth child to reset the filter for the dropdown and you can see where the divoided dropdown does not reset it.
      $( "li" ).filter( ":even" ).css( "background-color", "dimgray" );
      $( ".nav.navbar-nav.navbar-right li:nth-child(1)" ).css( "background-color", "black" );
      $( ".dropdown li:nth-child(1)" ).css( "background-color", "dimgray" );

    //JSON object
    var dataJSON = '[{ "id": "1", "title": "Lab 3", "date": "11/19/2017", "desc": "Complete and Submit Lab 3", "status": "done", "email": "rozzel03@email.franklin.edu"}, {"id": "2","title": "Homework 12","date": "11/26/2017","desc": "Look over and start working on Homework 12","status": "ready", "email": "rozzel03@email.franklin.edu"}, {"id": "3","title": "Class Chat - Thanksgiving","date": "11/22/2017","desc": "Reminder for Wednesday 8:00 class during the week of Thanksgiving","status": "waiting","email": "rozzel03@email.franklin.edu"}]';

    //Parse JSON object to toDos object
    var toDos = JSON.parse(dataJSON);

    var app = {
        /**
        * b.  Add and delete elements in the Todo List using jQuery; bind events (add, update, delete) to objects in the Todo List using jQuery.
        * @namespace app
        * @method showTodos
        */
        showTodos: function() {

            toDos = JSON.stringify(toDos);
            console.log(toDos);
            toDos = JSON.parse(toDos);
            console.log(toDos);

            var todoItems = $('#todo-items');

            todoItems.html('');

            toDos.forEach(function(todo) {
                todoItems.append('\
                <tr>\
                    <td id=' + todo.id + '>' + todo.id +  '</td>\
                    <td>' + todo.title + '</td>\
                    <td>' + todo.date + '</td>\
                    <td>' + todo.desc + '</td>\
                    <td>' + todo.email + '</td>\
                    <td>' + todo.status + '</td>\
                    <td><button class="label label-default delete-todo border-none" id="' + todo.id + '"><span class="glyphicon glyphicon-remove"></span></button></td>\
                    <td><button type="button" class="label label-default update-todo border-none" data-toggle="modal" data-target="#myModal" id="update-' + todo.id + '"><span class="glyphicon glyphicon-pencil"></span></button></td>\
                </tr>\
                ');
            });

            app.remote();
            $('.update-todo').on('click', app.update);
            $('.delete-todo').on('click', app.delete);
        },

        /**
        * b.  Add and delete elements in the Todo List using jQuery; bind events (add, update, delete) to objects in the Todo List using jQuery.
        * d.  Apply advanced tree walking techniques (find and closest) to create, remove, update, and remove elements from the Todo List with jQuery.
        * @namespace app
        * @namespace app
        * @method create
        * @param {Object} event
        */
        create: function(event) {
            event.preventDefault();

            var inputTitle = $('#title').val();
            var inputDate = $('#date').val();
            var inputDesc = $('#desc').val();
            var inputEmail = $('#email').val();
            var inputStatus = $('#status').val();

            //var toDos = JSON.parse(dataJSON);
            var id = $('#todo-items tr td:nth-child(1)').last().attr('id');

            toDos.push({
                id: (parseInt(id) + 1).toString(),
                title: inputTitle,
                date: inputDate.split("-").reverse().join("/"),
                desc: inputDesc,
                email: inputEmail,
                status: inputStatus,
            });

            dataJSON = JSON.stringify(toDos);

            $(this).closest('form').find('input[type=text], input[type=date], textarea').val('');
            $(this).closest('form').find('select option:eq(0)').prop('selected', true);

            console.log(dataJSON);

            app.showTodos();
        },

        /**
        * b.  Add and delete elements in the Todo List using jQuery; bind events (add, update, delete) to objects in the Todo List using jQuery.
        * f.  Use JSON to store to the Todo List; and parse JSON objects and use the results to dynamically update the Todo List single page application.
        * @namespace app
        * @method update
        * @param {String} event
        */
        update: function(event) {
            event.preventDefault();

            $row = $(this).closest('tr');
            $id = $('td:nth-child(1)',$row);
            $title = $('td:nth-child(2)',$row);

            toDos.forEach(function(todo,index) {
                if($id.text() === todo.id) {
                    console.log(todo.title);
                    var date = todo.date;
                    $('#update-title').val(todo.title);
                    $('#update-date').val(todo.date);
                    $('#update-desc').val(todo.desc);
                    $('#update-email').val(todo.email);
                    $('#update-status').val(todo.status).change();
                }
            });

            $('#update-btn').on('click', function() {
               toDos.forEach(function(todo, index) {
                if($id.text() === todo.id) {
                    todo.title = $('#update-title').val();
                    todo.date = $('#update-date').val();
                    todo.desc = $('#update-desc').val();
                    todo.email = $('#update-email').val();
                    todo.status = $('#update-status').val();
                }
               });
               dataJSON = JSON.stringify(toDos);
               app.showTodos();
            });
        },

        /**
        * b.  Add and delete elements in the Todo List using jQuery; bind events (add, update, delete) to objects in the Todo List using jQuery.
        * @namespace app
        * @method delete
        */
        delete: function() {
            var todoToDelete = $(this).attr('id');

            toDos.forEach(function(todo,index) {
                if(todoToDelete === todo.id) {
                    toDos.splice(index, 1);
                }
            });

            app.showTodos();
        },

        /**
        * This setups the namespace for the app methods to work.
        * @namespace app
        * @method remote
        */
        remote: function() {


        },

    };

   //Displys the ToDos
   app.showTodos();
   $('#todo-form').on('submit', app.create);
});
