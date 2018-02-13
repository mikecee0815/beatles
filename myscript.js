
window.onload = function() {

	var url = "https://mikecee0815.github.io/beatles/beatles.json";
	var request = new XMLHttpRequest();
	request.open("GET",url);
	request.onload = function(){
	if (request.status == 200) {
		saySomething(request.responseText);
		// alert(request.responseText);
	} else {
		alert("no data...");
	}
};
request.send(null);

}
function saySomething(data){
	console.log(data);
}
