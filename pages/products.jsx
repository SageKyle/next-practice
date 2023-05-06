import Head from 'next/head';
import Link from 'next/link';
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
	return (
		<>
			<Head>
				<title>Product Page</title>
			</Head>
			<main className="p-6 w-4/5 mx-auto ">
				<nav className="flex mb-4 capitalize space-x-2">
					<Link href="/">Home</Link>
					<Link href="/">products</Link>
				</nav>
				<br />
				<Products products={allProducts} error={error} />
			</main>
		</>
	);
}
