'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _require = require('./gaPageview'),
    gaPageview = _require.gaPageview;

var _require2 = require('./initializeAsHTML'),
    initializeAsHTML = _require2.initializeAsHTML;

var _require3 = require('./convertTrackingIDToGtag'),
    convertTrackingIDToGTag = _require3.convertTrackingIDToGTag;

var index = {
  gaPageview: gaPageview,
  initializeAsHTML: initializeAsHTML,
  convertTrackingIDToGTag: convertTrackingIDToGTag
};

exports.default = index;
