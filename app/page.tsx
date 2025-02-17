import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import BlogCard from "./_components/blog-card";
import { gloriaHallelujah } from "@/components/header";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default async function Home() {
	const posts = await getAllPosts();
	const latestPosts = posts.slice(0, 3);

	return (
		<div className="space-y-20">
			<section className="space-y-6 flex md:flex-row flex-col items-center justify-between">
				<div className="flex flex-col space-y-4">
					<h1 className={`${gloriaHallelujah.className} text-5xl font-bold`}>
						<span className="text-green-500">Fr</span>anc
						<span className="text-green-500">es</span>co Calicchio
					</h1>
					<p className="text-ms text-muted-foreground max-w-[500px]">
						Software Engineer from Italy 🇮🇹. I help companies build
						production-ready web and mobile applications with modern
						technologies and best practices.
					</p>
					<Link
						href={"https://cal.com/francescocalicchio/30min"}
						target="_blank">
						<ShimmerButton>Book a Call Now</ShimmerButton>
					</Link>
				</div>
				<Image
					src={"/fres graffiti.png"}
					alt="Fres Graffiti"
					width={600}
					height={600}
				/>
			</section>

			<section className="space-y-6 ">
				<div className="flex items-center gap-4 justify-between">
					<h2 className="text-2xl font-bold">Highligthed Posts</h2>

					<Link
						className="text-xs flex gap-2 items-center hover:underline text-muted-foreground"
						href={"/blog"}>
						View all posts
					</Link>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{latestPosts.map((post) => (
						<BlogCard
							key={post.slug}
							post={post}
						/>
					))}
				</div>
			</section>
		</div>
	);
}
