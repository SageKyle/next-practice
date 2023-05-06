export const baseUrl = 'https://dummyjson.com/products';

export async function fetchProduct(id) {
	const json = await fetch(`${baseUrl}/${id}`);
	const data = await json.json();
	// .then((data) => data);

	return data;
}

export async function getPath() {
	const json = await fetch(baseUrl);
	const data = await json.json();

	const paths = await data.products.map((item) => ({
		params: {
			id: `${item.id}`,
		},
	}));

	return paths;
}
