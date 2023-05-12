import { useEffect, useState } from 'react';

export default function useSearch(baseUrl) {
	const [isPending, setIsPending] = useState(false);
	// const [isCancelled, setIsCancelled] = useState(false);
	const [data, setData] = useState(null);
	const [params, setParams] = useState('');

	async function fetchData(url) {
		const json = await fetch(url);
		const data = await json.json();

		return data;
	}

	useEffect(() => {
		if (params.length < 3) setData(null);

		if (params.length >= 3) {
			setIsPending(true);
			fetch(`${baseUrl}/search?q=${params}`)
				.then((res) => res.json())
				.then((data) => {
					setData(data.products);
					setIsPending(false);
				});
		}
	}, [params]);

	return { data, setParams, isPending };
}
