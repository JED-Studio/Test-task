document.addEventListener('DOMContentLoaded', function () {
  const items = [
    {
      "id": 1,
      "title": "Dota 2 is a multiplayer online battle arena by Valve...",
      "title1": "T,fy",
      "imageUrl": "../images/svg/icon 1.svg",
      "imageUrl1": "../images/svg/icon 2.svg",
      "imageUrl2": "../images/svg/icon 3.svg",
    },
    
  ];

  const sectionJob = document.getElementById('section_jobID');

  
  function createJobPost(item) {
    
    const jobPost = document.createElement('div');
    jobPost.className = 'section_job__post';
    jobPost.style.cssText = 'padding: 30px 45px; display: flex; justify-content: space-between; align-items: center;'; 

    
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
    title1.style.cssText = 'margin-left: 20px; font-weight: 700; font-size: 28px; color: white;';
    title1.textContent = item.title1;
    jobImg1.appendChild(title1);
    
    const jobImg2 = document.createElement('div');
    jobImg2.className = 'section_job__plus';
    
    const image2 = document.createElement('img');
    image2.src = item.imageUrl2;
    image2.alt = 'Иконка';
    jobImg2.appendChild(image2);
    

    jobIcon.appendChild(jobImg);
    jobIcon.appendChild(jobImg1);
    jobPost.appendChild(jobIcon);
    jobPost.appendChild(jobImg2);
    

    return jobPost;
  }

  
  items.forEach(item => {
    const jobPostElement = createJobPost(item);
    sectionJob.appendChild(jobPostElement);
  });
});