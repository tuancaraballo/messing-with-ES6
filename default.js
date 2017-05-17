function sayHello (name = 'world') {
	console.log('Hello '+ name + "!");
}

function greetUser (user = {name= 'Anonymous'}){
	console.log('Hello ' +user.name + "!");
}

sayHello();
sayHello('Kate');
greetUser();