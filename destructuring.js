/*
	Lesson: Being able to pull elements from an array
			pulling elements from an object
			destructuing an argument VERY COOL

*/
var array = ['first', 'second', 'third'];
var [a, , c] = array;

console.log(a, c);

var todo = {
	description: 'watch bew es6 section',
	completed: false
}

//-> in the first case, it's pulling the description property and
//   assinging its value to message
// var {description: message, completed} = todo;
// console.log(message);
// console.log(completed);

function getTodoStatus ({completed}) {
	if (typeof completed === 'boolean'){
		return [`Todo is ${completed ? '' : 'not'} completed.`];
	}else{
		return [undefined, {error: 'INVALID_TODO_ITEM'}];
	}
}
//--> VERY COOL USE THIS OFTEN 
var [response, err] = getTodoStatus(todo);
if (err) {
	console.log(err.error);
}else{
	console.log(response);
}