import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import { baseUrl } from '../../lib/data';

export async function getStaticPaths() {
	const json = await fetch(`${baseUrl}?limit=100`);
	const data = await json.json();
	const paths = data.products.map((item) => {
		return {
			params: { id: `${item.id}` },
		};
	});

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

	// const data = fetchProduct(params.id);

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
			{error && <h4>{error}</h4>}

			{!error && (
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

					<article className="p-6 w-4/5 mx-auto ">
						<Navbar />
						{/* <Image
					width={50}
					height={50}
					priority
					alt={product.title}
					src={product.thumbnail}
				/> */}
						<h1>{product.title}</h1>
						<small>{product.description}</small>
						<section className="grid grid-cols-2 gap-4 my-4">
							{product.images.map((img) => (
								<img
									className="w-full h-full bg-cyan-600 p-2 md:p-4 object-fill rounded-md"
									key={img}
									// width={150}
									// height={150}
									alt={product.title}
									src={img}
								/>
							))}
						</section>
					</article>
				</>
			)}
		</>
	);
}
