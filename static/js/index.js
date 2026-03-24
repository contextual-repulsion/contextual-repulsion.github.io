function initImageCarousels() {
  $('.image-carousel').each(function() {
    var $carousel = $(this);
    var $track = $carousel.find('.carousel-track');
    var $slides = $carousel.find('.carousel-slide');
    var totalSlides = $slides.length;
    var currentIndex = 0;

    function goTo(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;
      $track.css('transform', 'translateX(-' + (currentIndex * 100) + '%)');
      $carousel.find('.carousel-dot').removeClass('is-active').eq(currentIndex).addClass('is-active');
      var caption = $slides.eq(currentIndex).find('img').attr('alt');
      $carousel.find('.carousel-caption').text('"' + caption + '"');
    }

    var $dotsContainer = $carousel.find('.carousel-dots');
    for (var i = 0; i < totalSlides; i++) {
      $dotsContainer.append('<button type="button" class="carousel-dot" data-index="' + i + '" aria-label="Slide ' + (i + 1) + '"></button>');
    }

    $carousel.find('.carousel-nav.carousel-prev').on('click', function() {
      goTo(currentIndex - 1);
    });
    $carousel.find('.carousel-nav.carousel-next').on('click', function() {
      goTo(currentIndex + 1);
    });
    $carousel.find('.carousel-dots').on('click', '.carousel-dot', function() {
      goTo(parseInt($(this).attr('data-index'), 10));
    });

    goTo(0);
  });
}

$(document).ready(function() {
  initImageCarousels();

  $('.navbar-burger').click(function() {
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });
});
