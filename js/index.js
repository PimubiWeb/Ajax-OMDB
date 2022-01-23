$(document).ready(function(){

	//load

	$('#datos').load('http://www.omdbapi.com/?i=tt3896198&apikey=55e833a1');

	//get y post

	$.get('http://www.omdbapi.com/?&apikey=55e833a1', {t:'titanic'}, function(response){
		console.log(response);
	});
})