import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getAllTags } from "@/lib/mdx";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { TagFilter } from "@/components/tag-filter";

export default async function BlogPage({
	searchParams,
}: {
	searchParams: { tag?: string };
}) {
	const posts = await getAllPosts();
	const tags = await getAllTags();

	const filteredPosts = searchParams.tag
		? posts.filter((post) => post.tags.includes(searchParams.tag!))
		: posts;

	return (
		<div className="space-y-8">
			<div className="space-y-2">
				<h1 className="text-4xl font-bold">Blog</h1>
				<p className="text-xl text-muted-foreground font-thin">
					Thoughts on development, design, and technology.
				</p>
			</div>

			<TagFilter
				tags={tags}
				activeTag={searchParams.tag}
			/>

			<div className="space-y-4">
				{filteredPosts.map((post, index) => (
					<>
						{index > 0 && <div className="border-t my-6" />}
						<Card
							key={post.slug}
							className="p-6 border-none hover:bg-muted">
							<article className="space-y-4">
								<div className="space-y-2">
									<div className="flex gap-2">
										{post.tags.map((tag) => (
											<Badge
												key={tag}
												variant="secondary">
												{tag}
											</Badge>
										))}
									</div>
									<h2 className="text-2xl font-bold">
										<Link
											href={`/blog/${post.slug}`}
											className="hover:underline">
											{post.title}
										</Link>
									</h2>
									<p className="text-sm text-muted-foreground">
										{formatDate(post.date)}
									</p>
								</div>
								<p className="text-muted-foreground">{post.excerpt}</p>
							</article>
						</Card>
					</>
				))}
			</div>
		</div>
	);
}
