// function add (a, b) {
// 	return a + b;
// }

 var numbers = [4, 22, 10];

// console.log(add(1, 4));
// console.log(add(...numbers));

var groupA = [33, 99];
var groupB = [11];

var unified = [...groupA, ...groupB, 100];
console.log(unified);
unified.push(...[55,33]);
console.log(unified);


function greetUsers (group, ...names){
	names.forEach(function (name){
		console.log(`Hello  + ${name}. You are part of  ${group}`);
	});
}

function adder(base, ...numbers){
	numbers.forEach( function (num) {
		console.log(base + num);
	});
}

greetUsers('Developers', 'andrew', 'mike', 'cinthia');
adder(10, 4, 22, 10);