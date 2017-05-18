/*
	New stuff:
		- add properties by referencing variables without having to define
			the attribute value, ex: age
		- dynamically create propeties names, ex: hello5
		- define functions inside objects using the shorthad, ex: printAge()

*/

var age = 25;

function printHello(){
	console.log('Hello');
}

var person = {
	name: 'Tuan',
	age,
	printHello,
	['hello' + (age+2)]: 'I am here',
	printAge(){
		console.log(this.age);
	}
}

console.log(person.age);