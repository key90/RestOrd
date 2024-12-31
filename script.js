document.getElementById('spinButton').addEventListener('click', function() {
    let circle = document.getElementById('circle');
    let currentRotation = 0;

    // Функция для бесконечного вращения круга
    function spin() {
        currentRotation += 5;  // Увеличиваем угол поворота на 5 градусов
        circle.style.transform = `rotate(${currentRotation}deg)`;
        requestAnimationFrame(spin);  // Рекурсивный вызов для непрерывного вращения
    }

    spin();  // Запускаем вращение
});
