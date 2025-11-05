// Priority Queue implemented using Min-Heap
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftIndex(i) { return 2 * i + 1; }
  getRightIndex(i) { return 2 * i + 2; }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  enqueue(task) {
    this.heap.push(task);
    this.heapifyUp(this.heap.length - 1);
    visualizeHeap(this.heap);
  }

  heapifyUp(i) {
    let parent = this.getParentIndex(i);
    while (i > 0 && this.heap[i].priority < this.heap[parent].priority) {
      this.swap(i, parent);
      i = parent;
      parent = this.getParentIndex(i);
    }
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) {
      const single = this.heap.pop();
      visualizeHeap(this.heap);
      return single;
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    visualizeHeap(this.heap);
    return root;
  }

  heapifyDown(i) {
    let left = this.getLeftIndex(i);
    let right = this.getRightIndex(i);
    let smallest = i;

    if (left < this.heap.length && this.heap[left].priority < this.heap[smallest].priority) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right].priority < this.heap[smallest].priority) {
      smallest = right;
    }

    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapifyDown(smallest);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  getAll() {
    return [...this.heap].sort((a, b) => a.priority - b.priority);
  }
}

// Scheduler instance
const scheduler = new PriorityQueue();

function addTask() {
  const name = document.getElementById("taskName").value;
  const priority = parseInt(document.getElementById("priority").value);
  const duration = parseInt(document.getElementById("duration").value);
  const output = document.getElementById("output");

  if (!name || isNaN(priority) || isNaN(duration)) {
    output.innerHTML = "<p>Please fill all fields correctly.</p>";
    return;
  }

  scheduler.enqueue({ name, priority, duration });
  output.innerHTML = `<p>✅ Task added: <b>${name}</b> (Priority: ${priority})</p>`;

  document.getElementById("taskName").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("duration").value = "";
}

function executeTask() {
  const output = document.getElementById("output");
  if (scheduler.isEmpty()) {
    output.innerHTML = "<p>No tasks to execute.</p>";
    return;
  }
  const task = scheduler.dequeue();
  output.innerHTML = `<p>🚀 Executing <b>${task.name}</b> (Priority: ${task.priority}, Duration: ${task.duration} mins)</p>`;
}

function showTasks() {
  const output = document.getElementById("output");
  if (scheduler.isEmpty()) {
    output.innerHTML = "<p>No tasks available.</p>";
    return;
  }

  const allTasks = scheduler.getAll();
  output.innerHTML = "<h3>📋 All Tasks:</h3>" + allTasks.map(
    t => `<p>🟡 ${t.name} — Priority: ${t.priority}, Duration: ${t.duration} mins</p>`
  ).join("");
}

// 🧩 Heap Visualization
function visualizeHeap(heap) {
  const container = document.getElementById("heapContainer");
  container.innerHTML = "";

  if (heap.length === 0) {
    container.innerHTML = "<p>No tasks in heap.</p>";
    return;
  }

  let level = 0;
  let index = 0;

  while (index < heap.length) {
    const levelDiv = document.createElement("div");
    levelDiv.classList.add("level");

    const levelSize = Math.pow(2, level);
    for (let i = 0; i < levelSize && index < heap.length; i++) {
      const node = document.createElement("div");
      node.classList.add("node");
      node.innerText = `${heap[index].priority}\n${heap[index].name}`;
      levelDiv.appendChild(node);
      index++;
    }

    container.appendChild(levelDiv);
    level++;
  }
}
