# Beerpay browser extension
Extension to use [Beerpay](https://beerpay.io) on Google Chrome, Firefox and Opera.

## Install from Chrome Web Store
https://chrome.google.com/webstore/detail/beerpay/ikadcikdnbdbjkfbpklopjdonhcpjdih


## Load the extension in Chrome & Opera
1. Open Chrome/Opera browser and navigate to chrome://extensions
2. Select "Developer Mode" and then click "Load unpacked extension..."
3. From the file browser, choose to `path/to/chrome` or (`path/to/opera`)


## Load the extension in Firefox
1. Open Firefox browser and navigate to about:debugging
2. Click "Load Temporary Add-on" and from the file browser, choose `path/to/firefox`


## Developing
The following tasks can be used when you want to start developing and want to enable live reload

- `npm run chrome-watch`
- `npm run opera-watch`
- `npm run firefox-watch`


## Packaging
Run `npm run dist` to create a zipped, production-ready extension for each browser. You can then upload that to the appstore.
