"use client";
import { CheckCheck, Copy } from "lucide-react";
import * as React from "react";
import { Button } from "../ui/button";

type Props = {
	content: string;
};

type State = {
	copied: boolean;
};

const initialState = {
	copied: false,
};

export const CopyButton = ({ content }: Props) => {
	const timeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined);
	const [state, setState] = React.useState<State>(initialState);

	const onClick = React.useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			setState((x) => ({ ...x, copied: false }));
		}

		copy(content);

		setState((x) => ({ ...x, copied: true }));
		timeoutRef.current = setTimeout(
			() => setState((x) => ({ ...x, copied: false })),
			1000
		);
	}, [content]);

	return (
		<Button
			variant="outline"
			className="absolute top-2 right-2"
			onClick={onClick}>
			{state.copied ? <CheckCheck /> : <Copy />}
		</Button>
	);
};
async function copy(content: string): Promise<void> {
	try {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			await navigator.clipboard.writeText(content);
		} else {
			// Fallback method for older browsers
			const textArea = document.createElement("textarea");
			textArea.value = content;
			textArea.style.position = "fixed";
			textArea.style.left = "-999999px";
			textArea.style.top = "-999999px";
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
			document.execCommand("copy");
			document.body.removeChild(textArea);
		}
	} catch (error) {
		console.error("Failed to copy content: ", error);
	}
}
