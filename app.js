/* ============================================================
   TaskFlow — app.js
   Base JavaScript skeleton
   Each section is assigned to a specific team member.
   Do NOT modify sections assigned to other members.
   ============================================================ */


/* ============================================================
   SHARED STATE — Do not modify
   All members read from this central tasks array.
   ============================================================ */
let tasks = [];
let currentFilter = 'all'; // values: 'all' | 'active' | 'completed'


/* ============================================================
   MEMBER 7 — Add a New Task
   Function: addTask(taskText)
   - Creates a new task object and pushes it to the tasks array
   - Calls renderTasks() after adding
   ============================================================ */
function addTask(taskText) {
  // Write your code here
}


/* ============================================================
   MEMBER 8 — Mark Task as Complete
   Function: toggleTask(taskId)
   - Finds the task by id and flips its completed status
   - Calls renderTasks() after toggling
   ============================================================ */
function toggleTask(taskId) {
     const task = tasks.find(t=> t.id === taskId);

      if (task) {
        task.completed = !task.completed;
      }

       renderTasks();
}


/* ============================================================
   MEMBER 9 — Delete a Task
   Function: deleteTask(taskId)
   - Removes the task with the matching id from the tasks array
   - Calls renderTasks() after deleting
   ============================================================ */
function deleteTask(taskId) {
  // Write your code here
}


/* ============================================================
   MEMBER 10 — Edit an Existing Task
   Function: editTask(taskId, newText)
   - Finds the task by id and updates its text
   - Calls renderTasks() after editing
   ============================================================ */
function editTask(taskId, newText) {
  // Write your code here
}


/* ============================================================
   MEMBER 11 — Filter Tasks
   Function: setFilter(filter)
   - Sets currentFilter to 'all', 'active', or 'completed'
   - Calls renderTasks() to refresh the displayed list
   ============================================================ */
function setFilter(filter) {
  // Write your code here
}


/* ============================================================
   MEMBER 12 — Task Counter
   Function: updateCounter()
   - Counts how many tasks are NOT completed
   - Updates the #task-counter element in the DOM
   ============================================================ */
function updateCounter() {
  // Write your code here
}


/* ============================================================
   MEMBER 13 — Clear All Completed Tasks
   Function: clearCompleted()
   - Removes all tasks where completed === true
   - Calls renderTasks() after clearing
   ============================================================ */
function clearCompleted() {
  // Write your code here
}


/* ============================================================
   MEMBER 14 — Save Tasks to localStorage
   Function: saveTasks()
   - Converts tasks array to JSON and saves to localStorage
   - Key: 'taskflow-tasks'
   ============================================================ */
function saveTasks() {
  // Write your code here
}


/* ============================================================
   MEMBER 15 — Load Tasks from localStorage
   Function: loadTasks()
   - Reads from localStorage and parses JSON back to tasks array
   - Calls renderTasks() after loading
   - Called once when the page first opens
   ============================================================ */
function loadTasks() {
  // Write your code here
}


/* ============================================================
   RENDER FUNCTION — Core display logic (Leader / Phase 1)
   Reads from tasks[] and currentFilter, then updates the DOM.
   All members call this after making changes.
   ============================================================ */
function renderTasks() {
  const list = document.getElementById('task-list');
  if (!list) return;

  const filtered = tasks.filter(task => {
    if (currentFilter === 'active') return !task.completed;
    if (currentFilter === 'completed') return task.completed;
    return true;
  });

  list.innerHTML = filtered.map(task => `
    <li data-id="${task.id}" class="${task.completed ? 'completed' : ''}">
      <span class="task-text">${task.text}</span>
    </li>
  `).join('');

  updateCounter();
  saveTasks();
}


/* ============================================================
   INIT — Runs when the page loads
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  loadTasks();
});
