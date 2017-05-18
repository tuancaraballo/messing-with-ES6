/*
	LESSON: extending a class ex: employee
	        redefining method from parent class : printGreetings()
	        using method from parent class: callSuperMethod()
*/
class Person {
	constructor (name) {
		this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
	}
	printGreeting () {
		console.log(`Hello I am ${this.name}!`);
	}
	static capitalizeWord(word) {
		return word[0].toUpperCase() + word.slice(1);
	}
}

class Employee extends Person {
	constructor (name, job = 'Unemployed') {
		super(name);
		this.job = job;
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name} and I am a ${this.job}`);
	}

	callSuperMethod () {
		super.printGreeting();
	}
}

var person1 = new Employee('tuan', 'Developer');
console.log(person1);
person1.callSuperMethod();
person1.printGreeting();

var person2 = new Employee();
console.log(person2);
person2.printGreeting();
console.log(Person.capitalizeWord('mike'));