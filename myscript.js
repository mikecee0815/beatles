
window.onload() {
	var url = "http://github.com/mikecee0815/beatles.json";
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.onload = function(){
	if (request.status == 200) {
		alert.("Data succesfully recieved!!!");
	}
};

}
