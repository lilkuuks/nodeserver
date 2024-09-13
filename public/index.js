const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(input) {
    try {
        display.value = eval(display.value);
    }catch (error) {
        console.log(error)
        display.value = error;
    }
}

function clearDisplay() {
    display.value = "";
}

