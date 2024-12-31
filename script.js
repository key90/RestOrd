let rotation = 0;

function rotateCircle() {
    rotation += 45; // Увеличиваем угол на 45 градусов каждый раз при клике
    document.querySelector('.circle').style.transform = `rotate(${rotation}deg)`; 
    setTimeout(rotateCircle, 100); // Снова вызываем функцию, чтобы круг продолжал крутиться
}
