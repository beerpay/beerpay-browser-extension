var ext = require('./utils/ext');
var $ = require('./vendor/jquery.min');

ext.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  var timer;
  var sendMessage = function () {
    timer = setInterval(function () {
      ext.tabs.sendMessage(tabId, { action: 'change' }).then(function (response) {
        clearInterval(timer);
      });
    }, 100);
  }

  if (changeInfo.status === 'complete') {
    sendMessage();
  }
});
