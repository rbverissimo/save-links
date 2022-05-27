let myLinks = [];
const inputBtn = document.getElementById("input-btn");
const clearBtn = document.getElementById("clear-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("myLinks") != null) {
    myLinks = JSON.parse(localStorage.getItem("myLinks"));
    render(myLinks);
  }
});

inputBtn.addEventListener("click", function () {
  let data = inputEl.value;
  inputEl.value = "";
  myLinks.push(data);
  myLinks = localStorage.setItem("myLinks", JSON.stringify(myLinks));
  myLinks = JSON.parse(localStorage.getItem("myLinks"));
  render(myLinks);
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
