/*
	Static methods don't need an instantiated object, always ask yourself
	"Does this method has a value outside an individual instance? "

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

var person1 = new Person('tuan');
console.log(person1);
var person2 = new Person();
console.log(person2);

person1.printGreeting();
person2.printGreeting();
console.log(Person.capitalizeWord('mike'));