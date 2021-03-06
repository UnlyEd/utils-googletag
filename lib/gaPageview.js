'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Convert a given tracking id (like "UA-XXXXXXXX-X") to a valid GTAG string.
 *
 * @example _convertTrackingIDToGTag("UA-XXXXXXXX-X")
 * => "gtag_UA_XXXXXXXX_X"
 *
 * @param trackingId
 * @returns {string}
 */
var convertTrackingIDToGTag = function convertTrackingIDToGTag(trackingId) {
  var trakingCleanedId = trackingId.replace(new RegExp('-', 'g'), '_');
  return "gtag_".concat(trakingCleanedId);
};

/**
 * Send a page view by using the traditional window.ga function instead of window.gtag
 *
 * XXX This relies on gtag internal behavior, which creates a dynamic tracker based on the GA_TRACKING_ID
 * For instance, it creates a tracker named 'gtag_UA_XXX_X.send' for "send" events.
 *
 * @see https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
 */

var gaPageview = function gaPageview(trackingId) {
  window.ga("".concat(convertTrackingIDToGTag(trackingId), ".send"), 'pageview', {
    location: window.location.href,
    page: window.location.pathname,
    title: window.document.title
  });
};

exports.default = gaPageview;
