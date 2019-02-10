'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Initialize Google Analytics and GTM.
 *
 * @param trakingId
 * @returns {string}
 */
var initializeAsHTML = function initializeAsHTML(trakingId) {
  return "\n    window.dataLayer = window.dataLayer || [];\n  \n    function gtag() {\n      dataLayer.push(arguments);\n    }\n  \n    gtag('js', new Date());\n    gtag('config', '".concat(trakingId, "', {\n      page_location: window.location.href,\n      page_path: window.location.pathname,\n      page_title: window.document.title\n    });\n  ");
};

exports.default = initializeAsHTML;
