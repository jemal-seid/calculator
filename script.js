//variables 
let firstNumber = document.querySelector(".firstNumber")
let secondNumber = document.querySelector(".secondNumber")
let inputOption = document.getElementById("operators")
let submitButton = document.querySelector(".submit")
let result = document.querySelector(".resultText")


//function to check correct number & resturn true/false

const checkNumber = function (number) {
    if (number != "") return true
    return false
}

// functions

const calculator = function (e) {
    e.preventDefault()


// 1. check if user enters the number 

let checkFirstNumber = checkNumber(firstNumber.value)


if (checkFirstNumber == false) {
    result.innerHTML = "Error: enter first number ";
    return
    
    
}
let checkSecondNumber = checkNumber(secondNumber.value)


if (checkSecondNumber == false) {
    result.innerHTML = "Error: enter second number ";
    return
    
}

//check for operators

let operators = inputOption.value

if (operators === "add") {
    result.innerHTML = Number(firstNumber.value) + Number(secondNumber.value)
} else if (operators === "minus") {
    result.innerHTML = Number(firstNumber.value) - Number(secondNumber.value)
}else if (operators === "divide") {
    result.innerHTML = Number(firstNumber.value) / Number(secondNumber.value)
}else if (operators === "multiply") {
    result.innerHTML = Number(firstNumber.value) * Number(secondNumber.value)
} else {
    result.innerHTML = "invalid entry"
}


}

//event listener

submitButton.addEventListener("click", calculator)