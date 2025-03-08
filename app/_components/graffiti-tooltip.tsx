import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function GraffitiTooltip({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent className="py-3">
					<div className="relatives">
						<Image
							className="rounded"
							src="/graffiti-pic.jpeg"
							width={382}
							height={216}
							alt="Content image"
						/>
						<div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
							<Badge className="w-20 mb-2">Spin-Off</Badge>
							<p className=" text-xs">
								I used to be a graffiti artist before becoming a software
								engineer, and I still love to draw and paint in my free time.{" "}
								<br />
								&quot;Fres&quot; was my writer nickname, and people still call
								me like that.
							</p>
						</div>
					</div>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
