var enterButton = document.getElementById("enterButton");
var enterItemText = document.getElementById("enterItemText");
var list = document.querySelector("ul");

function itemTextLength() {
  return enterItemText.value.length;
}

function addItemToList() {
  var listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(enterItemText.value))
  list.appendChild(listItem);
  enterItemText.value = "";
}

function addListItemAfterClick() {
  if (itemTextLength() > 0) {
    addItemToList();
  }
}

function addListItemAfterKeypress(event) {
  if (itemTextLength() > 0 && event.keyCode === 13) {
    addItemToList();
  }
}

enterButton.addEventListener("click", addListItemAfterClick);

enterItemText.addEventListener("keypress", addListItemAfterKeypress);
