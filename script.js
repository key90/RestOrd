let angle = 0;
const circle = document.getElementById('circle');
const spinBtn = document.getElementById('spinBtn');

spinBtn.addEventListener('click', () => {
    // Увеличиваем угол вращения и вращаем круг
    const randomSpin = Math.floor(Math.random() * 360) + 360;
    angle += randomSpin;
    circle.style.transition = "transform 4s ease-out";
    circle.style.transform = `rotate(${angle}deg)`;

    // Останавливаем плавность анимации, чтобы при следующем клике она не сбивалась
    setTimeout(() => {
        circle.style.transition = "transform 0s";
    }, 4000);
});
