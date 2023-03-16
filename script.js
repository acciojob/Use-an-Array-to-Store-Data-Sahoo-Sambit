const list = document.querySelectorAll('li');
let yourArray = ['one', 2, true, 56, null];
for (let i = 0; i < 5; i++) {
	var element=yourArray[i];
	list[i].innerHTML=element;
}
