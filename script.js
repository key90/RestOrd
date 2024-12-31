let spinButton = document.getElementById("spinButton");
let wheel = document.querySelector(".wheel");
let currentDegree = 0;

spinButton.addEventListener("click", function() {
  let randomDegree = Math.floor(Math.random() * 360) + 3600; // вращение минимум 10 полных оборотов
  currentDegree += randomDegree;

  wheel.style.transition = "transform 4s ease-out"; // плавное вращение
  wheel.style.transform = `rotate(${currentDegree}deg)`;

  // После завершения анимации удаляем transition, чтобы не замедлить повторные вращения
  setTimeout(function() {
    wheel.style.transition = "none";
  }, 4000);
});
