
window.onload = function() {


}

function beatles(beatleCars){
	var dataDiv = document.getElementById('dataDisplay');
	
	for(i = 0; i <= beatleCars.length; i++){
		var car = beatleCars[i];
		var li = document.createElement('li');
		li.innerHTML = car.name;
		dataDiv.appendChild(li);
		console.log('test');
	}
	
}
