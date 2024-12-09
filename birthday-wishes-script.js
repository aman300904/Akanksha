// Select the message popup element
const messagePopup = document.getElementById('message-popup');
const bigStar = document.querySelector('.big-star');
const bigMessage = document.querySelector('.big-message');


// Array of unique messages for each star
const starMessages = [
    "You are amazing!",
    "Keep shining bright!",
    "You deserve all the happiness!",
    "Have a magical day!",
    "Wishing you endless joy!",
    "May all your dreams come true!",
    "The world is better with you in it!",
    "Here's to another year of greatness!",
    "Make a wish, it's your day!",
    "You're one in a million!",
    "Always dream big!",
    "Your smile is your superpower!",
    "Keep spreading love and kindness!",
    "Believe in yourself, always!",
    "Life is beautiful, enjoy it!",
    "Stay strong and keep glowing!",
    "Let your light shine every day!",
    "Celebrate your uniqueness!",
    "You are destined for greatness!",
    "Your positivity lights up the world!"
];

// Function to generate random stars
function createRandomStars() {
    const starsContainer = document.querySelector('.stars-container');
    
    // Generate a random number of stars (15-30 stars)
    const numStars = Math.floor(Math.random() * 16) + 15;

    // Store the positions to avoid overlap
    const positions = [];

    for (let i = 0; i < numStars; i++) {
        // Create a new star
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Randomize star size
        const randomSize = Math.floor(Math.random() * 40) + 50; // Random size between 50px and 90px
        star.style.width = `${randomSize}px`;
        star.style.height = `${randomSize}px`;

        // Randomize star position with collision avoidance
        let randomX, randomY, overlap;
        do {
            overlap = false;
            randomX = Math.floor(Math.random() * (window.innerWidth - randomSize));
            randomY = Math.floor(Math.random() * (window.innerHeight - randomSize));
            
            // Check if the new star overlaps with any existing star
            for (let j = 0; j < positions.length; j++) {
                const [x, y, size] = positions[j];
                const distance = Math.sqrt(Math.pow(x - randomX, 2) + Math.pow(y - randomY, 2));
                if (distance < size + randomSize) {
                    overlap = true;
                    break;
                }
            }
        } while (overlap); // Retry if there's overlap

        // Store the position of the star to avoid future overlaps
        positions.push([randomX, randomY, randomSize]);

        // Set the star's position
        star.style.left = `${randomX}px`;
        star.style.top = `${randomY}px`;

        // Assign a unique message to each star
        const message = starMessages[i % starMessages.length]; // Loop through messages if more stars than messages
        star.setAttribute('data-message', message);

        // Add the star to the container
        starsContainer.appendChild(star);

        // Add click event listener to show message
        star.addEventListener('click', () => {
            const rect = star.getBoundingClientRect();
            messagePopup.style.left = `${rect.left + window.scrollX + 20}px`;
            messagePopup.style.top = `${rect.top + window.scrollY - 10}px`;

            // Display message
            messagePopup.textContent = message;
            messagePopup.classList.add('show');

            // Hide message after 3 seconds
            setTimeout(() => {
                messagePopup.classList.remove('show');
            }, 3000);
        });
    }
}

// Handle scroll event to animate the big star and disappear the initial stars
window.addEventListener('scroll', () => {
    // Move initial stars upwards on scroll
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const rect = star.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            star.style.transform = `translateY(-${window.scrollY}px)`;
        }
    });

    // Gradually reveal the big star after scroll
    // Gradually reveal the big star after scroll
if (window.scrollY > 0.5) {
    bigStar.classList.add('reveal');
    bigMessage.style.display = "block";

    // Set custom message for the big star
    // Set the message content for the big star
bigMessage.textContent = "Happy Birthday to you.\nTum mai bata hi diya that I love you. Tum bohot pyaari actually matlab Jo mujhe pasand hai ki tum mature bhi ho aur saath mai childish bhi ho yeh kaafi fascinating hai do different character ek saath ek hi mai is unique.\nTum strong bhi ho expressive bhi kind bhi ho the things that I admire about you.\nTumhare ambitious ho aur focused ho jo mujhe motivate Kiya honestly iske ke liye bohot respect hai.\nMere liye tum pari jaisi ho.\nIss bar nahi lekin pata nahi kab mai tumhara b'day saath celebrate karna chahunga";

} else {
    bigStar.classList.remove('reveal');
    bigMessage.style.display = "none";
}

});


// Initialize stars when the page loads
window.addEventListener('load', createRandomStars);
