"use client";
import React, { useState } from "react";

function Home() {
	const [poll, setPoll]: any = useState(null);
	const [question, setQuestion] = useState("");
	const [options, setOptions] = useState(["", "", "", ""]);
	const [votes, setVotes] = useState([0, 0, 0, 0]);
	const [voters, setVoters] = useState<{ id: number; color: string }[]>([]);

	const createPoll = () => {
		setPoll({ question, options });
		setVotes([0, 0, 0, 0]);
		setVoters([]);
	};

	const getRandomColor = () => {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	};

	const vote = (index: any) => {
		const newVotes = [...votes];
		newVotes[index] += 1;
		setVotes(newVotes);

		const newVoter = {
			id: voters.length,
			color: getRandomColor(),
		};
		setVoters([...voters, newVoter]);
	};

	return (
		<>
			<div className="wrapper flex items-center justify-center w-screen h-screen bg-gray-900 text-white">
				<div className="bg-gray-800 px-8 py-4 rounded-[1rem] pb-12 flex flex-col gap-2 w-3/5 mx-auto">
					{!poll && (
						<>
							<h2 className="mt-4 font-sans">Question</h2>
							<input
								type="text"
								placeholder="Question"
								value={question}
								onChange={(e) => setQuestion(e.target.value)}
								className="w-full border-none bg-gray-700 p-2 text-lg outline-none focus:outline-none rounded-[0.5rem]"
							/>
							<h2 className="mt-4 font-sans">Options</h2>
							<div className="inputs-wrapper flex flex-col gap-1.5">
								{options.map((option, index) => (
									<input
										key={index}
										type="text"
										placeholder={`Option ${index + 1}`}
										value={option}
										onChange={(e) => {
											const newOptions = [...options];
											newOptions[index] = e.target.value;
											setOptions(newOptions);
										}}
										className="w-full border-none bg-gray-700 p-2 text-lg outline-none focus:outline-none rounded-[0.5rem]"
									/>
								))}
							</div>
							<button
								className="create-btn border-none bg-gray-400 text-black font-semibold text-lg py-2 px-4 mt-2 rounded-[0.5rem]"
								onClick={createPoll}
							>
								Create Poll
							</button>
						</>
					)}

					{poll && (
						<div className="box bg-gray-800 p-0 rounded-md flex flex-col gap-2">
							<h2 className="text-2xl mb-4 mt-4">Result:</h2>
							<h2 className="text-xl mb-4">{poll.question}</h2>
							{poll.options.map((option: any, index: any) => (
								<button
									key={index}
									className="bg-gray-700 text-white p-2 rounded-md my-1"
									onClick={() => vote(index)}
								>
									{option} ({votes[index]} votes)
								</button>
							))}
							<div className="people-wrapper flex items-center gap-2 mt-4">
								<h3 className="text-lg mr-4 min-w-fit">
									{votes.reduce((total, vote) => total + vote, 0)} total voters:
								</h3>
								<div className="voters flex flex-wrap gap-1">
									{voters.map((voter) => (
										<div
											key={voter.id}
											className="w-6 h-6 rounded-full"
											style={{ backgroundColor: voter.color }}
										/>
									))}
								</div>
							</div>
							<button
								className="create-btn bg-gray-400 text-black font-semibold text-lg py-2 px-4 mt-4 rounded-[0.5rem]"
								onClick={() => setPoll(null)}
							>
								Create New Poll
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Home;
