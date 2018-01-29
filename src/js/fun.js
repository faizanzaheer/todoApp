
	import $ from 'jquery';
	export default class List{
		constructor(){
			this.listItems = [];
		}

	 addListItem(item) {
		this.listItems.push(item);		
		this.renderArray();
	};

	 removeListItem(index){
		this.listItems.splice(index, 1);
		this.renderArray();
	}

	 shiftUpItem(index) {
		if (!index) {
			return null;
		}else{
			var temp = this.listItems.splice(index, 1);
			this.listItems.splice(index-1, 0, temp[0]);
			this.renderArray();
		}
	}

	 shiftDownItem(index) {
		if (index >= this.listItems.length-1) {
			return null;
		}else{
			var temp = this.listItems.splice(index, 1);
			this.listItems.splice(index+1, 0, temp[0]);
			this.renderArray();
		}
	}

	 completedItem(index) {
		this.listItems[index].completed = !this.listItems[index].completed;
		console.log(this.listItems[index].completed)
		this.renderArray();
	}

	 renderArray() {
	 	console.log('renderArray', this)
	 	// var that = this;
		$('tbody').remove();
		$('table').append('<tbody></tbody>');
		this.listItems.map((listItem, index) =>{//in ES6 we this arrow instead of .bind(this) no need to write the function property
			console.log('listItems', this)
			return(
				`<tr id="row${index}">
					<td>${index}</td>
					<td class=${listItem.completed ? 'completed': ''}>${listItem.itemValue}</td>
					<td>
						<button class="btn btn-success" id="btnComplete${index}">Completed</button>
						<button class="btn" id="btnUp${index}">
							Shift
							<span class="glyphicon glyphicon-menu-up"></span>
						</button>
						<button class="btn" id="btnDown${index}">
							Shift
							<span class="glyphicon glyphicon-menu-down"></span>
						</button>
						<button class="btn btn-danger" id="btnDel${index}">Delete</button>
					</td>
				</tr>`
			)
		}).forEach((item, index) =>{
				$('tbody').append(item);
				
				$(`#btnDel${index}`).on('click', e =>{//instead of function(e) we used e => 
					console.log(`Delete ${index}`);
					this.removeListItem(index);
				});
				
				$(`#btnUp${index}`).on('click', e =>{
					this.shiftUpItem(index);
				});

				$(`#btnDown${index}`).on('click', e =>{
					this.shiftDownItem(index);
				});

				$(`#btnComplete${index}`).on('click', e =>{
					this.completedItem(index);
				});

			});
	};	
}

// module.exports = addListItem;
// export default addListItem;