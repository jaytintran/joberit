import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<>
			<section className="card-cta">
				<div className="flex flex-col gap-6 max-w-lg">
					<h2 className="text-2xl font-normal text-white">
						Get Ready for Tech Interviews with AI-Powered Prep & Feedback
					</h2>
					<p className="text-lg">
						Practice faster, smarter, not harder with A.I.
					</p>

					<Button asChild className="btn-primary max-sm:w-full">
						<Link href="/interview">Start an Interview</Link>
					</Button>
				</div>

				<Image src="/robot.png" alt="Robot" width={500} height={500} />
			</section>
		</>
	);
};

export default Page;
