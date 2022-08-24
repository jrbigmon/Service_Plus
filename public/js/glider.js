window.addEventListener('load', () => {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
})