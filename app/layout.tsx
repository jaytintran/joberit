/* 
  This layout is for all routes that have a navigation bar, except authentication pages.
*/

import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
	variable: "--font-mona-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Landit",
	description: "An AI Coding Interview Preps Platform ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${monaSans.variable} pattern`}>{children}</body>
		</html>
	);
}
