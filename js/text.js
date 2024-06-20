
const sectionJob = document.getElementById('section_jobID')

// Функция для создания HTML-разметки карточки
function createJobPost(item) {
  // Создаем элемент карточки
  const jobPost = document.createElement('div');
  jobPost.className = 'section_job__post';
  jobPost.style.cssText = 'padding: 30px 45px; display: flex; justify-content: space-between; align-items: center;';

  // Создаем контейнер для иконки и заголовка
  const jobIcon = document.createElement('div');
  jobIcon.className = 'section_job__icon';

  // Создаем элемент для изображения и заголовка
  const jobImg = document.createElement('div');
  jobImg.className = 'section_job__img';
  jobImg.style.cssText = 'display: flex; align-items: center;';

  // Добавляем изображение
  const image = document.createElement('img');
  image.src = item.imageUrl;
  image.alt = 'Иконка'; // Альтернативный текст
  jobImg.appendChild(image);

  // Добавляем заголовок
  const title = document.createElement('p');
  title.style.cssText = 'margin-left: 20px; font-weight: 700; font-size: 28px; color: white;';
  title.textContent = item.title;
  jobImg.appendChild(title);

 
  

  return jobPost;
}

// Перебираем массив items и создаем карточку для каждого элемента
items.forEach(item => {
  const jobPostElement = createJobPost(item);
  sectionJob.appendChild(jobPostElement);
});



const items = [
    {
        "id": 1,
        "title": " Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "imageUrl": "/sneakers/sneakers-1.jpg"
    },
    {
        "id": 2,
        "title": "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        
        "image": "/sneakers/sneakers-2.jpg"
    },
    
]