/**
 * Initialize Google Analytics and GTM.
 *
 * @param trakingId
 * @returns {string}
 */
const initializeAsHTML = (trakingId) => `
    window.dataLayer = window.dataLayer || [];
  
    function gtag() {
      dataLayer.push(arguments);
    }
  
    gtag('js', new Date());
    gtag('config', '${trakingId}', {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: window.document.title
    });
  `;

export default initializeAsHTML;
