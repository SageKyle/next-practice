import { useState } from 'react';

export default function AddEvent({ handleClose, setFormData, defaultDate }) {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [date, setDate] = useState(new Date().getDate());

	function handleSubmit(e) {
		e.preventDefault();
		console.log(e);
		setFormData({ title, desc, date });
		handleClose();
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col items-center justify-center p-4 rounded-md bg-slate-300 min-w-[30rem] space-y-4 relative"
		>
			<h1 className="text-2xl font-semibold my-4">New Event</h1>
			<h4
				className="absolute flex items-center justify-center right-4 top-0 border-2 transition-colors ease-in-out w-10 cursor-pointer rounded-full text-2xl"
				onClick={handleClose}
			>
				&times;
			</h4>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className="w-full rounded p-2"
			/>
			<textarea
				name="desc"
				id="desc"
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
				placeholder="Details"
				className="w-full rounded p-2 resize-none"
			></textarea>
			<input
				type="date"
				name="date"
				id="date"
				defaultValue={new Date(defaultDate)}
				value={date}
				onChange={(e) => setDate(e.target.value)}
				className="w-full rounded p-2"
			/>
			<button className="bg-cyan-500 rounded py-2 px-4 mt-8 inline-block hover:bg-cyan-400 transition-colors ease-in-out">
				Add Event
			</button>
		</form>
	);
}
