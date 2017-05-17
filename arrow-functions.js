var people = ['tuan', 'cinthia', 'tochito'];

// people.forEach(function (name){
// 	console.log(name);
// });


// people.forEach((name) => console.log(name));

//-> USING ARROW FUNCTIONS
// people.forEach((name) => {
// 	console.log('Hello');
// 	console.log(name);
// });


var add = (a,b) => a +b;
var sub = (a,b) => { return a-b };
console.log(add(3,9));
console.log(sub(9,3));

var person = {
	name: 'Andrew',
	likes: ['Movies', 'Programming', 'Coding'],
	generateGreeter: function () {
		var that = this
		return function () {
			console.log(that.name);
		}
	}
}