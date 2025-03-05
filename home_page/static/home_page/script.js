// Get references to the button and counter elements
const heartButton = document.getElementById('heartButton');
const counterElement = document.getElementById('counter');

// Get the CSRF token from the meta tag
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

// Function to fetch the current heart count from the server
async function updateCounterDisplay() {
    try {
        const response = await fetch('api/hearts/', { // Django API endpoint
            method: 'GET'
        });
        if (response.ok) {
            const data = await response.json();
            counterElement.textContent = `Hearts Clicked: ${data.totalHearts}`;
        } else {
            console.error('Failed to fetch heart count');
        }
    } catch (error) {
        console.error('Error fetching heart count:', error);
    }
}

// Update the counter on page load
updateCounterDisplay();

// Add a click event listener to the button
heartButton.addEventListener('click', async function () {
    try {
        const response = await fetch('api/increment-hearts/', { // Django API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,  // Include the CSRF token in the headers
            },
            body: JSON.stringify({}),  // Send an empty JSON object (or any data you need)
        });
        if (response.ok) {
            const data = await response.json();
            counterElement.textContent = `Hearts Clicked: ${data.totalHearts}`;

            // Create and animate the heart (as before)
            const heart = document.createElement('div');
            heart.classList.add('heart');
            const buttonRect = this.getBoundingClientRect();
            heart.style.left = `${buttonRect.left + buttonRect.width / 2 - 10}px`;
            heart.style.top = `${buttonRect.top}px`;
            document.body.appendChild(heart);
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        } else {
            console.error('Failed to increment heart count');
        }
    } catch (error) {
        console.error('Error incrementing heart count:', error);
    }
});