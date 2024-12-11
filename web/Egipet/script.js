// Инициализация AOS для анимации
AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true
});

// Инициализация карты
var map = L.map('map').setView([25.7617, 32.7788], 6); // Центр карты: Египет

// Добавление tile layer (слой карты)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Добавление маркеров на карту
var marker1 = L.marker([29.9792, 31.1342]).addTo(map); // Пирамида Хеопса
marker1.bindPopup("<b>Пирамида Хеопса</b><br>Одна из самых известных и величественных пирамид в Гизе.");

var marker2 = L.marker([25.7156, 32.6072]).addTo(map); // Карнак
marker2.bindPopup("<b>Карнак</b><br>Древний храмовый комплекс в Луксоре, центр религии и власти Египта.");

var marker3 = L.marker([25.5333, 32.6072]).addTo(map); // Абидос
marker3.bindPopup("<b>Абидос</b><br>Святое место, где находились могилы многих фараонов и храм Осириса.");

// Инициализация слайдера
$('.slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800
});

// Получаем все изображения
var images = document.querySelectorAll('.architecture-image');
var modal = document.getElementById('imageModal');
var modalImg = document.getElementById('modalImage');
var captionText = document.getElementById('caption');
var closeBtn = document.getElementsByClassName('close')[0];

// Открытие модального окна при клике на изображение
images.forEach(function(image) {
image.onclick = function() {
modal.style.display = 'block';
modalImg.src = this.src;  // Устанавливаем источник изображения в модальном окне
captionText.innerHTML = this.alt;  // Устанавливаем текст в подписях
}
});

// Закрытие модального окна
closeBtn.onclick = function() {
modal.style.display = 'none';
}