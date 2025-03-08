import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import GridCard from "./_components/blog-card";
import { ArrowRight } from "lucide-react";
import Hero from "./_components/hero";
import { HyperText } from "@/components/ui/hyper-text";
import WorkExperience from "./_components/work-experience";
import ProjectsComponent from "./_components/projects";

export default async function Home() {
	const posts = await getAllPosts();
	const latestPosts = posts.slice(0, 3).reverse();

	return (
		<div>
			<Hero />
			<section className="border-t">
				<div className="flex items-center gap-4 justify-between px-6 py-3 border-b">
					<HyperText className="text-md font-thin">Highlighted Posts</HyperText>

					<Link
						className="text-xs flex gap-1 items-center hover:underline text-muted-foreground"
						href={"/blog"}>
						View all posts <ArrowRight size={16} />
					</Link>
				</div>

				<div className="grid md:grid-cols-3">
					{latestPosts.map((post) => (
						<GridCard
							key={post.slug}
							post={post}
						/>
					))}
				</div>
			</section>
			<div className="flex items-center gap-4 justify-between px-6 py-3 border-t">
				<HyperText className="text-md font-thin">Work Experience</HyperText>
			</div>
			<WorkExperience />
			<ProjectsComponent />
		</div>
	);
}
