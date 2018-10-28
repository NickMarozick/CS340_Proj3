

let myList = document.getElementById('nation')
let myListButton = document.getElementById('nationButton')


myListButton.addEventListener('click', ()=> {

	addNation('Serbia')
	addNation('Greece')
	addNation('Italy')

})

function addNation(nationName) {

	var myNation = document.createElement("li");
	myNation.appendChild(document.createTextNode(nationName));
	myList.appendChild(myNation)
}