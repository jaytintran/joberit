import Link from "next/link";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="root-layout">
			<nav>
				<Link href="/" />
			</nav>
			{children}
		</div>
	);
};

export default RootLayout;
