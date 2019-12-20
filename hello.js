let number1 = "", number2 = "";
let operator;
let switchNumber = false;

function numberClick(numberTarget) {
    if (switchNumber) {
        number2 += numberTarget
        console.log(number2);
    } else {
        number1 += numberTarget;
        console.log(number1);
    }
    $('#result').text($('#result').text() + numberTarget);
}

$('#resultbtn').click(function() {
    calculate();
})
$(document).keydown(function(event) {

})

function calculate() {
    let _number1 = parseInt(number1);
    let _number2 = parseInt(number2);
    let result;
    switch (operator) {
        case "+":
            result = _number1 + _number2;
            break;
        case "-":
            result = _number1 - _number2;
            break;
        case "x":
            result = _number1 * _number2;
            break;
        case "/":
            result = _number1 / _number2;
            break;
    }
    console.log(result);
    document.getElementById('result').innerHTML += ' = ' + result;

}

function operatorClick(operatorTarget) {
    operator = operatorTarget;
    switchNumber = !switchNumber;
    document.getElementById('result').innerHTML += ' ' + operatorTarget + ' ';

}