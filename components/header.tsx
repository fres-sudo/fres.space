import ExternalLink from "@/components/external-link";
import Link from "next/link";
import ProfileAvatar from "./profile-avatar";
import { Gloria_Hallelujah } from "next/font/google";

export const gloriaHallelujah = Gloria_Hallelujah({
	weight: "400",
	subsets: ["latin"],
});

export default function Header() {
	return (
		<header className="relative before:absolute before:-inset-x-32 before:bottom-0 before:h-px before:bg-[linear-gradient(to_right,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))]">
			<div
				className="before:absolute before:-bottom-px before:-left-0 before:z-10 before:-ml-px before:size-[3px] before:bg-ring after:absolute after:-bottom-px after:-right-0 after:z-10 after:-mr-px after:size-[3px] after:bg-ring"
				aria-hidden="true"></div>
			<div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3 px-6">
				<Link
					href="/"
					aria-label="Home">
					<ProfileAvatar />
				</Link>
				<div className="flex items-center gap-4">
					<ExternalLink
						text="GitHub"
						href="https://github.com/fres-sudo"
					/>
					<ExternalLink
						text="Linkedin"
						href="https://linkedin.com/in/francesco-calicchio"
					/>
					<ExternalLink
						text="CV"
						href="/CV_FRANCESCO_CALICCHIO.pdf"
					/>
				</div>
			</div>
		</header>
	);
}
