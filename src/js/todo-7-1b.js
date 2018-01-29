// import List from './fun.js';
// import $ from 'jquery';
//import 'bootstrap';
// import $ from 'jquery';
import '../css/styles.scss';
import List from './list.js'
var list = new List();
console.log(list)
// import'../../node-modules/bootstrap/dist/css/bootstrap'
// $(document).ready(function(){

// 	console.log(`Loading.....`);

// 	// var addItems = require('./fun');
	
// 	var list = new List();
	
// 	// obj = {age: 24};
// 	// obj1 = {...obj};

// 	$('form').on('submit', formCb);
	
// 	function formCb(event) {
// 		event.preventDefault();
// 		var itemValue = $('#listItemInput').val();
// 		var itemObj = {itemValue: itemValue, completed: false};
// 		$('#listItemInput').val('');
// 		list.addListItem(itemObj, listItems);
// 	}	
	
// });
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
	<List />,  //behind the scene: list.render()// automatically will create new object
	// <div>Hello</div>,// what to render
	document.querySelector('#app'),//where to render
	function(){console.log('I have rendered')}
	);