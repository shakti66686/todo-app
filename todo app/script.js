let input_box = document.getElementById("input_box");
let btn = document.getElementById("input_btn");
let listContainer = document.getElementById("list_container");
btn.addEventListener("click", function input() {
  if (input_box.value === "") {
    alert("add some text in this");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input_box.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  input_box.value = "";
});
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("cheaked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
