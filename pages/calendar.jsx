'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../app/styles/calendar.module.css';

import AddEvent from '../components/AddEvent';

export default function CalendarFn() {
	const [value, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);
	const [formData, setFormData] = useState({
		title: '',
		desc: '',
		date: new Date(),
	});
	const [defaultDay, setDefaultDay] = useState(new Date());

	function onClickDay(value, event) {
		// alert('you clicked on: ', value);
		setOpen(true);
		setDefaultDay(value);
		console.log(value);
		console.log(event);
	}

	function handleClose() {
		setOpen(false);
	}

	return (
		<>
			<Head>
				<title>Calendar</title>
			</Head>
			<main className="w-full py-8 flex flex-col justify-center items-center relative">
				<h1 className="text-2xl mb-4">This is the Calendar Page</h1>
				<section className="my-4">
					<Calendar
						className={styles.calendar}
						tileClassName={styles.tileStyles}
						// selectRange
						value={value}
						onChange={setDate}
						tileContent={({ date, view }) =>
							view === 'month' &&
							date.toDateString() ===
								new Date(formData?.date).toDateString() ? (
								<p className={styles.EventTile}>Hey!</p>
							) : null
						}
						onClickDay={(value, event) => onClickDay(value, event)}
					/>
				</section>
				<div
					className="relative bg-slate-100 flex items-center justify-center right-[-7rem] bottom-14 z-10 border-2 hover:bg-slate-200 transition-colors ease-in-out w-10 cursor-pointer rounded-full text-3xl"
					onClick={() => setOpen(true)}
				>
					+
				</div>
				{open && (
					<div className="absolute inset-0 flex items-center justify-center z-40">
						<AddEvent
							handleClose={handleClose}
							defaultDate={defaultDay}
							setFormData={setFormData}
						/>
					</div>
				)}
				{formData && (
					<>
						<h3 className="capitalize font-semibold">{formData?.title}</h3>
						<pre>{formData?.desc}</pre>
						<small>{new Date(formData?.date).toDateString()}</small>
						{/* <small>{da}</small> */}
					</>
				)}
				<Link href={'/'} className="inline-block mt-auto">
					Home
				</Link>
			</main>
		</>
	);
}
