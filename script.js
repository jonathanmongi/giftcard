// Floating shapes
function createShape(type) {
  const el = document.createElement('div');
  el.className = type;
  el.style.left = Math.random() * 100 + 'vw';
  el.style.animationDuration = (Math.random() * 5 + 3) + 's';
  el.style.transform = `scale(${Math.random() * 1.2 + 0.4})`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 8000);
}

function spawnShapes() {
  const types = ['heart', 'star'];
  setInterval(() => {
    const randomType = types[Math.floor(Math.random() * types.length)];
    createShape(randomType);
  }, 300);
}
spawnShapes();

// Reveal the message box
function revealMessage() {
  const heartBtn = document.querySelector('.center-heart');
  const messageBox = document.getElementById('scroll-letter');
  const loveBtn = document.getElementById('loveBtn');

  heartBtn.style.display = 'none';
  messageBox.classList.remove('hidden');
  loveBtn.classList.remove('hidden');
  launchConfetti();
}

function showLoveAnimation() {
  for (let i = 0; i < 30; i++) {
    const love = document.createElement('div');
    love.className = 'floating-love';
    love.innerText = "I ❤ You Bestie!";
    love.style.left = Math.random() * 90 + 'vw';
    love.style.top = (Math.random() * 80 + 10) + 'vh';
    love.style.fontSize = (Math.random() * 1 + 1) + 'em';
    document.body.appendChild(love);
    setTimeout(() => love.remove(), 4000);
  }
}


function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

function getRandomColor() {
  const colors = ['#ff69b4', '#ffd700', '#ffb6c1', '#00ffff', '#ffa07a', '#adff2f'];
  return colors[Math.floor(Math.random() * colors.length)];
}
