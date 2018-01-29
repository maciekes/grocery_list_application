(function() {

	// Function for making arrays //

	function makeArray(nodeList) {

    var arr = [];

    for(var i = 0; i < nodeList.length; i++) {

        arr.push(nodeList[i]);

    }

    return arr;
}

	// Changing color of bought-button //
	
	var boughtButton = document.querySelectorAll(".bought-button");
	var boughtButtonArr = makeArray(boughtButton);

	function changeColor (){
		this.style.backgroundColor = "#00E300";		
	}


	boughtButtonArr.forEach(boughtButton => boughtButton.addEventListener("click", changeColor, false));
	// boughtButtonArr.forEach(boughtButton => boughtButton.addEventListener("touchstart", changeColor, false));

	// Adding items to grocery list //

	var addButton = document.querySelector(".addbutton");
	
	function addItem(){
		var item = document.querySelector(".hidden");
		item.classList.remove("hidden");
		item.classList.add("show");	
	}	


	addButton.addEventListener("click", addItem, false);
	// addButton.addEventListener("touchstart", addItem, false);
	// Removing items from grocery list // 

	var removeButton = document.querySelectorAll(".remove-button");
	var removeButtonArr = makeArray(removeButton);

	function removeItem () {
		this.parentElement.classList.remove("show");
		this.parentElement.classList.add("hidden");
	}

	function returnColor(){
		this.previousElementSibling.style.backgroundColor = "#939393";
	}

    removeButtonArr.forEach(removeButton => removeButton.addEventListener("click", removeItem, false));
	removeButtonArr.forEach(removeButton => removeButton.addEventListener("click", returnColor, false));
	// removeButtonArr.forEach(removeButton => removeButton.addEventListener("touchstart", removeItem, false));
	// removeButtonArr.forEach(removeButton => removeButton.addEventListener("touchstart", returnColor, false));

	// Deleting whole list //

	var deleteButton = document.querySelector(".delete-button");
	
	function deleteList () {
		var show = document.querySelectorAll(".show");
		show.forEach(show => show.classList.remove("show"));
		show.forEach(show => show.classList.add("hidden"));
	}

	deleteButton.addEventListener("click", deleteList, false);
	// deleteButton.addEventListener("touchstart", deleteList, false);
	// New grocery list //

	var newListButton = document.querySelector(".newlist-button");

	function newList () {
		window.location.reload(true);
	}

	newListButton.addEventListener("click", newList, false);
	// newListButton.addEventListener("touchstart", newList, false);


})();




