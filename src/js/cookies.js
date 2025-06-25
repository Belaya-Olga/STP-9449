document.addEventListener('DOMContentLoaded', () => {
  const cookieConsentBanner = document.querySelector('[data-cookie-wrapper]');
  const acceptCookiesBtn = document.querySelector('[data-accept-cookies]');
  const declineCookiesBtn = document.querySelector('[data-decline-cookies]');

  const COOKIE_CONSENT_KEY = 'cookie_status';

  function showCookieBanner() {
    cookieConsentBanner?.setAttribute('data-visible', 'true');
  }

  function hideCookieBanner() {
    cookieConsentBanner?.setAttribute('data-visible', 'false');
  }

  const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);

  if (consentStatus === null) {
    showCookieBanner();
  } else {
    hideCookieBanner();
  }

  acceptCookiesBtn?.addEventListener('click', () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    hideCookieBanner();
  });

  declineCookiesBtn?.addEventListener('click', () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    hideCookieBanner();
  });
});
