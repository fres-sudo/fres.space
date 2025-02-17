import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function ExternalLink({
	text,
	href,
}: {
	text: string;
	href: string;
}) {
	return (
		<Link
			className="inline-flex gap-0.5 text-sm hover:underline items-center"
			href={href}
			target="_blank">
			{text}{" "}
			<ArrowUpRight
				className="text-muted-foreground/80"
				size={14}
				aria-hidden="true"
			/>
		</Link>
	);
}
