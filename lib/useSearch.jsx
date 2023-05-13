import { useEffect, useState } from 'react';

export default function useSearch(baseUrl) {
	const [isPending, setIsPending] = useState(false);
	// const [isCancelled, setIsCancelled] = useState(false);
	const [data, setData] = useState(null);
	const [params, setParams] = useState('');

	useEffect(() => {
		if (params.length < 3) setData(null);

		if (params.length >= 3) {
			setIsPending(true);
			fetch(`${baseUrl}/search?q=${params}`)
				.then((res) => res.json())
				.catch((err) => {
					console.log(err.message);
					setData([]);
					setIsPending(false);
				})
				.then((data) => {
					setData(data);
					setIsPending(false);
				});
		}
	}, [params]);

	return { data, setParams, isPending };
}
