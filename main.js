const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert("You must write sinething!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    seveDeta();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        seveDeta();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        seveDeta();
    }
}, false);

function seveDeta() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();










