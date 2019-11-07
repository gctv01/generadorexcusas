


function alertame(){
	alert("Hello! I am an alert box!!");
}

function excuse(){

var que = ["mi perro", "mi gato", "mi amigo"];
var como = ["se comio", "destruyo", "abandono"];
var que2= "la tarea";
var cuando = ["ayer", "esta mañana", "mañana"];
document.querySelector("#hola").innerHTML = `${que[Math.floor(Math.random() * 3)]}  ${como[Math.floor(Math.random() * 3)]} ${que2} ${cuando[Math.floor(Math.random() * 3)]} `;
	
};