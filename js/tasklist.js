$(document).ready(function(){

	//write your code here.

	var taskName = '',//name of the task
		taskNum = '',//number of the task
		taskList = [];//list of tasks

	// DISPLAY LIST //

	function displayList() {


	taskListArea.html ('') //clears the list

	$.each(taskList, function(i, value) { //reiterating over the whole list
		console.log(i+' '+value);
	});

	console.log
}




/*
	$('#task_list').find('li').each(function(i){
		console.log($(this).data('task_list'));
		console.log($(this).data('task_name'));
	});


		/*var taskList = $(this).text();
		taskList.push(task);
	}

	var taskName = $('input[name="task_name"]').val();


	$('form').submit(function(event) {
		event.preventDefault();
	});
	*/
});