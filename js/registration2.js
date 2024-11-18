// Focus jumps automatically to the next input after a digit is entered
document.querySelectorAll(".code-input").forEach((input, index, inputs) => {
    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (event) => {
        if (
            event.key === "Backspace" &&
            input.value.length === 0 &&
            index > 0
        ) {
            inputs[index - 1].focus();
        }
    });
});

// Mock form submission
function submitForm() {
    let code = "";
    document.querySelectorAll(".code-input").forEach((input) => {
        code += input.value;
    });

    if (code.length === 5) {
        alert("Код подтвержден: " + code);
    } else {
        alert("Пожалуйста, введите полный код.");
    }
}
