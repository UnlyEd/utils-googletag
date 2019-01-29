import { convertTrackingIDToGTag } from './convertTrackingIDToGtag';

/**
 * Initialize Google Analytics and GTM.
 *
 * @param trakingId
 * @param config
 * @returns {string}
 */
export const initializeAsHTML = (trakingId, config = {}) => {
  const {
    trackerTransform, location, page, title,
  } = Object.assign({
    location: window.location.href,
    page: window.location.pathname,
    title: window.document.title,
    trackerTransform: convertTrackingIDToGTag,
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
