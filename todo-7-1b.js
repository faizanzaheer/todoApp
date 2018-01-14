$(document).ready(function(){

	console.log('Loading.....');

	var listItems = [];

	$('form').on('submit', formCb);
	require('./fun.js');
});