const btnEle = document.querySelector(".btn");
const inputEle = document.querySelector("#add_task");
const textEle = document.querySelector(".list-item");
btnEle.addEventListener("click", () => {
  //   console.log(inputEle.value);
  if (inputEle.value === "") {
    alert("Please Add your task first");
  } else {
    let listEle = document.createElement("li");
    listEle.textContent = inputEle.value;
    textEle.appendChild(listEle);

    let spanEle = document.createElement("span");
    spanEle.textContent = "\u00d7";
    listEle.appendChild(spanEle);
  }

  inputEle.value = "";
  saveEle();
});

textEle.addEventListener("click", (event) => {
  if (event.target.tagName == "LI") {
    event.target.classList.toggle("checked");
    saveEle();
  } else if (event.target.tagName == "SPAN") {
    event.target.parentElement.remove();
    saveEle();
  }
});

function saveEle() {
  localStorage.setItem("task", textEle.innerHTML);
}

function getEle() {
  textEle.innerHTML = localStorage.getItem("task");
}

getEle();
