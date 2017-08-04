# prettier-bookmarklet

**Note: this is not currently working due to some weird CORS issues. Stay tuned**

A bookmarklet to prettify content on the page using [prettier][prettier]. See also [prettier-lamda][prettier-lamda]

<blockquote>
There needs to be a Chrome extension that runs Prettier on code snippets in Medium posts 🤔
<cite>--@_matthamil</cite>
</blockquote>

## Usage

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./dist/bookmarklet.js) -->
<!-- The below code snippet is automatically added from ./dist/bookmarklet.js -->
```js
javascript:var prettierBookmarklet=function(){"use strict";var r=function(r){return"CODE"===r.nodeName},e=function(e){return Array.from(e.childNodes).some(r)},t=Array.from(document.querySelectorAll("pre")).map(function(t){if(e(t))for(var n=t.childNodes,o=0;o<n.length;o++)if(r(n[o]))return n[o];return t});return Promise.all(t.map(function(r){return fetch("https://xu2gjdfgt7.execute-api.us-east-1.amazonaws.com/dev/prettier",{method:"POST",mode:"cors",body:r.innerText}).then(function(r){if(!r.ok)throw new Error(r.status);return r.text()}).then(function(e){return r.innerText=e,e})}))}();
```
<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./dist/bookmarklet.js) -->
<!-- AUTO-GENERATED-CONTENT:END -->

[prettier]: https://github.com/prettier/prettier
[prettier-lamda]: https://github.com/DSchau/prettier-lamda
