document.addEventListener('DOMContentLoaded', () => {
  const detailsList = document.querySelectorAll('.faq-content details');
  const scrollContainer = document.querySelector('.faq-wrapper');

  detailsList.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        detailsList.forEach(el => {
          if (el !== detail && el.open) el.open = false;
        });

        const detailRect = detail.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();

        if (
          detailRect.top < containerRect.top ||
          detailRect.bottom > containerRect.bottom
        ) {
          const scrollTop = scrollContainer.scrollTop;
          const offset = detailRect.top - containerRect.top;
          scrollContainer.scrollTo({
            top: scrollTop + offset,
            behavior: 'smooth',
          });
        }
      }
    });
  });
});
