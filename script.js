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

  // Добавляем класс для анимации вращения
  circle.style.animation = "rotateCircle 10s linear infinite";
}
