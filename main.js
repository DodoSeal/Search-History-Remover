var ids = [
  "oejigobjchedidhlafnpdpccihgbmbka",
  "ifeifkfohlobcbhmlfkenopaimbmnahb",
  "ijagefbeogciolnheepglhkbflpaalff",
  "jkfbjpggmgiheocgkkjmhgmehmbkpolm"
];

var action = prompt("What would you like to do?");

function toggle(enabled) {
  for (const i of ids) {
    chrome.management.setEnabled(i, enabled);
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
