// Get references to the button and counter elements
const heartButton = document.getElementById('heartButton');
const counterElement = document.getElementById('counter');

// Initialize the counter
let clickCount = 0;

// Add a click event listener to the button
heartButton.addEventListener('click', function () {
    // Increment the counter
    clickCount++;

    // Update the counter display
    counterElement.textContent = `Hearts Clicked: ${clickCount}`;

    // Create a new heart element
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Position the heart relative to the button
    const buttonRect = this.getBoundingClientRect();
    heart.style.left = `${buttonRect.left + buttonRect.width / 2 - 10}px`; // Center the heart horizontally
    heart.style.top = `${buttonRect.top}px`; // Position the heart at the top of the button

    // Append the heart to the body
    document.body.appendChild(heart);

    // Remove the heart after the animation ends to clean up the DOM
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
});