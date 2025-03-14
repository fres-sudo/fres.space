import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const font = Geist_Mono({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

export const viewport: Viewport = {
	initialScale: 1,
	width: "device-width",
	maximumScale: 1,
	viewportFit: "cover",
};

export const metadata: Metadata = {
	metadataBase: new URL("https://fres.space"),
	title: "Fres Space",
	description:
		"Francesco Calicchio's personal portfolio. A place where I share my thoughts, projects, and experiences.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body
				className={`${font.className} antialiased has-[[data-home]]:bg-zinc-50 dark:has-[[data-home]]:bg-zinc-950 before:[&:has(:not([data-home]))]:absolute before:[&:has(:not([data-home]))]:inset-x-0 before:[&:has(:not([data-home]))]:h-[400px] before:[&:has(:not([data-home]))]:bg-gradient-to-b before:[&:has(:not([data-home]))]:from-zinc-100 dark:before:[&:has(:not([data-home]))]:content-[]`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div className="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
						<div className="relative mx-auto w-full max-w-5xl before:absolute before:inset-y-0 before:-left-0 before:w-px before:bg-[linear-gradient(to_bottom,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))] after:absolute after:inset-y-0 after:-right-0 after:w-px after:bg-[linear-gradient(to_bottom,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))]">
							<div className="relative flex min-h-screen flex-col">
								<Header />
								<main className="grow">{children}</main>
								<Footer />
							</div>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
