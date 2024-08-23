import React from "react";

const Result = () => {
	return (
		<div className="wrapper flex items-center justify-center w-screen h-screen bg-gray-900 text-white">
			<div className="box bg-gray-800 p-8 rounded-md flex flex-col gap-2">
				<h2 className="text-2xl mb-4">Result:</h2>
				<h2 className="text-xl mb-4">The question goes here?</h2>
				<div className="bg-transparent text-lg mb-4">Answer</div>
				<div className="people-wrapper flex items-center gap-2">
					<h3 className="text-lg mr-4">3 total voters:</h3>
					<div className="voter bg-red-400 rounded-full w-8 h-8"></div>
					<div className="voter bg-red-400 rounded-full w-8 h-8"></div>
					<div className="voter bg-orange-400 rounded-full w-8 h-8 transform -translate-x-2"></div>
					<div className="voter bg-white rounded-full w-8 h-8 transform -translate-x-4"></div>
				</div>
				<button className="create-btn bg-gray-400 text-black font-semibold text-lg py-2 px-4 mt-4">
					Create Poll
				</button>
			</div>
		</div>
	);
};

export default Result;
