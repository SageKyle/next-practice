import Link from 'next/link';
// import SearchBox from './SearchBox';

export default function Navbar() {
	return (
		<nav className="flex w-full h-8 mb-4 items-baseline capitalize gap-2">
			<Link href="/" className="inline-block mt-auto">
				Home
			</Link>
			<Link href="/products" className="inline-block mt-auto">
				products
			</Link>
			{/* <SearchBox /> */}
		</nav>
	);
}
