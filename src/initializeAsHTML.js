import convertTrackingIDToGtag from './convertTrackingIDToGtag';

/**
 * Initialize Google Analytics and GTM.
 *
 * @param trakingId
 * @param config
 * @returns {string}
 */
const initializeAsHTML = (trakingId, config = {}) => {
  const {
    trackerTransform, location, page, title,
  } = Object.assign({
    location: window.location.href,
    page: window.location.pathname,
    title: window.document.title,
    trackerTransform: convertTrackingIDToGtag,
  }, config);

  return `
    window.dataLayer = window.dataLayer || [];
  
    function gtag() {
      dataLayer.push(arguments);
    }
  
    gtag('js', new Date());
    gtag('config', '${trakingId}', {
      page_location: '${location}',
      page_path: '${page}',
      page_title: '${title}'
    });
  `;
};

export default initializeAsHTML;
