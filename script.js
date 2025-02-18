const display = document.querySelector(".display");
const massiveButtons = Array.from(document.querySelectorAll(".button"));

massiveButtons.map((event) => {
    event.addEventListener("click", (e) => {
        const currentText = display.innerHTML;
        const value = e.target.innerHTML;

        switch (value) {
            case "AC": {
                display.innerHTML = "0";
                break;
            }
            case "=": {
                display.innerHTML = eval(display.innerHTML);
                break;
            }
            case "+": {
                if (!currentText.includes("+")) {
                    display.innerHTML += value;
                }
                break;
            }
            case "+/-": {
                if (!currentText.includes("-")) {
                    display.innerHTML = "-" + currentText;
                }
                break;
            }
            case "%": {
                display.innerHTML = currentText / 100;
                break;
            }
            case ".": {
                let numbers = currentText.split(/[\+\-\*\/]/);
                let lastNumber = numbers[numbers.length - 1];

                if (!lastNumber.includes(".")) {
                    display.innerHTML += value;
                }
                break;
            }
            default:
                if (currentText === "0" && value !== ".") {
                    display.innerHTML = value;
                } else {
                    display.innerHTML += value;
                }
        }
    });
});
