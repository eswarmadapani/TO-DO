const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
        inputBox.value = ""; // Clear the input box after adding the task
        saveData(); // Save the current state to localStorage
    }
}

// Event listener for task interactions
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save the state after toggling checked
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // Save the state after removing the task
    }
}, false);

// Function to save tasks to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Corrected the key name to "data"
}

// Function to show tasks from localStorage
function showTask() {
    // Check if there's data in localStorage before loading
    const savedTasks = localStorage.getItem("data");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}

// Call showTask on page load to populate the list
window.onload = showTask;