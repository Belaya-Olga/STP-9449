document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.querySelector('[data-scroll-button]');
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop < lastScrollTop && currentScrollTop > 0) {
      scrollToTopBtn.setAttribute('data-visible', 'true');
    } else {
      scrollToTopBtn.setAttribute('data-visible', 'false');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', handleScroll);
  scrollToTopBtn.addEventListener('click', scrollToTop);

  handleScroll();
});
