document.addEventListener('DOMContentLoaded', () => {
  const cookieConsentBanner = document.getElementById('cookieWrapper');
  const acceptCookiesBtn = document.getElementById('acceptCookies');
  const declineCookiesBtn = document.getElementById('declineCookies');

  const COOKIE_CONSENT_KEY = 'cookie_status';

  function showCookieBanner() {
    cookieConsentBanner.classList.add('show');
  }

  function hideCookieBanner() {
    cookieConsentBanner.classList.remove('show');
  }

  const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);

  if (consentStatus === null) {
    showCookieBanner();
  } else {
    hideCookieBanner();
    if (consentStatus === 'declined') {
    } else if (consentStatus === 'accepted') {
    }
  }

  if (acceptCookiesBtn) {
    acceptCookiesBtn.addEventListener('click', () => {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
      hideCookieBanner();
    });
  }

  if (declineCookiesBtn) {
    declineCookiesBtn.addEventListener('click', () => {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
      hideCookieBanner();
    });
  }
});
