import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
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

				<Image
					src="/robot.png"
					alt="Robot"
					width={500}
					height={500}
					className="max-sm:hidden"
				/>
			</section>

			<section className="flex flex-col gap-6 mt-8">
				<h2>Your Interviews</h2>

				<div className="interviews-section">
					{/* <p>You haven&apos;t taken any interview yet.</p> */}
					{dummyInterviews.map((interview, index) => {
						return <InterviewCard key={interview.id} {...interview} />;
					})}
				</div>
			</section>

			<section className="flex flex-col gap-6 mt-8">
				<h2>Take an Interview</h2>

				<div className="interviews-section">
					<p>There&apos;re no interview available.</p>
				</div>
			</section>
		</>
	);
};

export default Page;
