import { CopyButton } from "./mdx-copy-button";

export const Code: React.FC<{
	snippet: string;
	className?: string;
}> = (props) => {
	const { snippet, className, ...rest } = props;
	console.log("snippet", snippet);
	console.log("rest", rest);
	console.log("className", className);
	return className ? (
		<div className="relative">
			<code
				className="bg-background border px-6 py-4 font-mono block"
				{...rest}
			/>
			<CopyButton content={"rest"} />
		</div>
	) : (
		<code
			className="bg-background px-6 py-4 font-mono block"
			{...rest}
		/>
	);
};
