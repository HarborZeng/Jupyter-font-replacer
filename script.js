// ==UserScript==
// @name         Jupyter Notebook MONACO
// @namespace    https://tellyouwhat.cn/
// @version      0.2
// @description  try to change the jupyter notebook's default font family
// @author       HarborZeng
// @match        http://localhost:*/*
// @grant        MIT
// ==/UserScript==

(function () {
    'use strict';
    window.onload = function () {
        document.querySelectorAll('.CodeMirror').forEach(function (code) {
            code.style.fontFamily = 'MONACO, Consola, Courier, Courier New, Source Code Pro, DejaVu Sans Mono, Droid Sans Mono, InputMono, Iosevka'
        })
    }
})();