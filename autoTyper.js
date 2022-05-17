// ==UserScript==
// @name        Valve Auto Entry
// @namespace   Violentmonkey Scripts
// @match       https://www.valvesoftware.com/en/contact
// @grant       none
// @version     1.1
// @author      Neptune.
// @description Automatically enters information to do with TF2's bot situation.
// ==/UserScript==

(function(){
    'use strict';

    window.addEventListener("load", function(){
        document.getElementById("contact_email").value = "stoptf2bots@onionmail.org";
        document.getElementById("contact_subject").value = "TF2’s Rampant Bot Problem";
        document.getElementById("contact_message").value = "Hi! TF2’s bot/cheater problem has been a major issue for 2 years now. Very little has been done to address this problem and it hasn’t been directly acknowledged by anyone at Valve or the TF2 team.\nIf anyone at Valve could give the community an update on the situation and let us know if it’s being worked on and when it might be fixed that would mean a lot. And if this email could be forwarded or shared to anyone more directly involved with Team Fortress that would be very much appreciated.\n-Thanks";
    }, false);
})();