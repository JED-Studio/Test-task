document.addEventListener('DOMContentLoaded', function () {
  const items = [
    {
      "id": 1,
      "category": "construction",
      "title": "Прораб",
      "title1": "ОТ 100000 РУБ",
      "imageUrl": "images/svg/icon 1.svg",
      "imageUrl1": "images/svg/icon 2.svg",
      "imageUrl2": "images/svg/icon 3.svg",
      "h3": [
        ["Task 1a",],
        ["Responsibility 1a"],
        ["Requirement 1a",]
      ],
      "li": [
        ["Task 1a", "Task 1b", "Task 1c"],
        ["Responsibility 1a", "Responsibility 1b", "Responsibility 1c"],
        ["Requirement 1a", "Requirement 1b", "Requirement 1c"]
      ]

    },
    {
      "id": 2,
      "category": "construction",
      "title": "Повар",
      "title1": "ОТ 100000 РУБ",
      "imageUrl": "images/svg/icon 1.svg",
      "imageUrl1": "images/svg/icon 2.svg",
      "imageUrl2": "images/svg/icon 3.svg",
      "h3": [
        ["Task 1a",],
        ["Responsibility 1a"],
        ["Requirement 1a",]
      ],

      "li": [
        ["порт"],
        ["Responsibility 1a", "Responsibility 1b", "Responsibility 1c"],
        ["Requirement 1a", "Requirement 1b", "Requirement 1c"]
      ]
    },
    
    {
      "id": 2,
      "category": "office",
      "title": "Доктор",
      "title1": "ОТ 100000 РУБ",
      "imageUrl": "images/svg/icon 1.svg",
      "imageUrl1": "images/svg/icon 2.svg",
      "imageUrl2": "images/svg/icon 3.svg",
      "h3": [
        ["Task 1a",],
        ["Responsibility 1a"],
        ["Requirement 1a",]
      ],

      "li": [
        ["пашел ты"],
        ["Responsibility 1a", "Responsibility 1b", "Responsibility 1c"],
        ["Requirement 1a", "Requirement 1b", "Requirement 1c"]
      ]
    },
    
    {
      "id": 2,
      "category": "office",
      "title": "Менеджер",
      "title1": "ОТ 100000 РУБ",
      "imageUrl": "images/svg/icon 1.svg",
      "imageUrl1": "images/svg/icon 2.svg",
      "imageUrl2": "images/svg/icon 3.svg",
      "h3": [
        ["Task 1a",],
        ["Responsibility 1a"],
        ["Requirement 1a",]
      ],

      "li": [
        ["ютуб"],
        ["Responsibility 1a", "Responsibility 1b", "Responsibility 1c"],
        ["Requirement 1a", "Requirement 1b", "Requirement 1c"]
      ]
    },
    
    {
      "id": 2,
      "category": "finance",
      "title": "Директор",
      "title1": "ОТ 100000 РУБ",
      "imageUrl": "images/svg/icon 1.svg",
      "imageUrl1": "images/svg/icon 2.svg",
      "imageUrl2": "images/svg/icon 3.svg",
      "h3": [
        ["Task 1a",],
        ["Responsibility 1a"],
        ["Requirement 1a",]
      ],

      "li": [
        ["Россия"],
        ["Responsibility 1a", "Responsibility 1b", "Responsibility 1c"],
        ["Requirement 1a", "Requirement 1b", "Requirement 1c"]
      ]
    },
    
    {
      "id": 2,
      "category": "finance",
      "title": "Автомеханик",
      "title1": "ОТ 100000 РУБ",
      "imageUrl": "images/svg/icon 1.svg",
      "imageUrl1": "images/svg/icon 2.svg",
      "imageUrl2": "images/svg/icon 3.svg",
      "h3": [
        ["Task 1a",],
        ["Responsibility 1a"],
        ["Requirement 1a",]
      ],

      "li": [
        ["система"],
        ["Responsibility 1a", "Responsibility 1b", "Responsibility 1c"],
        ["Requirement 1a", "Requirement 1b", "Requirement 1c"]
      ]
    },
    
    {
      "id": 2,
      "category": "sales",
      "title": "Банкир",
      "title1": "ОТ 100000 РУБ",
      "imageUrl": "images/svg/icon 1.svg",
      "imageUrl1": "images/svg/icon 2.svg",
      "imageUrl2": "images/svg/icon 3.svg",
      "h3": [
        ["Task 1a",],
        ["Responsibility 1a"],
        ["Requirement 1a",]
      ],

      "li": [
        ["дом"],
        ["Responsibility 1a", "Responsibility 1b", "Responsibility 1c"],
        ["Requirement 1a", "Requirement 1b", "Requirement 1c"]
      ]
    },
    {
      "id": 2,
      "category": "sales",
      "title": "Строитель",
      "title1": "ОТ 100000 РУБ",
      "imageUrl": "images/svg/icon 1.svg",
      "imageUrl1": "images/svg/icon 2.svg",
      "imageUrl2": "images/svg/icon 3.svg",
      "h3": [
        ["Task 1a",],
        ["Responsibility 1a"],
        ["Requirement 1a",]
      ],

      "li": [
        ["просто"],
        ["Responsibility 1a", "Responsibility 1b", "Responsibility 1c"],
        ["Requirement 1a", "Requirement 1b", "Requirement 1c"]
      ]
    },
    {
      "id": 2,
      "category": "freelance",
      "title": "Моряк",
      "title1": "ОТ 100000 РУБ",
      "imageUrl": "images/svg/icon 1.svg",
      "imageUrl1": "images/svg/icon 2.svg",
      "imageUrl2": "images/svg/icon 3.svg",
      "h3": [
        ["Task 1a",],
        ["Responsibility 1a"],
        ["Requirement 1a",]
      ],

      "li": [
        ["лодка"],
        ["Responsibility 1a", "Responsibility 1b", "Responsibility 1c"],
        ["Requirement 1a", "Requirement 1b", "Requirement 1c"]
      ]
    },
    {
      "id": 2,
      "category": "freelance",
      "title": "Системный администратор",
      "title1": "ОТ 100000 РУБ",
      "imageUrl": "images/svg/icon 1.svg",
      "imageUrl1": "images/svg/icon 2.svg",
      "imageUrl2": "images/svg/icon 3.svg",
      "h3": [
        ["Task 1a",],
        ["Responsibility 1a"],
        ["Requirement 1a",]
      ],

      "li": [
        ["рок"],
        ["Responsibility 1a", "Responsibility 1b", "Responsibility 1c"],
        ["Requirement 1a", "Requirement 1b", "Requirement 1c"]
      ]
    },
    
    
  ];

  const sectionJob = document.getElementById('section_jobID');
  
  
 
  function createJobPost(item) {
    const jobPost = document.createElement('div');
    jobPost.className = 'section_job__post';
    jobPost.id = "section_job__post"; 

    jobPost.style.cssText = 'padding: 30px 45px; align-items: center; overflow: hidden; height: 160px; transition: height 0.3s ease;';

    const jobContainer = document.createElement('div');
    jobContainer.className = 'section_job__container';
    jobContainer.style.cssText = 'display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 745px;';

    const jobIcon = document.createElement('div');
    jobIcon.className = 'section_job__icon';

    const jobImg = document.createElement('div');
    jobImg.className = 'section_job__img';
    jobImg.style.cssText = 'display: flex; align-items: center;';

    const jobImg1 = document.createElement('div');
    jobImg1.className = 'section_job__img';
    jobImg1.style.cssText = 'display: flex; align-items: center; margin-top: 20px;';

    const image = document.createElement('img');
    image.src = item.imageUrl;
    image.alt = 'Иконка';
    jobImg.appendChild(image);

    const image1 = document.createElement('img');
    image1.src = item.imageUrl1;
    image1.alt = 'Иконка';
    jobImg1.appendChild(image1);

    const title = document.createElement('p');
    title.style.cssText = 'margin-left: 20px; font-weight: 700; font-size: 28px; color: white;';
    title.textContent = item.title;
    jobImg.appendChild(title);

    const title1 = document.createElement('p');
    title1.style.cssText = 'margin-left: 20px; font-weight: 700; font-size: 28px; color: #21A038;';
    title1.textContent = item.title1;
    jobImg1.appendChild(title1);

    const jobImg2 = document.createElement('div');
    jobImg2.className = 'section_job__plus';

    const image2 = document.createElement('img');
    image2.id = "section_job__img"; 
    image2.src = item.imageUrl2;
    image2.alt = 'Иконка';
    jobImg2.appendChild(image2);

    jobIcon.appendChild(jobImg);
    jobIcon.appendChild(jobImg1);

    jobContainer.appendChild(jobIcon);
    jobContainer.appendChild(jobImg2);

    const textContainer = document.createElement('div');
    textContainer.className = 'section_job__text-container';
    textContainer.style.cssText = 'color: white; margin-top: 20px; ';

   item.h3.forEach((h3Array, index) => {
    h3Array.forEach(h3Text => {
        const h3 = document.createElement('h3');
        h3.textContent = h3Text;
        const ul = document.createElement('ul');
        item.li[index].forEach(liText => {
            const li = document.createElement('li');
            li.textContent = liText;
            ul.appendChild(li);
        });
        textContainer.appendChild(h3);
        textContainer.appendChild(ul);
    });
});


    jobPost.appendChild(jobContainer);
    jobPost.appendChild(textContainer);

    image2.style.transition = 'transform 0.2s'; // Добавить переход для вращения

    image2.onclick = function() {
      // Найти родительский элемент jobPost
      const jobPost = this.closest('.section_job__post');
      
      if (jobPost.style.height === '160px' || jobPost.style.height === '') {
        // Установить высоту на 'auto', чтобы контент определил высоту
        jobPost.style.height = 'auto';
        const autoHeight = jobPost.scrollHeight + 'px';
        jobPost.style.height = '160px';
        setTimeout(() => {
          jobPost.style.height = autoHeight;
        }, 10);
        this.style.transform = 'rotate(45deg)';
      } else {
        // Устанавливаем конкретную высоту для анимации
        jobPost.style.height = '160px';
        this.style.transform = 'rotate(0deg)';
      }
    };
    
    
  

    return jobPost;
}

  function showCategory(category) {
    sectionJob.innerHTML = '';
    const filteredItems = items.filter(item => item.category === category);
    filteredItems.forEach(item => {
      const jobPostElement = createJobPost(item);
      sectionJob.appendChild(jobPostElement);
    });
  }

  document.querySelectorAll('.section_job_openings__link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const category = this.getAttribute('data-category');
      showCategory(category);
    });
  });

  showCategory('construction');
});
