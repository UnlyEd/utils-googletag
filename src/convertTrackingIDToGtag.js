
/**
 * Convert a given tracking id (like "UA-XXXXXXXX-X") to a valid GTAG string.
 *
 * @example _convertTrackingIDToGTag("UA-XXXXXXXX-X")
 * => "gtag_UA_XXXXXXXX_X"
 *
 * @param trackingId
 * @returns {string}
 */
export const convertTrackingIDToGTag = (trackingId) => {
  const trakingCleanedId = trackingId.replace(new RegExp('-', 'g'), '_');
  return `gtag_${trakingCleanedId}`;
};
