$(document).ready(function(){

	//write your code here.

	var taskName = '',  //task_name
		taskNum = '',  //ntask_num
		taskList = [];  //array task_list

	//DOM SEL

	var taskNameInput = $('#task_name'),
		taskNumInput = $('#task_num'),
		taskListArea = $('#task_list');
 
	// DISPLAY LIST //
	function displayList() {

	taskListArea.html (''); //clears the list

	$.each(taskList, function(i, value) { //reiterating over the whole list
		taskListArea.append('<li>'+ (i + 1)+'.<span class="name">'+value+'</span></li>');//list of added tasks
		console.log(taskList[i]);
	});

	console.log('-----------');
}

	//EVENT ADD TASK FORM SUBMIT

		$('#add_task').submit(function(){//this is the form
			taskName = taskNameInput.val(); //current inputted task
			$('#task_name').val('');//clear input
			if(taskName !== '') {//validate entry
				taskList.push(taskName);//add to array
				displayList();
			}
			return false;//prevent page reload
		});

	//EVENT REMOVE_task FORM SUBMIT 
		$('#remove_task').submit(function(){
		
			taskNum = taskNumInput.val(); //store the currently typed task number value
			taskNum = parseInt(taskNum); //covert to a number ot get NaN.
			
			$('#task_num').val(''); //clear input
			
			if(taskNum === '' || isNaN(taskNum)){ //check if its empty or not a number!
				
				alert('Must be a number wise guy!');

			} else {
			
				taskList.splice(taskNum - 1,1); //removes task from list array
				displayList();
			
			}
		
			return false; //stops form from processing (prevent page reload)
		});
	
});


