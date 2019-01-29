var googleTag = (function (exports) {
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
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _Object$assign = Object.assign({
      location: window.location.href,
      page: window.location.pathname,
      title: window.document.title,
      trackerTransform: convertTrackingIDToGTag
    }, config),
        trackerTransform = _Object$assign.trackerTransform,
        location = _Object$assign.location,
        page = _Object$assign.page,
        title = _Object$assign.title;

    window.ga("".concat(trackerTransform(trackingId), ".send"), 'gtagPageview', {
      location: location,
      page: page,
      title: title
    });
  };
  /**
   * Initialize Google Analytics and GTM.
   *
   * @param trakingId
   * @param config
   * @returns {string}
   */

  var initializeAsHTML = function initializeAsHTML(trakingId) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _Object$assign2 = Object.assign({
      location: window.location.href,
      page: window.location.pathname,
      title: window.document.title,
      trackerTransform: convertTrackingIDToGTag
    }, config),
        trackerTransform = _Object$assign2.trackerTransform,
        location = _Object$assign2.location,
        page = _Object$assign2.page,
        title = _Object$assign2.title;

    return "\n    window.dataLayer = window.dataLayer || [];\n  \n    function gtag() {\n      dataLayer.push(arguments);\n    }\n  \n    gtag('js', new Date());\n    gtag('config', '".concat(trakingId, "', {\n      page_location: '").concat(location, "',\n      page_path: '").concat(page, "',\n      page_title: '").concat(title, "'\n    });\n  ");
  };

  exports.convertTrackingIDToGTag = convertTrackingIDToGTag;
  exports.gaPageview = gaPageview;
  exports.initializeAsHTML = initializeAsHTML;

  return exports;

}({}));
