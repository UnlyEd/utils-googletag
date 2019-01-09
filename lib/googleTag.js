'use strict';

/**
 *
 * @param trackingId
 * @returns {string}
 */
const generateTracker = (trackingId) => {
  const trakingCleanedId = trackingId.replace(new RegExp('-', 'g'), '_');
  return `gtag_${trakingCleanedId}`;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
/**
 *
 * @param trakingId
 * @param url
 * @param path
 * @param title
 */
const pageview = (trakingId, { url = window.location.href, path = window.location.pathname, title = window.document.title }) => {
  window.gtag('config', `${trakingId}`, {
    page_location: url,
    page_path: path,
    page_title: title,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
/**
 *
 * @param action
 * @param category
 * @param label
 * @param value
 */
const gtagEvent = ({
  action, category, label, value,
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

/**
 * Send a page view by using the traditional window.ga function instead of window.gtag
 *
 * XXX This relies on gtag internal behavior, which creates a dynamic tracker based on the GA_TRACKING_ID
 * For instance, it creates a tracker named 'gtag_UA_XXX_X.send' for "send" events.
 */
const gaPageview = (tracker) => {
  window.ga(`${tracker}.send`, 'pageview', {
    location: window.location.href,
    page: window.location.pathname,
    title: window.document.title,
  });
};

/**
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

module.exports = {
  generateTracker,
  initializeAsHTML,
  gaPageview,
  pageview,
  gtagEvent,
};
