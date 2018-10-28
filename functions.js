

// let myList = document.getElementById('nation')
// let myListButton = document.getElementById('nationButton')


// myListButton.addEventListener('click', ()=> {

// 	addNation('Serbia')
// 	addNation('Greece')
// 	addNation('Italy')

// })

// function addNation(nationName) {

// 	var myNation = document.createElement("li");
// 	myNation.appendChild(document.createTextNode(nationName));
// 	myList.appendChild(myNation)
// }

function addNation() {


 	// Find a <table> element with id="myTable":
	var table = document.getElementById("nation-table");

	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow();

	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	// Add some text to the new cells:
	cell1.innerHTML = "1";
	cell2.innerHTML = "Italy";
	
		  // add delete buttons 
		  var dcell = document.createElement("td");
          var deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          // deleteBtn.setAttribute("onclick", "deleter(" + id + ")");
          dcell.append(deleteBtn);
          row.append(dcell); 
}

window.onload = function() {

	console.log('just loaded')

	addNation()

}

