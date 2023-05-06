import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { baseUrl } from '../../lib/data';

export async function getStaticPaths() {
	const json = await fetch(`${baseUrl}`);
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
	const json = await fetch(`${baseUrl}/${params.id}`);
	const data = await json.json();

	// const data = fetchProduct(params.id);

	return {
		props: {
			product: data,
		},
	};
}

export default function product({ product }) {
	return (
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
				<nav className="flex mb-4 capitalize underline decoration-cyan-500 space-x-2">
					<Link href="/">Home</Link>
					<Link href="/products">products</Link>
				</nav>
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
							className="w-full bg-cyan-600 p-4 object-contain rounded-md"
							key={img}
							// width={150}
							// height={150}
							alt={product.title}
							src={img}
						/>
					))}
				</section>

				{/* <Link href="/">Home</Link> */}
			</article>
		</>
	);
}
