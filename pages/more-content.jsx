import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { baseUrl } from '../lib/data';

export async function getServerSideProps() {
	const num = Math.floor(Math.random() * (100 - 1) + 1);
	const json = await fetch(`${baseUrl}/${num}`);
	const data = await json.json();

	return {
		props: {
			fetchData: data,
		},
	};
}

export default function More({ fetchData }) {
	// console.log(fetchData);
	return (
		<>
			<Head>
				<title>Read More..</title>
			</Head>
			<main>
				{/* <h1>This is a test</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta
					harum hic nemo consectetur, ex placeat voluptas aliquam odit
					consequatur recusandae optio saepe totam id voluptatem quis facere.
					Praesentium, nisi? A voluptate doloribus illum eligendi! Sequi dolorem
					perferendis corporis at?
				</p> */}
				<Image
					width={50}
					height={50}
					priority
					alt={fetchData.title}
					src={fetchData.thumbnail}
				/>
				<h1>{fetchData.title}</h1>
				<small>{fetchData.description}</small>
				{fetchData.images.map((img) => (
					<Image
						key={img}
						width={150}
						height={150}
						alt={fetchData.title}
						src={img}
					/>
				))}
				<br />
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
					consequatur, exercitationem sint aut itaque obcaecati fugiat odit
					nesciunt animi distinctio.
				</p>
				<Link href="/">Back Home</Link>
			</main>
		</>
	);
}
