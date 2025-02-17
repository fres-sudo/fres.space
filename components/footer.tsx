import ThemeToggle from "./theme-toggle";

export default function Footer() {
	return (
		<footer className="relative mt-16 py-8 before:absolute before:-inset-x-32 before:top-0 before:h-px before:bg-[linear-gradient(to_right,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))] md:mt-20">
			<div
				className="before:absolute before:-left-12 before:-top-px before:z-10 before:-ml-px before:size-[3px] before:bg-ring after:absolute after:-right-12 after:-top-px after:z-10 after:-mr-px after:size-[3px] after:bg-ring"
				aria-hidden="true"></div>
			<div className="flex justify-between gap-2 max-sm:flex-col max-sm:text-center">
				<p className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} Fres Space
				</p>
				<div className="flex items-center gap-2">
					<p className="text-sm text-muted-foreground">
						<a
							className="font-medium text-foreground underline decoration-border underline-offset-4 hover:no-underline"
							href="https://linkedin.com/in/francesco-calicchio"
							target="_blank"
							rel="noopener noreferrer">
							Francesco Calicchio
						</a>
						{"'s "}
						Personal Portfolio.
					</p>
					<ThemeToggle />
				</div>
			</div>
		</footer>
	);
}
