$(document).ready(function(){

	console.log('Loading.....');

	var addItems = require('./fun.js');

	var listItems = [];

	$('form').on('submit', formCb);
	
	function formCb(event) {
		event.preventDefault();
		var itemValue = $('#listItemInput').val();
		var itemObj = {itemValue: itemValue, completed: false};
		$('#listItemInput').val('');
		addItems(itemObj,listItems);
	};	
	
});