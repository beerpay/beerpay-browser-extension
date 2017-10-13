var ext = require('./utils/ext');

ext.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  var timer;

  if (changeInfo.status === 'complete') {
    timer = setInterval(function () {
      ext.tabs.sendMessage(tabId, { action: 'refresh' }, function () {
        clearInterval(timer);
      });
    }, 100);
  }
});
