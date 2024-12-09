// Typing Animation Script
const messageBox = document.getElementById("message");
const messages = [
    "Happy Birthday!",
    "Wishing you a day full of joy, laughter, and surprises. 🎉\nYou are truly special, and I hope this year brings you endless happiness and success! 💖🥳",
    "Happy Birthday! Burger Bachhi ❤" // Add this final message
];
let messageIndex = 0; // Tracks which message to display
let charIndex = 0;    // Tracks current character being typed

// Function to animate typing
function typeMessage() {
    if (messageIndex < messages.length) {
        // Add one character at a time
        if (charIndex < messages[messageIndex].length) {
            messageBox.textContent += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, 50); // Speed of typing animation
        } else {
            // After the message is typed, stop typing (leave it as it is)
            if (messageIndex === messages.length - 1) {
                showHeart();  // Show heart after typing the last message
                startConfetti();  // Start confetti after typing ends
                return; // Leave the message as it is after typing
            }
            // Pause before starting the next message
            setTimeout(() => {
                charIndex = 0;
                messageIndex++;
                messageBox.textContent += "\n";  // Start the next message from a new line
                typeMessage();
            }, 2000);
        }
    }
}

// Start typing animation on window load
window.onload = () => {
    typeMessage();
};

// Confetti Effect Function
// Confetti Effect Function - Fixed immediate fall
function startConfetti() {
    const numConfetti = 100; // Number of confetti pieces
    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random horizontal position (left)
        confetti.style.left = `${Math.random() * 100}vw`;
        
        // Random delay for animation to make each confetti fall at a different time
        confetti.style.animationDelay = `${Math.random() * 2}s`;

        // Randomize the x-axis positions using --random-x to make them fall from different places
        confetti.style.setProperty('--random-x', Math.random());

        document.body.appendChild(confetti);
    }
}


// Heart Pop-Out Effect Function
function showHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️'; // Heart emoji with text inside
    heart.style.fontSize = "90px"; // Bigger size for the heart emoji
    heart.onclick = () => {
        window.location.href = 'birthday-wishes.html';  // Redirect to the new page
    };
    document.body.appendChild(heart);
}

// JavaScript for Cursor Trail Effect with Delay
let lastTrailTime = 0; // Keeps track of the last trail time to control speed

document.addEventListener('mousemove', function(event) {
    const now = new Date().getTime();
    
    // Delay to prevent the trail from being too fast
    if (now - lastTrailTime < 50) { // Adjust the delay (in ms) here to slow down the trail
        return;
    }
    lastTrailTime = now;
    
    // Create a new "Happy Birthday!" text trail element
    const trailText = document.createElement('div');
    trailText.classList.add('cursor-trail');
    
    // Set the content of the text trail
    trailText.textContent = "Happy Birthday! ❤";
    
    // Position the text trail at the cursor location
    trailText.style.left = `${event.pageX}px`;
    trailText.style.top = `${event.pageY}px`;
    
    // Append the trail element to the body
    document.body.appendChild(trailText);
    
    // Remove the trail element after the animation is complete
    setTimeout(() => {
        trailText.remove();
    }, 2000); // This keeps the trail visible for 2 seconds (slower fading effect)
});
