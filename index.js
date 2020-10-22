// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const whiteList = ["www.notion.so","https://guanyun.live","https://www.notion.so"];

    /**
 * A method let you find yourself
 */
    function mindHook() {
        if (!whiteList.find((item) => item === window.location.origin)) {
            location.href = "https://guanyun.live/404";
        }
    }

    window.onload = function () {
        mindHook();
    };

    // Your code here...
})();
