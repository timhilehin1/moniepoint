import React from "react";
import avatar from "../assets/avatar.png";
import trophy from "../assets/trophy.svg";
import add from "../assets/add.svg";
import Card from "./Card";
import { Link } from "react-router-dom";
function Layout({  tasks, toggleTaskStatus , children }) {
	return (
		<section className="flex relative">
			<aside className="sidebar hidden md:flex flex-col w-full md:w-[25rem] shadow-right h-screen relative">
				<header className="bg-headerColor h-[7rem] p-2 flex px-4 gap-3 shadow-right">
					<img src={avatar} alt="" className="shrink-0 grow-0 self-start" />
					<div className="text-white">
						<p>Hello John</p>
						<p className="mt-[0.5rem] roboto-thin-italic text-xl ">
							What are your plans for today?
						</p>
					</div>
				</header>

				{/* Pro advert */}
				<div className="min-h-[5rem] p-2 flex gap-2 items-center text-baseTextColor font-[500] bg-[#CDE53D] border-[2px] border-[#9EB031] relative">
					<img src={trophy} alt="" className="shrink-0 grow-0" />
					<p>Go Pro Upgrade Now</p>
					<div className="h-[60px] w-[66px] flex items-center justify-center bg-baseTextColor text-[#F2C94C] absolute top-0 right-4">
						$1
					</div>
				</div>

				{/* Tasks */}
				<div className="mt-2 space-y-2 p-2 ">
					{tasks.length === 0 && (
						<p className="text-center">No task available</p>
					)}
					{tasks.map((task) => (
						<Card key={task.id} task={task} toggleTaskStatus={toggleTaskStatus} />
					))}
				</div>

				<Link to={`/`}>
					<img
						src={add}
						alt=""
						className="animate-bounce absolute bottom-4 right-4 cursor-pointer"
					/>
				</Link>
			</aside>

			<section className="w-full"> {children}</section>
		</section>
	);
}

export default Layout;
