document.addEventListener('DOMContentLoaded', function () {


let isExpanded = false; // Флаг для отслеживания текущего состояния высоты
    let isRotated = false; // Флаг для отслеживания состояния вращения кнопки

    function clickButton() {
      const div = document.getElementById('section_job__post');
      const img = document.getElementById('section_job__img');
      
      // Изменение высоты блока
      if (!isExpanded) {
        div.style.height = '300px';
        isExpanded = true;
      } else {
        div.style.height = '160px';
        isExpanded = false;
      }

      // Вращение изображения внутри кнопки
      if (!isRotated) {
        img.classList.add('rotated');
        isRotated = true;
      } else {
        img.classList.remove('rotated');
        isRotated = false;
      }
    }

});