	function formCb(event) {
		event.preventDefault();
		var itemValue = $('#listItemInput').val();
		var itemObj = {itemValue: itemValue, completed: false};
		$('#listItemInput').val('');
		addListItem(itemObj);
		renderArray();
	};

	function addListItem(item) {
		listItems.push(item);
	};

	function removeListItem(index){
		listItems.splice(index, 1);
		renderArray();
	}

	function shiftUpItem(index) {
		if (!index) {
			return null;
		}else{
			var temp = listItems.splice(index, 1);
			listItems.splice(index-1, 0, temp[0]);
			renderArray();
		}
	}

	function shiftDownItem(index) {
		if (index >= listItems.length-1) {
			return null;
		}else{
			var temp = listItems.splice(index, 1);
			listItems.splice(index+1, 0, temp[0]);
			renderArray();
		}
	}

	function completedItem(index) {
		listItems[index].completed = !listItems[index].completed;
		console.log(listItems[index].completed)
		renderArray();
	}

	function renderArray() {
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
					removeListItem(index);
				});
				
				$(`#btnUp${index}`).on('click', function(e){
					shiftUpItem(index);
				});

				$(`#btnDown${index}`).on('click', function(e){
					shiftDownItem(index);
				});

				$(`#btnComplete${index}`).on('click', function(e){
					completedItem(index);
				});

			});
	};	