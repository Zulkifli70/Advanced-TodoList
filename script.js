document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners for task circles to toggle completion
  const taskCircles = document.querySelectorAll(".task-circle");
  taskCircles.forEach((circle) => {
    circle.addEventListener("click", function () {
      this.classList.toggle("completed");
      if (this.classList.contains("completed")) {
        this.innerHTML = "✓";
        this.style.backgroundColor = "#2992ff";
        this.style.borderColor = "#2992ff";
        this.style.color = "white";
        this.style.textAlign = "center";
        this.style.lineHeight = "18px";
        this.style.fontSize = "12px";
        this.parentElement.style.textDecoration = "line-through";
        this.parentElement.style.opacity = "0.6";
      } else {
        this.innerHTML = "";
        this.style.backgroundColor = "transparent";
        this.style.borderColor = "#999";
        this.parentElement.style.textDecoration = "none";
        this.parentElement.style.opacity = "1";
      }
    });
  });

  // Add task functionality
  const taskInput = document.getElementById("task-input");
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && this.value.trim() !== "") {
      addNewTask(this.value);
      this.value = "";
    }
  });

  // Star/favorite functionality
  const starIcons = document.querySelectorAll(".task-item .far.fa-star");
  starIcons.forEach((star) => {
    star.addEventListener("click", function () {
      this.classList.toggle("fas");
      this.classList.toggle("far");
      if (this.classList.contains("fas")) {
        this.style.color = "#ffb900";
      } else {
        this.style.color = "#666";
      }
    });
  });

  // Function to add a new task
  function addNewTask(taskText) {
    const taskList = document.getElementById("task-list");

    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    const taskCircle = document.createElement("div");
    taskCircle.className = "task-circle";
    taskCircle.addEventListener("click", function () {
      this.classList.toggle("completed");
      if (this.classList.contains("completed")) {
        this.innerHTML = "✓";
        this.style.backgroundColor = "#2992ff";
        this.style.borderColor = "#2992ff";
        this.style.color = "white";
        this.style.textAlign = "center";
        this.style.lineHeight = "18px";
        this.style.fontSize = "12px";
        this.parentElement.style.textDecoration = "line-through";
        this.parentElement.style.opacity = "0.6";
      } else {
        this.innerHTML = "";
        this.style.backgroundColor = "transparent";
        this.style.borderColor = "#999";
        this.parentElement.style.textDecoration = "none";
        this.parentElement.style.opacity = "1";
      }
    });

    const taskTextDiv = document.createElement("div");
    taskTextDiv.className = "task-text";
    taskTextDiv.textContent = taskText;

    const starIcon = document.createElement("i");
    starIcon.className = "far fa-star";
    starIcon.addEventListener("click", function () {
      this.classList.toggle("fas");
      this.classList.toggle("far");
      if (this.classList.contains("fas")) {
        this.style.color = "#ffb900";
      } else {
        this.style.color = "#666";
      }
    });

    taskItem.appendChild(taskCircle);
    taskItem.appendChild(taskTextDiv);
    taskItem.appendChild(starIcon);

    taskList.appendChild(taskItem);
  }
});
