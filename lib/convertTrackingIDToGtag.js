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

exports.default = convertTrackingIDToGTag;
