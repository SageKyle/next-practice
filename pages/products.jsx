'use client';
import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import SearchIcon from '../assets/search.png';
import Navbar from '../components/navbar';

import Products from '../components/Products';
import { baseUrl } from '../lib/data';
import useSearch from '../lib/useSearch';

export async function getStaticProps() {
	let error;
	let data = [];

	try {
		const json = await fetch(`${baseUrl}`);
		data = await json.json();

		error = null;
	} catch (err) {
		error = err.message;
	}

	return {
		props: {
			result: data,
			error,
		},
	};
}

export default function products({ result, error }) {
	const { data: searchResult, setParams, isPending } = useSearch(baseUrl);
	const [search, setSearch] = useState('');

	function getSearch(e) {
		e.preventDefault();
		setParams(search);
	}

	return (
		<>
			<Head>
				<title>Product Page</title>
			</Head>
			<main className="p-6 w-4/5 mx-auto relative">
				<Navbar />
				<br />
				<form
					onSubmit={(e) => getSearch(e)}
					className="ml-auto flex items-center absolute right-6 top-6 mr-0 w-[40%] max-w-2xl md:w-1/3 h-6 gap-1"
				>
					<input
						type="text"
						placeholder="Search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="outline-none bg-transparent border-2 border-cyan-500 rounded p-1 text-sm font-light w-full placeholder:font-thin placeholder:text-sm"
					/>
					<button>
						<Image
							className="h-5/6 bg-cyan-600 p-2 object-contain rounded"
							src={SearchIcon}
							width={40}
							height={40}
							alt="search"
						/>
					</button>
				</form>
				{isPending && <h4 className="my-6 font-bold">Loading...</h4>}
				{searchResult && (
					<Products products={searchResult.products} error={error} />
				)}
				{!searchResult && <Products products={result.products} error={error} />}
			</main>
		</>
	);
}
