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
 * Initialize Google Analytics and GTM.
 *
 * @param trakingId
 * @param config
 * @returns {string}
 */

var initializeAsHTML = function initializeAsHTML(trakingId) {
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

  return "\n    window.dataLayer = window.dataLayer || [];\n  \n    function gtag() {\n      dataLayer.push(arguments);\n    }\n  \n    gtag('js', new Date());\n    gtag('config', '".concat(trakingId, "', {\n      page_location: '").concat(location, "',\n      page_path: '").concat(page, "',\n      page_title: '").concat(title, "'\n    });\n  ");
};

exports.default = initializeAsHTML;
