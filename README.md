# prettier-bookmarklet

**Note: this is not currently working due to some weird CORS issues. Stay tuned**

A bookmarklet to prettify content on the page using [prettier][prettier]

## Usage

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./dist/bookmarklet.js) -->
<!-- The below code snippet is automatically added from ./dist/bookmarklet.js -->
```js
javascript:!function(){"use strict";var e=document.location.href,n=function(e){return Array.from(e.childNodes).some(function(e){return"CODE"===e.nodeName})},o=Array.from(document.querySelectorAll("pre")).map(function(e){if(n(e))for(var o=e.childNodes,t=0;t<o.length;t++)if("CODE"===o[t].nodeName)return o[t];return e});fetch("https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier?url="+e,{method:"OPTIONS",mode:"cors",credentials:"include",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var n=e.blocks;n.length===o.length?o.forEach(function(e,o){e.innerText=n[o]}):console.warn("Uh-oh, something went wrong. Mismatch from the server generated code blocks vs. local code blocks")}).catch(function(e){return console.warn(e)})}();
```
<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./dist/bookmarklet.js) -->
<!-- AUTO-GENERATED-CONTENT:END -->

[prettier]: https://github.com/prettier/prettier
