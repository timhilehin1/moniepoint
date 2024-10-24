import React from "react";
import { Link } from "react-router-dom";
import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg";

function Card({ task, toggleTaskStatus }) {
	return (
		<div className="w-full rounded-md border border-[#E7E7E7] bg-white p-2.5 flex items-center justify-between gap-4">
			<img
				onClick={() => toggleTaskStatus(task.id)}
				src={task?.status ? checked : unchecked}
				alt=""
				className="cursor-pointer"
			/>
			<p
				className={`flex-1 text-wrap break-words max-w-[9.3rem] ${
					task?.status ? "line-through text-[#8D8D8D]" : ""
				}`}
			>
				{task?.name}
			</p>
			<Link to={`/edit/${task.id}`}>
				<button className="text-baseTextColor border border-baseTextColor rounded-[.25rem] p-2.5">
					Edit
				</button>
			</Link>
		</div>
	);
}

export default Card;
