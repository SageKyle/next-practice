'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import AddEvent from '../components/AddEvent';

export default function CalendarFn() {
	const [value, onChange] = useState(new Date());
	const [open, setOpen] = useState(true);

	function onClickDay(value, event) {
		// alert('you clicked on: ', value);
		console.log(value);
		console.log(event);
	}

	return (
		<>
			<Head>
				<title>Calendar</title>
			</Head>
			<main className="w-full py-8 flex flex-col justify-center items-center space-y-4">
				<h1 className="text-2xl">This is the Calendar Page</h1>
				<section>
					<Calendar
						value={value}
						onChange={onChange}
						onClickDay={(value, event) => onClickDay(value, event)}
					/>
				</section>
				<div
					className="bg-slate-500 rounded-full p-2 w-12 cursor-pointer aspect-square text-3xl inline-block relative z-30 bottom-16 right-[-6rem]"
					onClick={(prev) => setOpen(!prev)}
				>
					&rArr;
				</div>
				{open && <AddEvent />}
				<Link href={'/'} className="inline-block mt-auto">
					Home
				</Link>
			</main>
		</>
	);
}
