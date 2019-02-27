// ==UserScript==
// @name         Jupyter Notebook MONACO
// @namespace    https://tellyouwhat.cn/
// @version      0.3
// @description  try to change the jupyter notebook's default font family
// @author       HarborZeng
// @match        http://localhost:*/*
// @grant        MIT
// ==/UserScript==

(function () {
    'use strict';
    const fontFamily = 'MONACO, Consola, Courier, "Courier New", "Source Code Pro", "DejaVu Sans Mono", "Droid Sans Mono", InputMono, Iosevka'
    window.onload = function () {
        document.querySelectorAll('.CodeMirror').forEach(function (code) {
            code.style.fontFamily = fontFamily
        })
    }
    document.addEventListener("DOMNodeInserted", function (e) {
        document.querySelectorAll('.output_subarea pre').forEach(function (pre) {
            pre.style.fontFamily = fontFamily
        })
    })
})();