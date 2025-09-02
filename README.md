# PoE Online Notify

This userscript sends a notification to ntfy.sh when a user is detected as "Online" on the Path of Exile trade site.

## How to Use

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser.
2. Copy the code from `poe-online-notify.js` and create a new userscript in Tampermonkey.
3. Replace `poe-live-search-yourtopic` in the script with your own [ntfy.sh](https://ntfy.sh/) topic URL.
4. Open [Path of Exile Trade](https://www.pathofexile.com/trade/) in your browser.

## Notes

- The script checks for "Online" status every 2 minutes and reloads the page.
- Notifications are sent via ntfy.sh.
- Only works on the Path of Exile trade
