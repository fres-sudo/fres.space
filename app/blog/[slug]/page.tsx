import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";
import MDXComponents from "@/components/blog/mdx-components";
import { Separator } from "@/components/ui/separator";

interface PostPageProps {
	params: Promise<any>;
}

const options = {
	parseFrontmatter: true,
	mdxOptions: {
		remarkPlugins: [remarkGfm, remarkMath],
		rehypePlugins: [
			[
				rehypePrettyCode,
				{
					keepBackground: false,
					defaultLang: {
						block: "typescript",
						inline: "javascript",
					},
				},
			],
		],
	},
};

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		return {};
	}

	return {
		title: post.title,
		description: post.excerpt,
	};
}

export default async function PostPage({ params }: PostPageProps) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		notFound();
	}
	return (
		<article className="mx-auto max-w-3xl px-6 3xl:px-0 space-y-8 pt-12">
			<div className="space-y-4">
				<h1 className="text-4xl font-bold">{post.title}</h1>
				<p className="text-muted-foreground text-sm">{post.excerpt}</p>
				<Separator />
				<p className="text-muted-foreground">{formatDate(post.date)}</p>
				<div className="flex gap-2">
					{post.tags.map((tag) => (
						<Badge
							key={tag}
							variant="secondary">
							{tag}
						</Badge>
					))}
				</div>
			</div>
			<div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
				<MDXRemote
					source={post.content}
					components={MDXComponents}
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					options={options as any}
				/>
			</div>
		</article>
	);
}
