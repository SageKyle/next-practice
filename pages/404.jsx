import Link from 'next/link';

export default function Error404() {
	return (
		<main className="h-screen w-screen flex flex-col items-center justify-center text-center">
			<h1 className="font-bold text-3xl">Oops!</h1>
			<p className="my-4">
				Something went wrong or the page you're looking for does not. exist
			</p>
			<Link href="/" className="capitalize">
				back home
			</Link>
		</main>
	);
}
