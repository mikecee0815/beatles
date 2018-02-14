
window.onload = function() {


}

function beatles(cars){
	var dataDiv = document.getElementById('dataDisplay');
	
	for(i = 0; i <= cars.length; i++){
		var car = cars[i];
		var li = document.createElement('li');
		li.innerHTML = car.name;
		dataDiv.appendChild(li);
		// console.log(dataSet);
	}
	
}
