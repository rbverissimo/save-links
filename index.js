let myLinks = [];
const inputBtn = document.getElementById("input-btn");
const clearBtn = document.getElementById("clear-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");

// const tabs = [{ url: "www.url.com.br" }];

if (JSON.parse(localStorage.getItem("myLinks"))) {
  myLinks = JSON.parse(localStorage.getItem("myLinks"));
  render(myLinks);
}

inputBtn.addEventListener("click", function () {
  // if (myLinks == null) myLinks = [];
  myLinks.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLinks", JSON.stringify(myLinks));
  render(myLinks);
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // if (myLinks == null) myLinks = [];
    myLinks.push(tabs[0].url);
    localStorage.setItem("myLinks", JSON.stringify(myLinks));
    render(myLinks);
  });
});

clearBtn.addEventListener("click", function () {
  localStorage.removeItem("myLinks");
  myLinks = [];
  render(myLinks);
});

function render(linksList) {
  let listItems = "";
  if (linksList == null) ulEl.innerHTML = listItems;
  else
    for (let i = 0; i < linksList.length; i++) {
      listItems += `<li>
        <a href='${linksList[i]}' target='_blank'>${linksList[i]}</a>
                  </li>
        `;
    }
  ulEl.innerHTML = listItems;
}
