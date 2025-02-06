const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');
const questionElement = document.getElementById('question'); // Target the H1
const consoleBox = document.querySelector('.console'); // Keeps "No" button inside

const question = "Will You Be My Valentine?"; // Text to type
let index = 0;

// Retro text animation (Typewriter effect)
function typeText() {
  if (index < question.length) {
    questionElement.textContent += question.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust typing speed here
  }
}

// Start typing effect when the page loads
window.onload = typeText;

yesBtn.addEventListener('click', () => {
  response.textContent = "Correct answer!";

  // Create multiple hearts
  for (let i = 0; i < 15; i++) { // Number of hearts
    setTimeout(() => {
      let heart = document.createElement('img');
      heart.src = 'heart.png'; // Ensure this file exists in your project folder
      heart.classList.add('heart');

      let x = Math.random() * window.innerWidth; // Random horizontal position
      let y = window.innerHeight; // Start from bottom

      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 3000); // Remove after animation
    }, i * 200); // Delay each heart slightly for effect
  }
});

// Make the "No" button dodge when hovered over
noBtn.addEventListener('mouseenter', () => {
  let maxX = consoleBox.clientWidth - noBtn.clientWidth;
  let maxY = consoleBox.clientHeight - noBtn.clientHeight;

  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  noBtn.style.position = 'relative';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
