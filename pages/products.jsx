import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Products from '../components/Products';
import { baseUrl } from '../lib/data';

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
			allProducts: data.products,
			error,
		},
	};
}

export default function products({ allProducts, error }) {
	const [search, setSearch] = useState('');

	return (
		<>
			<Head>
				<title>Product Page</title>
			</Head>
			<main className="p-6 w-4/5 mx-auto ">
				<nav className="flex w-full items-center justify-start mb-4 capitalize gap-2">
					<Link href="/">Home</Link>
					<Link href="/">products</Link>
					<form className="ml-auto inline-block mr-0 w-1/3 h-6 ">
						<input
							type="text"
							placeholder="Search protucts..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="outline-none bg-transparent border-2 border-cyan-500 rounded p-1 text-sm font-light w-full"
						/>
					</form>
				</nav>
				<br />
				<Products products={allProducts} error={error} />
			</main>
		</>
	);
}
