// jQuery interactions + Bootstrap 5 carousel and responsive navbar.
$(function () {
  // Initialize the Bootstrap hero carousel.
  const carouselElement = document.getElementById('jewelryCarousel');
  if (carouselElement && window.bootstrap) {
    bootstrap.Carousel.getOrCreateInstance(carouselElement, {
      interval: 5000,
      ride: 'carousel',
      pause: false,
      touch: true,
      wrap: true
    });
  }

  // Smooth-scroll to sections when a navigation link is selected.
  $('a[href^="#"]').on('click', function (event) {
    const target = $(this).attr('href');
    if (target && target.length > 1 && $(target).length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(target).offset().top - 12
      }, 450);

      // Close the mobile Bootstrap navbar after selecting a link.
      const nav = $('#siteNav');
      if (nav.hasClass('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav[0]).hide();
      }
    }
  });

  // Newsletter form feedback.
  $('#subscribeForm').on('submit', function (event) {
    event.preventDefault();
    const email = $('#emailAddress').val().trim();
    if (!email) return;

    $('#subscribeMessage').text('Thank you for subscribing!');
    this.reset();
  });
});