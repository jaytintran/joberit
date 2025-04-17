"use client";

import { cn } from "@/constants";
import { getTechLogos } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TechIcons = ({ techStack }: TechIconProps) => {
	const [logos, setLogos] = useState<Array<{ tech: string; url: string }>>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchLogos = async () => {
			try {
				const result = await getTechLogos(techStack);
				setLogos(result);
			} catch (error) {
				console.error("Failed to load tech logos:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchLogos();
	}, [techStack]);

	return (
		<div className="flex flex-row">
			{isLoading ? (
				<span className="text-sm text-light-400">Loading...</span>
			) : logos.length > 0 ? (
				logos.slice(0, 3).map((logo, index) => (
					<div
						key={logo.tech}
						className={cn(
							"relative flex-center group bg-dark-200 rounded-full p-3 max-sm:w-fit max-sm:p-2 text-center",
							index >= 1 && "-ml-3 border border-dark-100"
						)}
					>
						<span className="tech-tooltip">{logo.tech}</span>
						<Image
							key={logo.tech}
							src={logo.url}
							alt={logo.tech}
							className="max-sm:w-8 max-sm:h-8 size-5"
							width={30}
							height={30}
						/>
					</div>
				))
			) : (
				<span className="text-sm text-light-400">No tech stack</span>
			)}
		</div>
	);
};

export default TechIcons;
