let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const clearBtn = document.getElementById("clear-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("myLeads") != null) {
    renderLeads();
  }
});

inputBtn.addEventListener("click", function () {
  let data = inputEl.value;
  myLeads.push(data);
  myLeads = localStorage.setItem("myLeads", JSON.stringify(myLeads));
  inputEl.value = "";
  renderLeads();
});

clearBtn.addEventListener("click", function () {
  localStorage.removeItem("myLeads");
  renderLeads();
});

function renderLeads() {
  let listItems = "";

  myLeads = JSON.parse(localStorage.getItem("myLeads"));
  if (myLeads == null) ulEl.innerHTML = listItems;
  else
    for (let i = 0; i < myLeads.length; i++) {
      listItems += `<li>
        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
                  </li>
        `;
    }
  ulEl.innerHTML = listItems;
}
