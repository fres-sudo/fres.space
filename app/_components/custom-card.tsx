import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function CustomCard({
	title,
	technology,
	location,
	date,
	description,
}: {
	title: string;
	technology: string[];
	date: string;
	location?: string;
	description: string[] | string;
}) {
	return (
		<Card className="w-full overflow-hidden transition-all duration-300 hover:from-zinc-900 hover:to-black border-t border-b rounded-none hover:border-zinc-700">
			<CardHeader>
				<h2 className="text-xl font-semibold tracking-tight">{title}</h2>
			</CardHeader>
			<CardContent>
				<div className="flex items-center text-muted-foreground text-sm mb-4 ">
					<CalendarDays className="w-4 h-4 mr-2" />
					{date}
					{location && (
						<>
							<Separator
								orientation="vertical"
								className="h-8 mx-6"
							/>
							<MapPin className="w-4 h-4 mr-2" />
							{location}
						</>
					)}
					<Separator
						orientation="vertical"
						className="h-8 mx-6"
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
						{technology.map((technology) => (
							<Badge
								variant="outline"
								className="w-min"
								key={technology}>
								<Tag className="w-3 h-3 mr-1" />
								{technology}
							</Badge>
						))}
					</div>
				</div>
				<p className="text-muted-foreground ">
					{Array.isArray(description)
						? description.map((el) => (
								<div key={el}>
									{" "}
									- {el}
									<br />
								</div>
							))
						: description}
				</p>
			</CardContent>
		</Card>
	);
}
