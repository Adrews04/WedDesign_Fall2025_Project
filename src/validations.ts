
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("validateBtn");
    const output = document.getElementById("validationOutput");

    function validateAge(age: number): boolean {
        return age > 0 && age <= 120;
    }

    button?.addEventListener("click", () => {
        const input = document.getElementById("ageInput") as HTMLInputElement;
        const age = Number(input.value);
        
        if (output) {
            if (validateAge(age)) {
                output.textContent = "Valid input: age is within the allowed range.";
                output.style.color = "green";
            } else {
                output.textContent = "Invalid input: age must be between 1 and 120.";
                output.style.color = "red";
            }
        }
    });
});