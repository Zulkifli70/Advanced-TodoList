document.addEventListener("DOMContentLoaded", function () {
  // Add default getting started tasks
  const initialTasks = [
    "Add your first task by clicking on '+ Add a task'",
    "Select this task to add a reminder and due date",
    "Break this task into smaller steps",
    "Open this task's detail view to add it to My Day",
    "Add #hashtags to a task's title to categorize it",
    "Create a new list for work and personal tasks",
    "Click the star to mark important tasks",
  ];

  // Populate the task list with initial tasks
  const taskList = document.getElementById("task-list");
  initialTasks.forEach((taskText) => {
    addNewTask(taskText);
  });

  // Add event listeners for task circles to toggle completion
  const taskCircles = document.querySelectorAll(".task-circle");
  taskCircles.forEach((circle) => {
    circle.addEventListener("click", toggleTaskCompletion);
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
    star.addEventListener("click", toggleStarStatus);
  });

  // Function to toggle task completion
  function toggleTaskCompletion() {
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
  }

  // Function to toggle star status
  function toggleStarStatus() {
    this.classList.toggle("fas");
    this.classList.toggle("far");
    if (this.classList.contains("fas")) {
      this.style.color = "#ffb900";
    } else {
      this.style.color = "#666";
    }
  }

  // Function to add a new task
  function addNewTask(taskText) {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    const taskCircle = document.createElement("div");
    taskCircle.className = "task-circle";
    taskCircle.addEventListener("click", toggleTaskCompletion);

    const taskTextDiv = document.createElement("div");
    taskTextDiv.className = "task-text";

    // Create main text content
    const textContent = document.createElement("div");
    textContent.textContent = taskText;
    taskTextDiv.appendChild(textContent);

    // Add a note to some tasks randomly (for getting started tasks)
    if (initialTasks.includes(taskText) && Math.random() > 0.5) {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";

      const noteIcon = document.createElement("i");
      noteIcon.className = "far fa-sticky-note";

      noteDiv.appendChild(noteIcon);
      noteDiv.appendChild(document.createTextNode(" Note"));
      taskTextDiv.appendChild(noteDiv);
    }

    const starIcon = document.createElement("i");
    starIcon.className = "far fa-star";
    starIcon.addEventListener("click", toggleStarStatus);

    taskItem.appendChild(taskCircle);
    taskItem.appendChild(taskTextDiv);
    taskItem.appendChild(starIcon);

    taskList.appendChild(taskItem);
  }
});
