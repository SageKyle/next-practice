import Link from 'next/link';

export default function Home() {
	// console.log(fetchData);
	return (
		<div className="w-[80%] mx-auto my-6">
			<h3 className="mb-4 text-blue-600 text-2xl capitalize font-bold">
				this is home
			</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit autem
				eum, aliquid cumque id culpa repellendus voluptatem vitae quos est
				pariatur debitis architecto tempora quam quas eveniet omnis quis enim
				perspiciatis numquam exercitationem? Alias delectus amet deserunt odio.
				Ut obcaecati reiciendis libero magnam quasi natus temporibus maxime
				similique cupiditate sunt.
			</p>
			{/* <h2>{fetchData.title}</h2> */}
			<Link href="/products">View Products</Link>
			<br />
			<Link href="/more-content">Read more...</Link>
			<br />
			<br />
			<Link href="/calendar">Calendar</Link>
		</div>
	);
}
