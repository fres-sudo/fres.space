import { HyperText } from "@/components/ui/hyper-text";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import ExternalLink from "@/components/external-link";

interface Project {
	title: string;
	technology: string[];
	githubLinks: { title: string; link: string }[] | [];
	site?: string;
	description: string;
}

const projects: Project[] = [
	{
		title: "Ygital Cure",
		technology: ["Dart", "Flutter"],
		githubLinks: [],
		site: "https://cure.ygital.com",
		description:
			"A full-scale multi-tenant salon management application serving 10,000+ users with Flutter",
	},
	{
		title: "Pomo",
		technology: ["Dart", "Flutter", "Firebase"],
		githubLinks: [
			{
				title: "Flutter App",
				link: "https//github.com/fres-sudo/pomo",
			},
			{
				title: "Backend",
				link: "https//github.com/fres-sudo/pomo-server",
			},
		],
		description:
			"A productivity Flutter app with BloC architecture, and Dockerized self-hosted backend.",
	},
];

export default function ProjectsComponent() {
	return (
		<div>
			<div className="flex items-center gap-4 justify-between px-6 py-3 border-b">
				<HyperText className="text-md font-thin">Projects</HyperText>
			</div>
			<div className="grid md:grid-cols-2">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
					/>
				))}
			</div>
		</div>
	);
}

export function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="w-full gradient overflow-hidden transition-all duration-300 hover:from-zinc-900 hover:to-black md:border-y-0 rounded-none hover:border-zinc-700">
			<CardHeader>
				<h2 className="text-xl font-semibold hover:underline decoration-wavy decoration-foreground/20 tracking-tight">
					{project.title}
				</h2>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-2">
					{project.technology.map((tag) => (
						<Badge
							key={tag}
							variant="outline">
							{" "}
							<Tag className="w-3 h-3 mr-1" />
							{tag}
						</Badge>
					))}
				</div>
				<p className="text-muted-foreground line-clamp-3">
					{project.description}
				</p>
			</CardContent>
			<CardFooter className="flex flex-col items-start space-y-2 ">
				<div className="flex flex-wrap gap-2">
					{project.githubLinks.map((link) => (
						<ExternalLink
							key={link.title}
							href={link.link}
							text={link.title}
						/>
					))}
				</div>
				{project.site && (
					<div className="">
						<ExternalLink
							href={project.site}
							text="View Site"
						/>
					</div>
				)}
			</CardFooter>
		</Card>
	);
}
