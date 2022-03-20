var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".randomColorButton")
var color3 = document.querySelector(".color2");
var color4 = document.querySelector(".color2");
css.textContent = "linear-gradient(to right, rgb(255, 0, 0) , rgb(255, 255, 0))" + ";"

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setGradient2() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ getRandomColor1()
	+ ", " 
	+ getRandomColor2()
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor1() {
    var letters = '0123456789ABCDEF';
    var color3 = '#';
    for (var i = 0; i < 6; i++) {
      color3 += letters[Math.floor(Math.random() * 16)];
    }
    return color3;
}

function getRandomColor2() {
    var letters = '0123456789ABCDEF';
    var color4 = '#';
    for (var i = 0; i < 6; i++) {
      color4 += letters[Math.floor(Math.random() * 16)];
    }
    return color4
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setGradient2);
