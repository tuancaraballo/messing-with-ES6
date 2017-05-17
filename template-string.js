function greet (name = "Andrew"){
	console.log('Hello '+ name + "!");
	console.log(`Hello ${name}!`);
}


greet();
greet('Cinthia');

console.log(`1+6 = ${1+6}`);

console.log(`Hey,
 This kindof looks like an email!

- Tuan
	`);

var defaultPerson = { 
		name:"Anonymous", 
		age : 0
	}

var person = {
	name: "Tuan",
	age: 26
}
function welcomePerson (person = defaultPerson) {
	console.log(` Hello ${person.name} ! You are ${person.age}`);
}

welcomePerson();
welcomePerson(person);