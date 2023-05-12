import Link from 'next/link';

export default function Products({ products, error }) {
	return (
		<>
			{error && <h4>{error}</h4>}
			{products == '' && <h4 className="my-6 font-bold">No products found!</h4>}
			<section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 my-4">
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
