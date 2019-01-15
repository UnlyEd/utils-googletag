'use strict';

/**
 * Convert a given tracking id (like "UA-XXXXXXXX-X") to a valid GTAG string.
 *
 * @example _convertTrackingIDToGTag("UA-XXXXXXXX-X")
 * => "gtag_UA_XXXXXXXX_X"
 *
 * @param trackingId
 * @returns {string}
 */
const convertTrackingIDToGTag = (trackingId) => {
  const trakingCleanedId = trackingId.replace(new RegExp('-', 'g'), '_');
  return `gtag_${trakingCleanedId}`;
};

/**
 * Send a page view by using the traditional window.ga function instead of window.gtag
 *
 * XXX This relies on gtag internal behavior, which creates a dynamic tracker based on the GA_TRACKING_ID
 * For instance, it creates a tracker named 'gtag_UA_XXX_X.send' for "send" events.
 *
 * @see https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
 */
const gaPageview = (trackingId, {
  location = window.location.href, page = window.location.pathname, title = window.document.title, trackerTransform = convertTrackingIDToGTag,
}) => {
  window.ga(`${trackerTransform(trackingId)}.send`, 'gtagPageview', {
    location,
    page,
    title,
  });
};

/**
 * Initialize Google Analytics and GTM.
 *
 * @param trakingId
 * @param location
 * @param page
 * @param title
 * @param trackerTransform
 * @returns {string}
 */
const initializeAsHTML = (trakingId, {
  location = window.location.href, page = window.location.pathname, title = window.document.title, trackerTransform = convertTrackingIDToGTag,
}) => `
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

module.exports = {
  convertTrackingIDToGTag,
  initializeAsHTML,
  gaPageview,
};
