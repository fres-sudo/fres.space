import { getAllPosts, getAllTags } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { TagFilter } from "@/components/tag-filter";
import Link from "next/link";
import { CustomCard } from "../_components/custom-card";

export default async function BlogPage({
	searchParams,
}: {
	searchParams: Promise<any>;
}) {
	const posts = await getAllPosts();
	const tags = await getAllTags();
	const currentTag = (await searchParams).tag;

	const filteredPosts = currentTag
		? posts.filter((post) => post.tags.includes(currentTag))
		: posts;

	return (
		<div className="space-y-8">
			<div className="space-y-2 pt-6 px-6">
				<h1 className="text-3xl font-bold">My Space</h1>
				<p className="text-sm text-muted-foreground font-thin">
					Thoughts on development, design, and technology.
				</p>
			</div>

			<div className="flex text-xs items-center px-6">
				Filter by:
				<TagFilter
					tags={tags}
					activeTag={currentTag}
				/>
			</div>

			<div>
				{filteredPosts.map((post) => (
					<Link
						href={`/blog/${post.slug}`}
						key={post.slug}>
						<CustomCard
							key={post.slug}
							title={post.title}
							technology={post.tags}
							date={formatDate(post.date)}
							description={post.excerpt}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
