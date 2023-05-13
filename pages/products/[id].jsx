import Head from 'next/head';
import Navbar from '../../components/navbar';
import { baseUrl } from '../../lib/data';

export async function getStaticPaths() {
	let paths;
	try {
		const json = await fetch(`${baseUrl}?limit=100`);
		const data = await json.json();
		paths = data.products.map((item) => {
			return {
				params: { id: `${item.id}` },
			};
		});
	} catch (err) {
		paths = [];
	}

	// const paths = getPath();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	let error;
	let data = [];

	try {
		const json = await fetch(`${baseUrl}/${params.id}`);
		data = await json.json();

		error = null;
	} catch (err) {
		error = err.message;
	}

	return {
		props: {
			product: data,
			error,
		},
	};
}

export default function product({ product, error }) {
	return (
		<>
			{error && (
				<main className="m-4">
					<h4 className="font-bold">{error}.</h4>
					<p className="mt-2">
						Check your internet connection and try refreshing the page.
					</p>
				</main>
			)}

			{!error && product && (
				<>
					<Head>
						<title>{product.title}</title>
						<link
							rel="icon"
							type="image/png"
							sizes="512x512"
							href={product.thumbnail}
						/>
					</Head>

					<main className="p-6 w-4/5 mx-auto ">
						<Navbar />

						<h1>{product.title}</h1>
						<small>{product.description}</small>
						<section className="grid grid-cols-2 gap-4 my-4">
							{product.images.map((img) => (
								<img
									className="w-full h-full bg-cyan-600 p-2 md:p-4 object-fill rounded-md"
									key={img}
									alt={product.title}
									src={img}
								/>
							))}
						</section>
					</main>
				</>
			)}
		</>
	);
}
