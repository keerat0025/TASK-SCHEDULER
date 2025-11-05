# 🧩 Task Scheduler using Priority Queue

A **web-based Task Scheduler** project that demonstrates the use of a **Priority Queue (Min-Heap)** data structure to manage and execute tasks based on their priority.
This project visually represents how a heap organizes data and dynamically updates when tasks are added or executed.

---

## 🚀 Features

✅ Add tasks with a name, priority, and duration
✅ Automatically schedules tasks by priority (1 = highest priority)
✅ Execute tasks one by one in order of priority
✅ View all pending tasks
✅ Real-time **heap visualization** (binary tree view)
✅ Fully functional **Min-Heap implementation in JavaScript**

---

## 🧠 Tech Stack

* **HTML5** – Structure and layout
* **CSS3** – Styling and visualization
* **JavaScript (ES6)** – Core logic and DSA implementation (Priority Queue)

---

## 📂 Project Structure

```
task-scheduler/
│
├── index.html      # Main HTML interface
├── style.css       # Styling and layout
└── script.js       # DSA logic and heap visualization
```

---

## ⚙️ How It Works

1. Each task has:

   * A **name**
   * A **priority** (1 = highest, larger = lower)
   * A **duration** (in minutes)

2. Tasks are stored in a **Min-Heap Priority Queue**, ensuring the smallest priority value (highest priority) stays at the top.

3. The heap is dynamically updated after each:

   * **Add Task**
   * **Execute Task**

4. The **Heap Visualization** shows the binary tree structure level by level.

---

## 💻 Usage

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/keerat0025/TASK-SCHEDULER.git
```

### 2️⃣ Open the Project

Navigate to the folder and open `index.html` in any modern web browser.

---

## 🧩 Example

| Task Name   | Priority | Duration |
| ----------- | -------- | -------- |
| Study DSA   | 1        | 60 mins  |
| Do Laundry  | 4        | 20 mins  |
| Write Notes | 2        | 30 mins  |

**Execution Order:**
`Study DSA → Write Notes → Do Laundry`

---

## 📊 Heap Visualization

When you add tasks, they appear as **nodes** in a binary heap diagram:

* Each **circle (node)** represents a task with its **priority** and **name**.
* The tree updates automatically when tasks are added or executed.

---

## 🧩 DSA Concepts Demonstrated

* **Min-Heap Construction**
* **Heapify Up / Heapify Down Operations**
* **Priority-Based Scheduling**
* **Dynamic Visualization of Data Structures**

---

## 🧠 Future Enhancements

* [ ] Add **color coding** for priority levels (red = high, green = low)
* [ ] Store tasks in **localStorage**
* [ ] Add **progress animation** during task execution
* [ ] Implement **deadline-based scheduling**

---

## 👩‍💻 Author

**Keeratpreet Kaur**
🎓 B.Tech in Computer Science and Engineering
💡 Passionate about coding, algorithms, and web development.

---

## 🪪 License

This project is open-source and available under the [MIT License](LICENSE).

---
