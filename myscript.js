
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
		var dataItem = dataSet[i];
		dataDiv.innerHTML = dataItem.name; 
		// console.log(dataItem.name);
	}
	
}
