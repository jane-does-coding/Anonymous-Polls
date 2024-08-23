import React from "react";
import Result from "./Result";

export default function Home() {
	return (
		<>
			<Result />

			<div className="wrapper flex items-center justify-center w-screen h-screen bg-gray-900 text-white">
				<div className="box flex flex-col gap-2 w-3/5 mx-auto">
					<h2 className="mt-4 font-sans">Question</h2>
					<input
						type="text"
						placeholder="Question"
						className="w-full border-none bg-gray-700 p-2 text-lg outline-none ring-none focus:outline-none focus:ring-none"
					/>
					<h2 className="mt-4 font-sans">Options</h2>
					<div className="inputs-wrapper flex flex-col gap-1.5">
						<input
							type="text"
							placeholder="Option1"
							className="w-full border-none bg-gray-700 p-2 text-lg outline-none ring-none focus:outline-none focus:ring-none"
						/>
						<input
							type="text"
							placeholder="Option2"
							className="w-full border-none bg-gray-700 p-2 text-lg outline-none ring-none focus:outline-none focus:ring-none"
						/>
						<input
							type="text"
							placeholder="Option3"
							className="w-full border-none bg-gray-700 p-2 text-lg outline-none ring-none focus:outline-none focus:ring-none"
						/>
						<input
							type="text"
							placeholder="Option4"
							className="w-full border-none bg-gray-700 p-2 text-lg outline-none ring-none focus:outline-none focus:ring-none"
						/>
					</div>
					<button className="create-btn border-none bg-gray-400 text-black font-semibold text-lg py-2 px-4 mt-2">
						Create Poll
					</button>
				</div>
			</div>
		</>
	);
}
