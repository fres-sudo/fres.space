import Image from "next/image";
import React, { JSX, ReactNode } from "react";

interface HeadingProps {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	className: string;
	children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, className, children }) => {
	const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
	const headingId = children?.toString() ?? "";

	return (
		<HeadingTag
			id={headingId}
			className={className}>
			{children}
		</HeadingTag>
	);
};

interface MDXComponentsProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: React.FC<any>;
}

const MDXComponents: MDXComponentsProps = {
	h1: (props) => (
		<Heading
			level={1}
			className="text-4xl font-bold mt-6 mb-4"
			{...props}
		/>
	),
	h2: (props) => (
		<Heading
			level={2}
			className="text-3xl font-semibold mt-6 mb-4 border-b border-muted pb-2"
			{...props}
		/>
	),
	h3: (props) => (
		<Heading
			level={3}
			className="text-2xl font-semibold mt-6 mb-4"
			{...props}
		/>
	),
	h4: (props) => (
		<Heading
			level={4}
			className="text-xl font-semibold mt-6 mb-4"
			{...props}
		/>
	),
	h5: (props) => (
		<Heading
			level={5}
			className="text-lg font-semibold mt-6 mb-4"
			{...props}
		/>
	),
	h6: (props) => (
		<Heading
			level={6}
			className="text-base font-semibold mt-6 mb-4"
			{...props}
		/>
	),
	hr: (props) => (
		<hr
			className="border-t border-muted"
			{...props}
		/>
	),
	p: (props) => (
		<p
			className="mt-4 mb-4"
			{...props}
		/>
	),
	a: (props) => (
		<a
			className="link-underline"
			target="_blank"
			rel="noopener noreferrer nofollow"
			{...props}
			href={`${props.href}?utm_source=gapis.money`}
		/>
	),
	ul: (props) => (
		<ul
			className="list-disc pl-5 mt-0 mb-4"
			{...props}
		/>
	),
	ol: (props) => (
		<ol
			className="list-decimal pl-5 mt-0 mb-4"
			{...props}
		/>
	),
	li: (props) => (
		<li
			className="mb-2"
			{...props}
		/>
	),
	code: (props) =>
		props.rest ? (
			<code
				className="bg-background border px-6 py-4 font-mono"
				{...props}
			/>
		) : (
			<code
				className="bg-toast-300 py-1 my-0.5 px-1 rounded bg-opacity-40"
				{...props}
			/>
		),
	pre: (props) => (
		<pre
			className="bg-background rounded border p-4 overflow-x-auto my-2"
			{...props}
		/>
	),
	blockquote: (props) => (
		<blockquote
			className="pl-4 border-l-4 border-green-400 my-4 text-gray-300 italic"
			{...props}
		/>
	),
	img: (props) => (
		<Image
			className="rounded border-4 border-main"
			alt="Blog Image"
			{...props}
		/>
	),
	strong: (props) => (
		<strong
			className="font-bold"
			{...props}
		/>
	),
	table: (props) => (
		<div className="my-6 w-full overflow-x-auto">
			<table
				className="w-full text-gray-200 bg-gray-800 shadow-lg rounded-lg"
				{...props}
			/>
		</div>
	),
	tr: (props) => (
		<tr
			className="border-t border-muted"
			{...props}
		/>
	),
	th: (props) => (
		<th
			className="px-4 py-2 font-bold text-left bg-gray-900 text-white [&[align=center]]:text-center [&[align=right]]:text-right"
			{...props}
		/>
	),
	td: (props) => (
		<td
			className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
			{...props}
		/>
	),
};

export default MDXComponents;
