import Navbar from '../../../components/navbar';
import { baseUrl } from '../../../lib/data';

// export async function getStaticPaths() {
// 	const json = await fetch(`${baseUrl}`);
// 	const data = await json.json();
// 	const paths = data.products.map((item) => {
// 		return {
// 			params: { id: `${item.id}` },
// 		};
// 	});

// 	// const paths = getPath();

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

export async function getServerSideProps({ params }) {
	let error;
	let data = [];

	try {
		const json = await fetch(`${baseUrl}/search?q=${params.search}`);
		data = await json.json();

		error = null;
	} catch (err) {
		error = err.message;
	}

	return {
		props: {
			result: data.products,
			error,
		},
	};
}

export default async function searchResult({ result }) {
	// const res = await fetch(`${baseUrl}/search?q=${params.search}`);
	// const result = await res.json();

	console.log(result);

	return (
		<>
			<Navbar />
			<h4>This is search result</h4>
			{result && console.log(result)}
		</>
	);
}
