const ua = window.navigator.userAgent;
const isIE = /MSIE|Trident/.test(ua);
if (isIE) document.body.innerHTML = '';