// ==UserScript==
// @name         Skip Steam Age Verification
// @namespace    http://tampermonkey.net/
// @version      0.1.1_2018-03-21
// @description  Bypass Steam date verification (Date of birth) by automatically submitting it as 1999/01/01
// @author       EnforcerZhukov
// @encoding     utf-8
// @match        http://store.steampowered.com/agecheck/app/*
// @downloadURL  https://raw.githubusercontent.com/EnforcerZhukov/Steam-SkipAgeVerification/master/SkipSteamAgeVerification.user.js
// @updateURL    https://raw.githubusercontent.com/EnforcerZhukov/Steam-SkipAgeVerification/master/SkipSteamAgeVerification.user.js
// @homepage     https://github.com/EnforcerZhukov/Steam-SkipAgeVerification
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.onreadystatechange = function() { //Execute when page has been loaded
        document.getElementById("ageYear").value = 1999; //Change year to 1999
        DoAgeGateSubmit(); //Submit form
    };
})();
