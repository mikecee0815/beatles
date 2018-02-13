
window.onload = function() {

	var url = "https://mikecee0815.github.io/beatles/beatles.json";
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.onload = function(){
	if (request.status == 200) {
		fetchSomething(request.responseText);
		// alert(request.responseText);
	} else {
		alert("no data...");
	}
};
request.send(null);

}

function fetchSomething(response){
	var dataDiv = document.getElementById('dataDisplay');
	var dataSet = JSON.parse(response);
	for(i = 0; i<dataSet.length;i++){
		console.log(dataSet.name);
	}
	// dataDiv.innerHTML = response;
	// console.log(response);
}
