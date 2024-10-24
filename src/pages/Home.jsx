import React, { useState } from "react";


function Home({ addTask }) {
	const [taskName, setTaskName] = useState("");

	// Handle input change
	const handleInputChange = (e) => {
		setTaskName(e.target.value);
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (taskName.trim() !== "") {
			// Call the addTask function passed as a prop
			addTask({ name: taskName, status: false });
			// Clear the input after adding
			setTaskName("");
		}
	};

	return (
		<section className="h-full">
			<header className="bg-headerColor h-[7rem] p-2 text-white flex justify-center items-center">
				<p className="text-center">Add Task</p>
			</header>

			<div className="mt-3 p-4">
				<form
					onSubmit={handleSubmit}
					className="input_wrapper flex flex-col gap-2"
				>
					<label className="text-black">Task Name</label>
					<input
						placeholder="Add task"
						value={taskName}
						onChange={handleInputChange}
						className="border-[2px] focus:outline-[#CBCBCB] border-[#CBCBCB] w-full max-w-[37.25rem] text-baseTextColor p-4 rounded-lg"
					/>

					{/* //actions */}
					<button
						type="submit"
						className="p-4 rounded-lg w-full text-white md:w-[37.25rem] bg-headerColor mt-auto absolute bottom-4"
					>
						Save
					</button>
				</form>
			</div>
		</section>
	);
}

export default Home;
