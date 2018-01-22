import {addListItem as addItems, removeListItem as removeItems} from './fun';
// import $ from 'jquery';
import 'bootstrap';
import '../css/styles.scss';
$(document).ready(function(){

	console.log(`Loading.....`);

	// var addItems = require('./fun');
	var listItems = [];
	
	// obj = {age: 24};
	// obj1 = {...obj};

	$('form').on('submit', formCb);
	
	function formCb(event) {
		event.preventDefault();
		var itemValue = $('#listItemInput').val();
		var itemObj = {itemValue: itemValue, completed: false};
		$('#listItemInput').val('');
		addItems(itemObj, listItems);
	}	
	
});