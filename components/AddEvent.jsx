// import React from 'react';

export default function AddEvent() {
	return (
		<div>
			<h1>New Event</h1>
			<input type="text" placeholder="Title" />
			<textarea name="desc" id="desc" placeholder="Details"></textarea>
			<input type="date" name="date" id="date" />
		</div>
	);
}
