import Link from 'next/link';

export default function Error({ error }) {
	return (
		<main>
			<h1>Oops!</h1>
			<p>Something went wrong: {error.message}</p>
			<p>
				Try refreshing the page or go <Link href="/">back home</Link>
			</p>
		</main>
	);
}
