
	function addListItem(item,listItems) {
		listItems.push(item);		
		renderArray(listItems);
	};

	function removeListItem(index, listItems){
		listItems.splice(index, 1);
		renderArray(listItems);
	}

	function shiftUpItem(index, listItems) {
		if (!index) {
			return null;
		}else{
			var temp = listItems.splice(index, 1);
			listItems.splice(index-1, 0, temp[0]);
			renderArray(listItems);
		}
	}

	function shiftDownItem(index, listItems) {
		if (index >= listItems.length-1) {
			return null;
		}else{
			var temp = listItems.splice(index, 1);
			listItems.splice(index+1, 0, temp[0]);
			renderArray(listItems);
		}
	}

	function completedItem(index, listItems) {
		listItems[index].completed = !listItems[index].completed;
		console.log(listItems[index].completed)
		renderArray(listItems);
	}

	function renderArray(listItems) {
		$('tbody').remove();
		$('table').append('<tbody></tbody>');
		listItems.map(function(listItem, index){
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
		}).forEach(function(item, index){
				$('tbody').append(item);
				
				$(`#btnDel${index}`).on('click', function(e){
					console.log(`Delete ${index}`);
					removeListItem(index, listItems);
				});
				
				$(`#btnUp${index}`).on('click', function(e){
					shiftUpItem(index, listItems);
				});

				$(`#btnDown${index}`).on('click', function(e){
					shiftDownItem(index, listItems);
				});

				$(`#btnComplete${index}`).on('click', function(e){
					completedItem(index, listItems);
				});

			});
	};	

module.exports = addListItem;