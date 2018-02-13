
window.onload() {

	var url = "https://mikecee0815.github.io/beatles/beatles.json";
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.onload = function(){
	if (request.status == 200) {
		alert.("Data succesfully recieved!!!");
	} else {
		alert("no data...");
	}
};

}
