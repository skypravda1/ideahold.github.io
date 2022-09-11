let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let btn = document.getElementById("btn");

btn_func = btn.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		return '1';
		tg.MainButton.show();
	}
});

const form  = document.getElementById('Form1');

form_func = form.addEventListener('submit', (event) => {
	return form.elements['name'].value;
    alert(form.elements['name'].value);
});



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(form_func);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p); 