var ids = [
  "oejigobjchedidhlafnpdpccihgbmbka",
  "ifeifkfohlobcbhmlfkenopaimbmnahb",
  "ijagefbeogciolnheepglhkbflpaalff",
  "jkfbjpggmgiheocgkkjmhgmehmbkpolm",
  "kmffehbidlalibfeklaefnckpidbodff",
  "keknjhjnninjadlkapachhhjfmfnofcb",
  "honjcnefekfnompampcpmcdadibmjhlk"
];

var action = prompt("What would you like to do?");

function toggle(enabled) {
  for (const i of ids) {
    chrome.management.setEnabled(i, enabled);
    chrome.history.addUrl("https://google.com");
  };
};

if (action) {
  switch(action) {
    case "":
      break;
    case "enable":
      toggle(true);
      break;
    case "disable":
      toggle(false);
      break;
  };
};
