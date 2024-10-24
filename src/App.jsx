import React from "react";
import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Edit from "./pages/Edit";


function App() {
	const [tasks, setTasks] = useState([]);
// Function to add a new task
const addTask = (newTask) => {
  setTasks((prev) => [...prev, { ...newTask, id: Date.now() }]);
};

// Function to edit a task
const editTask = (id, updatedTask) => {
  setTasks((prev) =>
    prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
  );
};

//toggle
const toggleTaskStatus = (id) => {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    )
  );
};

const deleteTask = (id) => {
  setTasks((prev) => prev.filter((task) => task.id !== id));
};

	return (
		<Router>
			<Layout tasks={tasks} toggleTaskStatus={toggleTaskStatus}>
				<Routes>
					<Route path="/" element={<Home addTask={addTask}/>} />
					<Route path="/edit/:id" element={<Edit editTask={editTask} tasks={tasks} deleteTask={deleteTask} />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
