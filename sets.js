var chatRooms = new Set();

// Add
chatRooms.add('Runners');


// Size
console.log(chatRooms.size);

// Has
console.log(`Does he set have Runners: ${chatRooms.has('Runners')}`);

// Delete
chatRooms.delete('Runners');
chatRooms.clear();
console.log(chatRooms.size);

// You can store different types in a set, very cool!
chatRooms.add({name: 'Tuan'});
chatRooms.add('Hello World!');

// To Array
console.log([... chatRooms]);

chatRooms.forEach( function(chatRoom) {
	console.log(`Found chat room ${chatRoom}`)
});

var movieSet = new Set();

function addMovie (title) {
	if(!movieSet.has(title)){
		movieSet.add(title);
	}else{
		console.log('Movie already exists in the movieSet');
	}
}
addMovie('One night');
addMovie('Two night');
addMovie('One night');
console.log([...movieSet]);
