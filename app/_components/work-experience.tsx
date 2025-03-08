import { CustomCard } from "./custom-card";

const workExp = [
	{
		title: "Software Engineer Intern @ Odoo",
		technology: ["Javascript", "Python"],
		date: "Oct 2024 - Jan 2025",
		location: "On-site, Belgium",
		description: [
			"Enhanced Odoo Website Builder with new features, improving user satisfaction for 12M+ global users",
			"Implemented e2e and integration tests reducing reported issues by 30% during development",
			"Developed scalable solutions using JavaScript and Python for the widely used open source website builder",
		],
	},
	{
		title: "Mobile Developer @ Syeew",
		technology: ["Dart", "Flutter"],
		date: "March 2025 - May 2025",
		location: "Remote, Italy",
		description: [
			"Led development of mobile data analysis app for iOS/Android using Flutter with BloC pattern",
			"Created custom data visualization system improving decision-making for non-technical users",
			"Designed user-friendly interface resulting in 20% increased user retention",
		],
	},
	{
		title: "Mobile Developer - Freelance",
		technology: ["Dart", "Flutter"],
		location: "Remote, Italy",
		date: "Oct 2023 - Present",
		description: [
			"Developed performance-oriented cross-platform mobile applications using Flutter",
			"Implemented REST APIs and BloC/Cubit architecture reducing development time by 40%",
			"Delivered customized solutions with 100% client satisfaction rate",
		],
	},
];

export default function WorkExperience() {
	return (
		<section className="space-y-6">
			<div className="flex flex-col">
				{workExp.map((exp) => (
					<CustomCard
						key={exp.title}
						title={exp.title}
						technology={exp.technology}
						date={exp.date}
						location={exp.location}
						description={exp.description}
					/>
				))}
			</div>
		</section>
	);
}
