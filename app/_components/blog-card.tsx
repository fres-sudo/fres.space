import { CalendarDays, Tag } from "lucide-react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function GridCard({ post }: { post: Post }) {
	return (
		<Card className="w-full gradient  overflow-hidden transition-all duration-300 hover:from-zinc-900 hover:to-black md:border-y-0 rounded-none hover:border-zinc-700">
			<CardHeader>
				<Link href={`/blog/${post.slug}`}>
					<h2 className="text-xl font-semibold hover:underline decoration-wavy decoration-foreground/20 tracking-tight">
						{post.title}
					</h2>
				</Link>
			</CardHeader>
			<CardContent>
				<div className="flex items-center text-muted-foreground text-sm mb-4">
					<CalendarDays className="w-4 h-4 mr-1" />
					{formatDate(post.date)}
				</div>
				<p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
			</CardContent>
			<CardFooter className="flex flex-col items-start space-y-2">
				<div className="flex flex-wrap gap-2">
					{post.tags.map((tag) => (
						<Badge
							key={tag}
							variant="outline">
							{" "}
							<Tag className="w-3 h-3 mr-1" />
							{tag}
						</Badge>
					))}
				</div>
			</CardFooter>
		</Card>
	);
}

export function BlogCardOld({ post }: { post: Post }) {
	return (
		<Card className="w-full max-w-md overflow-hidden transition-all duration-300 bg-gradient-to-br from-black to-zinc-900 hover:from-zinc-900 hover:to-black border-zinc-800 hover:border-zinc-700">
			<CardHeader>
				<Link href={`/blog/${post.slug}`}>
					<h2 className="text-2xl font-semibold hover:underline decoration-wavy decoration-foreground/20 text-white tracking-tight">
						{post.title}
					</h2>
				</Link>
			</CardHeader>
			<CardContent>
				<div className="flex items-center text-gray-400 text-sm mb-4">
					<CalendarDays className="w-4 h-4 mr-1" />
					{formatDate(post.date)}
				</div>
				<p className="text-muted-foreground line-clamp-3">{post.content}</p>
			</CardContent>
			<CardFooter className="flex flex-col items-start space-y-2">
				<div className="flex flex-wrap gap-2">
					{post.tags.map((tag) => (
						<Badge
							key={tag}
							variant="outline">
							{" "}
							<Tag className="w-3 h-3 mr-1" />
							{tag}
						</Badge>
					))}
				</div>
			</CardFooter>
		</Card>
	);
}
