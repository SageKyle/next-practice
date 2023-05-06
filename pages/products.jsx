import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import { baseUrl } from '../lib/data';

export async function getStaticProps() {
	// const num = Math.floor(Math.random() * (100 - 1) + 1);
	const json = await fetch(`${baseUrl}`);
	const data = await json.json();

	return {
		props: {
			allProducts: data,
		},
	};
}

export default function products({ allProducts }) {
	// console.log(allProducts);
	return (
		<>
			<Head>
				<title>Product Page</title>
			</Head>
			<main className="p-6 w-4/5 mx-auto ">
				<nav className="flex mb-4 capitalize space-x-2">
					<Link href="/">Home</Link>
					{/* <Link href="/">products</Link> */}
				</nav>
				<br />
				<section className="grid grid-cols-3 gap-2 my-4">
					{allProducts.products.map((product) => (
						<Link
							href={`/products/${product.id}`}
							key={product.id}
							className="p-2 border-2 rounded border-slate-700"
						>
							<h1>{product.title}</h1>
							<small>{product.description}</small>
						</Link>
					))}
				</section>
			</main>
		</>
	);
}
