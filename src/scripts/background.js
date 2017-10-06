import ext from "./utils/ext";
import $ from "./vendor/jquery.min"

ext.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  
  var timer;
  var sendMessage = function(){
    timer = setInterval(function() {
      console.log('msh');
      ext.tabs.sendMessage(tabId, { action: 'change' }).then(response => {
        clearInterval(timer)
      })
    }, 100);
  }
  
  
  console.log('pre-pre');
  if (changeInfo.status === 'complete') {
    console.log('pre');
    sendMessage()
  }
});
