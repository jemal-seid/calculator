var val = document.getElementById("inp");
var result = document.getElementById("result");

function AT_add(v) {
	val.value += v;
}

function radical() {
	console.log("radical button clicked");
}

function cls() {
	result.innerHTML = "";
	val.value = "";
}

function exe() {
	result.innerHTML = val.value = eval(val.value);
}

function cancel() {
	val.value = val.value.substr(0, val.value.length - 1);
}

let myAge = 36;
let myBrotherAge = 37;
let mySisterAge = 50;

let sum = myAge + myBrotherAge;
let num1 = 50;

percent = num1 / 100;

console.log(percent);
