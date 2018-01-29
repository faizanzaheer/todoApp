import List from './fun.js';
// import $ from 'jquery';
import 'bootstrap';
import $ from 'jquery';
import '../css/styles.scss';
$(document).ready(function(){

	console.log(`Loading.....`);

	// var addItems = require('./fun');
	var listItems = [];
	var list = new List();
	
	// obj = {age: 24};
	// obj1 = {...obj};

	$('form').on('submit', formCb);
	
	function formCb(event) {
		event.preventDefault();
		var itemValue = $('#listItemInput').val();
		var itemObj = {itemValue: itemValue, completed: false};
		$('#listItemInput').val('');
		list.addListItem(itemObj, listItems);
	}	
	
});