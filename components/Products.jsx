import Link from 'next/link';

export default function Products({ products, error }) {
	return (
		<>
			{error && <h4>{error}</h4>}
			<section className="grid grid-cols-3 gap-2 my-4">
				{!error &&
					products.map((product) => (
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
		</>
	);
}
