import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Edit({ editTask, tasks, deleteTask }) {
	const { id } = useParams(); // Get the task ID from the URL
	const taskId = parseInt(id); // Ensure the ID is a number

	const taskToEdit = tasks.find((task) => task.id === taskId);

	const [taskName, setTaskName] = useState("");

	useEffect(() => {
		if (taskToEdit) {
			setTaskName(taskToEdit.name);
		}
	}, [taskToEdit]);

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (taskToEdit) {
			editTask(taskId, { name: taskName });
		}
	};

	const handleDelete = () => {
		deleteTask(taskToEdit.id);
		// Redirect after deletion
	};

	return (
		<section className="h-screen flex flex-col relative">
			<header className="bg-headerColor h-[7rem] p-2 text-white flex justify-center items-center">
				<p className="text-center">Edit Task</p>
			</header>

			<div className="mt-3 p-4 flex-grow">
				<form onSubmit={handleSubmit}>
					<div className="input_wrapper flex flex-col gap-2">
						<label className="text-black">Task Name</label>
						<input
							value={taskName}
							onChange={(e) => setTaskName(e.target.value)}
							placeholder="Edit task"
							className="border-[2px] focus:outline-[#CBCBCB] border-[#CBCBCB] w-full max-w-[37.25rem] text-baseTextColor p-4 rounded-lg"
						/>
					</div>
				</form>
			</div>

			{/* Fixed action buttons at the bottom */}
			<div className="flex  p-4  gap-8">
				<button
					onClick={handleDelete}
					className="p-4 rounded-lg w-full md:w-[25%] text-white bg-[#AB3535]"
				>
					Delete
				</button>
				<button
					onClick={handleSubmit}
					type="submit"
					className="p-4 rounded-lg w-full lg:w-[50%] text-white bg-headerColor"
				>
					Save
				</button>
			</div>
		</section>
	);
}

export default Edit;
