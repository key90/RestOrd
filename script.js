const circle = document.getElementById('circle');
let isSpinning = false;

circle.addEventListener('click', () => {
  if (!isSpinning) {
    isSpinning = true;
    spinCircle();
  }
});

function spinCircle() {
  let rotation = 0;

  setInterval(() => {
    rotation += 10;
    circle.style.transform = `rotate(${rotation}deg)`;
  }, 100);
}
