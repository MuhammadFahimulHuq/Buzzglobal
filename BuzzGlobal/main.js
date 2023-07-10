

var copyAds = document.querySelector('.slider').cloneNode(true);
document.querySelector('.sponsored-ad').appendChild(copyAds);

var copyBands = document.querySelector('.slider-right').cloneNode(true);
document.querySelector('.bands-ads').appendChild(copyBands);



const carousel = document.querySelector('.carousel');
const carousel_subtitle = document.querySelector('.carousel-subtitle');
const subtitleItems = document.querySelectorAll('.subtitle-item');
let currentIndex = 0;

function showItem(index) {
  const itemWidth = carousel.offsetWidth / 3;
  carousel.style.transform = `translateX(-${itemWidth * index}px)`;
  const itemWidth2 = carousel_subtitle.offsetWidth /7;
  carousel_subtitle.style.transform = `translateX(-${itemWidth2 * index}px)`;
  subtitleItems.forEach(item => item.classList.remove('active'));
  subtitleItems[index].classList.add('active');
}

function goToPrevItem() {
  currentIndex = (currentIndex === 0) ? 6 : currentIndex - 1;
  showItem(currentIndex);
}

function goToNextItem() {
  currentIndex = (currentIndex === 6) ? 0 : currentIndex + 1;
  showItem(currentIndex);
}

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', goToPrevItem);
nextButton.addEventListener('click', goToNextItem);



const carouselTestimonial = document.querySelector('.testimonial-carousel');
let currentTestimonialIndex = 0;

function showItemTestimonial(index) {
  const itemWidth = carouselTestimonial.offsetWidth / 3;
  carouselTestimonial.style.transform = `translateX(-${itemWidth * index}px)`;
}

function goToPrevItemTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex === 0) ? 4 : currentTestimonialIndex - 1;
  showItemTestimonial(currentTestimonialIndex);
}

function goToNextItemTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex === 4) ? 0 : currentTestimonialIndex + 1;
  showItemTestimonial(currentTestimonialIndex);
}

const prevButtonTestimonial = document.getElementById('prevButtonTestimonial');
const nextButtonTestimonial = document.getElementById('nextButtonTestimonial');

prevButtonTestimonial.addEventListener('click', goToPrevItemTestimonial);
nextButtonTestimonial.addEventListener('click', goToNextItemTestimonial);
