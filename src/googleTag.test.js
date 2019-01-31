/**
 * @jest-environment jsdom
 */

import gaPageview from './gaPageview';
import initializeAsHTML from './initializeAsHTML';
import convertTrackingIDToGTag from './convertTrackingIDToGtag';

const TRACKING_ID = 'UA-56789754-787879';

describe('googleTag', () => {
  test('must return a valid gtag (replace all dash by underscore and prepend gtag)', () => {
    const gtag = convertTrackingIDToGTag(TRACKING_ID);
    expect(gtag).toEqual('gtag_UA_56789754_787879');
  });

  test('must return html with gtag config', () => {
    const _initializeAsHTML = jest.fn(initializeAsHTML);

    const html = _initializeAsHTML(TRACKING_ID, window);

    expect(html).toEqual(`
    window.dataLayer = window.dataLayer || [];
  
    function gtag() {
      dataLayer.push(arguments);
    }
  
    gtag('js', new Date());
    gtag('config', '${TRACKING_ID}', {
      page_location: 'http://localhost/',
      page_path: '/',
      page_title: ''
    });
  `);
  });

  test('must return html with gtag config', () => {
    const _gaPreview = jest.fn(gaPageview);

    window.ga = (tracker, tag, params) => {
      window.tracker = {
        tracker,
        tag,
        title: params.location.title,
      };
    };
    _gaPreview(TRACKING_ID, window);

    expect(window.tracker).toEqual({
      tracker: `${convertTrackingIDToGTag(TRACKING_ID)}.send`,
      tag: 'gtagPageview',
      title: undefined,
    });
  });
});
