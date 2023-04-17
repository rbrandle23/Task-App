let inputval = document.getElementById("task-input");
let inputbutton = document.getElementById("task-button");
let taskcontainername = document.getElementById("task-name-container");

inputbutton.addEventListener("click", applyTask);

function applyTask() {
    if(inputval.value == "") {
        alert("Try Adding a Task!")
    }
    else {
        taskcontainername.innerHTML += `
        <ul class="task-second-container" id="task-second-container">
        <li class="task-lister" id="task-lister">${inputval.value}</li>
        <button class="task-buttoner" id="task-buttoner"><i class="fa-regular fa-trash-can"></i></button>
        </ul>
        
        `;
        inputval.value = ""; 
    }
}



document.addEventListener("click", removeTask);

function removeTask(e) {
    let target = e.target;
    if(target.classList.contains("task-buttoner")) {
        taskcontainername.removeChild(taskcontainername.firstElementChild);
  }
}









