// The reason this is better than regular objects is because of the
// below methods that are not available on regular objects,
// also in regular objects, keys must be strings whereas in maps
// they can be booleans, objects, ints, etc, see example at the end
/*
var myMap = new Map();

//Setting key value pair
myMap.set('name', 'Cinthia');

// Getting value
console.log(myMap.get('name'));

// Has the key
console.log(myMap.has('age'));
console.log(myMap.has('name'));

//Delete
myMap.delete('name');

//Clear:
myMap.clear();

//Size:
console.log(myMap.size);

// Cool feature about maps
var user = {name: 'Tuan'};
myMap.set(user, 'Cuba');
console.log(myMap.get(user));

*/

var otherMap = new Map();
otherMap.set(1, "Tochito");
otherMap.set(2, 'Nathan');
otherMap.set(3, 'Cinthia');

console.log([...otherMap]);
console.log(otherMap.keys());
console.log(otherMap.values());

var location = {name: 'Oslo'};
var secondLocation = {name: 'Cuba'};

var locationMap = new Map();


function setWeather(location=null, weather=null){
	if( location != null && weather != null){
		locationMap.set(location,weather)
	}
}

function printWeather(location){
	if(locationMap.has(location)){
		console.log(locationMap.get(location));
	}else{
		console.log('Location not found');
	}
}

setWeather(location, 55);
//setWeather(secondLocation, 90);
printWeather(location);
printWeather(secondLocation);

