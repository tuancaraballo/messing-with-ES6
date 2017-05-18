var locations = [];
locations.push({
	name: "Philadelphia",
	weather: 22
});

locations.push({
	name: "Mexico City",
	weather: 52
});

for ( let location of locations){
	console.log(`Its ${location.weather} in ${location.name}`);
}

function averageGrade (...numbers) {

	var total = 0;
	for (let num of numbers){
		total += num;
	}
	return total/numbers.length;
}

var total = averageGrade(0,5,10,15);
console.log('Average weather is ' + total);