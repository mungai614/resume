// Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleBtn.textContent = document.body.classList.contains('light') ? 'Dark Mode' : 'Light Mode';
});

// Typing Animation
const typingEl = document.getElementById('typing');
let text = typingEl.textContent;
typingEl.textContent = '';
let i = 0;
function typeWriter() {
  if (i < text.length) {
    typingEl.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
