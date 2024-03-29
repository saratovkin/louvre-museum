function changeSlide() {

  slideNum = (slideNum + 6) % 6;

  let image1 = document.querySelectorAll('.tickets-slideshow')[0];
  let image2 = document.querySelectorAll('.tickets-slideshow')[1];
  
  image1.classList.add('hide');
  image2.classList.add('show');

  image1.addEventListener('animationend', function () {
    this.classList.remove('hide');
    this.setAttribute('src', `assets/img/tickets/tickets${slideNum - 1}.webp`);
  });

  image2.addEventListener('animationend', function () {
    this.classList.remove('show');
    this.setAttribute('src', `assets/img/tickets/tickets${slideNum}.webp`);
  });
  slideNum++
}

let slideNum = 1;
setInterval(function () { changeSlide(); }, 5000);