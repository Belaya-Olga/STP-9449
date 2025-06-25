document.addEventListener('DOMContentLoaded', () => {
  const detailsList = document.querySelectorAll('[data-faq-content] details');
  const scrollContainer = document.querySelector('[data-faq-wrapper]');

  detailsList.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        detailsList.forEach(el => {
          if (el !== detail && el.open) el.open = false;
        });

        const detailTop = detail.getBoundingClientRect().top;
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const offset = detailTop - containerTop;

        scrollContainer.scrollTo({
          top: scrollContainer.scrollTop + offset,
          behavior: 'smooth',
        });
      }
    });
  });
});
