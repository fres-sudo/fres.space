"use client";

import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface TagFilterProps {
	tags: string[];
	activeTag?: string;
}

export function TagFilter({ tags, activeTag }: TagFilterProps) {
	const router = useRouter();

	return (
		<div className="flex gap-2 flex-wrap px-6">
			<Badge
				variant={!activeTag ? "default" : "secondary"}
				className="cursor-pointer"
				onClick={() => router.push("/blog")}>
				All
			</Badge>
			{tags.map((tag) => (
				<Badge
					key={tag}
					variant={activeTag === tag ? "default" : "secondary"}
					className="cursor-pointer"
					onClick={() => router.push(`/blog?tag=${tag}`)}>
					{tag}
				</Badge>
			))}
		</div>
	);
}
