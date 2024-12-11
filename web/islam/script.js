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
