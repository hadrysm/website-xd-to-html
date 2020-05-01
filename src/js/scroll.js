const viewHeight = window.innerHeight;

const header = document.querySelector('.header');
const projekts = document.querySelectorAll('.projekt__text');
const images = document.querySelectorAll('.projekt__picture');
const boxes = document.querySelectorAll('.box');

export const debounce = (func, wait = 18, immediate = true) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const scroll = () => {
  console.log('scrol');
  const scroll = window.scrollY;

  if (scroll > 100) {
    header.classList.add('header--scroll');
  } else {
    header.classList.remove('header--scroll');
  }

  projekts.forEach(projekt => {
    const distanceFromTop = projekt.getBoundingClientRect().top;

    if (distanceFromTop < viewHeight - 100) {
      projekt.classList.add('fade-in');
    }
  });

  images.forEach(image => {
    const distanceFromTop = image.getBoundingClientRect().top;

    if (distanceFromTop < viewHeight - 100) {
      image.classList.add('fade-in');
      image.style.animationName = 'fadeIn';
    }
  });

  boxes.forEach(box => {
    const distanceFromTop = box.getBoundingClientRect().top;

    if (distanceFromTop < viewHeight - 100) {
      box.classList.add('fade-in');
      box.style.animationName = 'fadeInScale';
      box.style.animationDuration = '.5s';
    }
  });
};
