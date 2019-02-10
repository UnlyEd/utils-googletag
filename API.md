## Functions

<dl>
<dt><a href="#convertTrackingIDToGTag">convertTrackingIDToGTag(trackingId)</a> ⇒ <code>string</code></dt>
<dd><p>Convert a given tracking id (like &quot;UA-XXXXXXXX-X&quot;) to a valid GTAG string.</p>
</dd>
<dt><a href="#gaPageview">gaPageview()</a></dt>
<dd><p>Send a page view by using the traditional window.ga function instead of window.gtag</p>
<p>XXX This relies on gtag internal behavior, which creates a dynamic tracker based on the GA_TRACKING_ID
For instance, it creates a tracker named &#39;gtag_UA_XXX_X.send&#39; for &quot;send&quot; events.</p>
</dd>
<dt><a href="#initializeAsHTML">initializeAsHTML(trakingId)</a> ⇒ <code>string</code></dt>
<dd><p>Initialize Google Analytics and GTM.</p>
</dd>
</dl>

<a name="convertTrackingIDToGTag"></a>

## convertTrackingIDToGTag(trackingId) ⇒ <code>string</code>
Convert a given tracking id (like "UA-XXXXXXXX-X") to a valid GTAG string.

**Kind**: global function  

| Param |
| --- |
| trackingId | 

**Example**  
```js
_convertTrackingIDToGTag("UA-XXXXXXXX-X")
=> "gtag_UA_XXXXXXXX_X"
```
<a name="gaPageview"></a>

## gaPageview()
Send a page view by using the traditional window.ga function instead of window.gtag

XXX This relies on gtag internal behavior, which creates a dynamic tracker based on the GA_TRACKING_ID
For instance, it creates a tracker named 'gtag_UA_XXX_X.send' for "send" events.

**Kind**: global function  
**See**: https://developers.google.com/analytics/devguides/collection/analyticsjs/pages  
<a name="initializeAsHTML"></a>

## initializeAsHTML(trakingId) ⇒ <code>string</code>
Initialize Google Analytics and GTM.

**Kind**: global function  

| Param |
| --- |
| trakingId | 

