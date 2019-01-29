import { convertTrackingIDToGTag } from './convertTrackingIDToGtag';

/**
 * Send a page view by using the traditional window.ga function instead of window.gtag
 *
 * XXX This relies on gtag internal behavior, which creates a dynamic tracker based on the GA_TRACKING_ID
 * For instance, it creates a tracker named 'gtag_UA_XXX_X.send' for "send" events.
 *
 * @see https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
 */
export const gaPageview = (trackingId, config = {}) => {
  const {
    trackerTransform, location, page, title,
  } = Object.assign({
    location: window.location.href,
    page: window.location.pathname,
    title: window.document.title,
    trackerTransform: convertTrackingIDToGTag,
  }, config);

  window.ga(`${trackerTransform(trackingId)}.send`, 'gtagPageview', {
    location,
    page,
    title,
  });
};
