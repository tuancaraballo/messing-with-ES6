/*
 Using let in a global variable doesn't make any difference from using var,
 but using let inside a scope, it will keep it inside that scope without
 changing the global variable

*/

let name = 'tuan';

var x = 0;

if(true){
	//var x = 12;
	let x = 12;
	console.log(x);
}

console.log(x); //--> IF var x inside the if, then this prints 12 instead of 0
				// Yeah I know, right? This is why using let is better

console.log(name);

console.log('=== USING REGULAR VAR ===')
for(var i = 0; i < 3; i++){
	console.log(`${i}`)
}
console.log('Printing i: ' + i);

console.log('=== USING LET NOW ===')
for(let m = 0; m < 3; m++){
	console.log(`${m}`)
}
//console.log('Printing m: ' + m); //--> it crashes her ebecause m i not define outside the 
								// the for loop


function genCallBack(){
	let hername = "Cinthia";
	return function() {
		console.log(`Hello ${hername}`);
	}
}

genCallBack();


if (true){
	var mo = 5;
}
console.log(mo);
