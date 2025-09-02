// ==UserScript==
// @name         PoE Online Notify
// @description  Notify when a user is online in Path of Exile trade site
// @version      1.0
// @namespace    http://tampermonkey.net/
// @match        https://www.pathofexile.com/trade/
// @grant        GM_xmlhttpRequest
// @connect      ntfy.sh
// ==/UserScript==

(function() {
    'use strict';

    // Change this to your own ntfy topic
    const NTFY_URL = "https://ntfy.sh/poe-live-search-yourtopic";
    const CHECK_INTERVAL = 120000; // 2 minutes
    const DELAY_AFTER_LOAD = 5000; // 5 seconds
    let notified = false;

    function notifyOnline() {
        if (notified) return;
        notified = true;

        GM_xmlhttpRequest({
            method: "POST",
            url: NTFY_URL,
            data: "Online Now",
            onload: () => console.log("ntfy notification sent"),
            onerror: (err) => console.error("ntfy notification failed:", err)
        });
    }

    function checkOnline() {
        setTimeout(() => {
            const onlineEl = document.querySelector(".status-online");
            if (onlineEl && onlineEl.textContent.trim() === "Online") {
                notifyOnline();
            }
        }, DELAY_AFTER_LOAD);
    }

    window.addEventListener("load", checkOnline);

    setInterval(() => {
        notified = false;
        location.reload();
    }, CHECK_INTERVAL);
})();