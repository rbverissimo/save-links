let myLinks = [];
const inputBtn = document.getElementById("input-btn");
const clearBtn = document.getElementById("clear-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("myLinks") != null) {
    renderLeads(myLinks);
  }
});

inputBtn.addEventListener("click", function () {
  let data = inputEl.value;
  if (myLinks == null) myLinks = [];
  myLinks.push(data);
  myLinks = localStorage.setItem("myLinks", JSON.stringify(myLinks));
  inputEl.value = "";
  render(myLinks);
});

clearBtn.addEventListener("click", function () {
  localStorage.removeItem("myLinks");
  render(myLinks);
});

function render(myLinks) {
  let listItems = "";
  myLinks = JSON.parse(localStorage.getItem("myLinks"));
  if (myLinks == null) ulEl.innerHTML = listItems;
  else
    for (let i = 0; i < myLinks.length; i++) {
      listItems += `<li>
        <a href='${myLinks[i]}' target='_blank'>${myLinks[i]}</a>
                  </li>
        `;
    }
  ulEl.innerHTML = listItems;
}
