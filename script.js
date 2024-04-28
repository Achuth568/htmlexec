document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.getElementById('clear');
    let deleteButton = document.getElementById('delete');
    let equals = document.getElementById('equals');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (display.innerText === '0') {
                display.innerText = ''; // Clear the zero before adding new numbers
            }
            display.innerText += button.value; // Append the value of the clicked button to the display
        });
    });

    clear.addEventListener('click', () => {
        display.innerText = '0'; // Reset the display to zero when C is clicked
    });

    deleteButton.addEventListener('click', () => {
        display.innerText = display.innerText.slice(0, -1); // Remove the last character from the display
        if (display.innerText === '') {
            display.innerText = '0'; // If all characters are deleted, reset display to zero
        }
    });

    equals.addEventListener('click', () => {
        try {
            // Use eval to calculate the result from the display string
            display.innerText = eval(display.innerText).toString();
        } catch (error) {
            display.innerText = 'Error'; // Display error if the calculation fails
            setTimeout(() => {
                display.innerText = '0'; // Reset after a short delay
            }, 1500);
        }
    });
});
