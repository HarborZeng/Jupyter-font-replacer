// ==UserScript==
// @name         Jupyter Notebook MONACO
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       HarborZeng
// @match        http://localhost:*/*
// @grant        MIT
// ==/UserScript==

(function () {
    'use strict';
    window.onload = function () {
        document.querySelectorAll('.CodeMirror').forEach(function (code) {
            code.style.fontFamily = 'MONACO'
        })
    }
})();