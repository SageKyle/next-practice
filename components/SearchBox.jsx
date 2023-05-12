'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBox() {
	const [search, setSearch] = useState('');

	const params = useRouter();

	function getSearch(e) {
		e.preventDefault();

		console.log(params);
		params.push(`products/search?q=${search}`);
	}

	return (
		<>
			<form
				onSubmit={(e) => getSearch(e)}
				className="ml-auto inline-block mr-0 w-1/2 md:w-1/3 h-6 "
			>
				<input
					type="text"
					placeholder="Search..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="outline-none bg-transparent border-2 border-cyan-500 rounded p-1 text-sm font-light w-full placeholder:font-thin placeholder:text-sm"
				/>
			</form>
		</>
	);
}
