import React from "react";
import dayjs from "dayjs";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import TechIcons from "./TechIcons";

const InterviewCard = ({
	interviewId,
	userId,
	role,
	type,
	techstack,
	createdAt,
}: InterviewCardProps) => {
	// const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
	const feedback = null as Feedback | null;
	const formattedDate = dayjs(createdAt || createdAt || Date.now()).format(
		"MMM D, YYYY"
	);
	return (
		<article className="card-border w-[360px] max-sm:w-full min-h-96">
			<figure className="card-interview">
				<div>
					<div className="absolute top-0 right-0 px-2 py-4 min-w-20 text-center w-fit rounded-bl-lg bg-light-800">
						<p className="badge-text">{type}</p>
					</div>

					<Image
						src={getRandomInterviewCover()}
						alt="Cover Image"
						className="rounded-full object-fit size-[36px]"
						width={90}
						height={90}
					></Image>

					<h3 className="mt-5 capitalize">{role} Interview</h3>

					<aside className="flex flex-row gap-5 mt-4 items-center">
						<div className="flex flex-row gap-2">
							<Image
								src="/calendar.svg"
								alt="Calendar"
								width={22}
								height={22}
							/>

							<p>{formattedDate}</p>
						</div>

						<div className="flex flex-row gap-2 items-center">
							<Image src="/star.svg" alt="Star" width={22} height={22} />
							<p>{feedback?.totalScore || "---"}/100</p>
						</div>
					</aside>

					<p className="tracking-tight mt-5">
						{feedback?.finalAssessment ||
							"You haven't taken an interview. Take one to improve your skills."}
					</p>
				</div>

				<div className="flex flex-row justify-between gap-10">
					<TechIcons techStack={techstack} />

					<Button className="btn-primary">
						<Link
							href={
								feedback
									? `/interview/${interviewId}/feedback`
									: `/interview/${interviewId}}`
							}
						>
							{feedback ? "View Feedback" : "Take Interview"}
						</Link>
					</Button>
				</div>
			</figure>
		</article>
	);
};

export default InterviewCard;
