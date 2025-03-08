"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { gloriaHallelujah } from "@/components/header";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import GraffitiTooltip from "./graffiti-tooltip";

const Hero = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between my-4">
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", bounce: 0.7, duration: 1.5 }}
				className="flex flex-col space-y-6 p-6">
				<h1 className={`${gloriaHallelujah.className} text-5xl font-bold`}>
					Software Engineer
				</h1>
				<p className="text-sm text-muted-foreground max-w-[500px]">
					I&apos;m Francesco Calicchio, Software Engineer from Italy 🇮🇹. I help
					companies build production-ready web and mobile applications with
					modern technologies and best practices.
				</p>
				<Link
					href={"https://cal.com/francescocalicchio/30min"}
					target="_blank">
					<InteractiveHoverButton className="text-sm">
						Book a call
					</InteractiveHoverButton>
				</Link>
			</motion.div>
			<GraffitiTooltip>
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", bounce: 0.8, duration: 2, delay: 0.2 }}>
					<Image
						src={"/fres-graffiti.png"}
						alt="Fres Graffiti"
						width={600}
						height={300}
					/>
				</motion.div>
			</GraffitiTooltip>
		</div>
	);
};

export default Hero;
