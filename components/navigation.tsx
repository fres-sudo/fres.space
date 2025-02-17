"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LinkIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Gravitas_One } from "next/font/google";

const gravitasOne = Gravitas_One({ weight: "400", subsets: ["latin"] });

const NavBar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrollDirection, setScrollDirection] = useState("up");

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY) {
				setScrollDirection("down");
			} else {
				setScrollDirection("up");
			}
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed left-0 right-0 top-0 z-20 mx-auto my-6  flex max-w-5xl items-center justify-between rounded-full border-2 border-white/[0.15] px-4 py-4 shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] backdrop-blur-[2px] transition-transform duration-700 sm:px-6 ${
				scrollDirection === "down" ? "-translate-y-[150%]" : "translate-y-0"
			}`}>
			<h1 className={`${gravitasOne.style}`}>fres</h1>
			<div className="flex flex-row items-center">
				<div className="mr-10 hidden items-center space-x-8 lg:flex">
					<Link
						href="#features"
						className="underline-offset-4 hover:underline">
						Features
					</Link>
					<Link
						href="#pricing"
						className="underline-offset-4 hover:underline">
						Pricing
					</Link>
					<Link
						href="#about"
						className="underline-offset-4 hover:underline">
						About
					</Link>
					<Link
						href="#FAQ"
						className="underline-offset-4 hover:underline">
						FAQ
					</Link>
					<Link
						href="#contact"
						className="underline-offset-4 hover:underline">
						Contact
					</Link>
				</div>
				<Link href="https://app.scover.app/signin">
					<Button
						variant={"outline"}
						className="mr-2 hidden sm:flex">
						Log in
					</Button>
				</Link>
				<Link href="https://app.scover.app">
					<Button className="hidden sm:flex ">Start a demo</Button>
				</Link>
				<div
					className="border-xl ml-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded border lg:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<Menu />
				</div>
				<div
					className={`fixed right-0 top-0 h-full w-64 transform bg-black transition-transform ${
						isMenuOpen ? "translate-x-0" : "translate-x-full"
					} z-50 sm:hidden`}>
					<div className="flex h-full flex-col p-6">
						{/* Top Section with Close Icon and App Icon */}
						<div className="flex items-center justify-between">
							{/* App Icon (no decoration) */}
							<h1 className={`${gravitasOne.style}`}>fres</h1>
							{/* Close Icon */}
							<div
								className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white border-opacity-30"
								onClick={toggleMenu}>
								<X className="text-white" />
							</div>
						</div>

						{/* Divider */}
						<Separator className="my-4" />

						{/* Navigation Links with Link Icon */}
						<nav className="flex flex-col space-y-4">
							<Link
								href="#features"
								onClick={toggleMenu}
								className="flex items-center gap-2 underline-offset-4 hover:underline">
								<LinkIcon className="mr-2 h-4 w-4" />
								Features
							</Link>
							<Link
								href="#pricing"
								onClick={toggleMenu}
								className="flex items-center gap-2 underline-offset-4 hover:underline">
								<LinkIcon className="mr-2 h-4 w-4" />
								Pricing
							</Link>
							<Link
								href="#about"
								onClick={toggleMenu}
								className="flex items-center gap-2 underline-offset-4 hover:underline">
								<LinkIcon className="mr-2 h-4 w-4" />
								About
							</Link>
							<Link
								href="#FAQ"
								onClick={toggleMenu}
								className="flex items-center gap-2 underline-offset-4 hover:underline">
								<LinkIcon className="mr-2 h-4 w-4" />
								FAQ
							</Link>
							<Link
								href="#contact"
								onClick={toggleMenu}
								className="mb-4 flex items-center gap-2 underline-offset-4 hover:underline">
								<LinkIcon className="mr-2 h-4 w-4" />
								Contact
							</Link>

							<Link
								href={
									process.env.NODE_ENV !== "production"
										? "http://app.localhost:3000/signin"
										: "https://app.scover.app/signin"
								}>
								{" "}
								<Button
									variant={"outline"}
									className="w-full">
									Log in
								</Button>
							</Link>
							<Link
								href={
									process.env.NODE_ENV !== "production"
										? "http://app.localhost:3000/signin"
										: "https://app.scover.app/signin"
								}>
								{" "}
								<Button className="w-full">Start a demo</Button>
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
