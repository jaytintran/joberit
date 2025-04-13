/* 
  This is the big mother root layout wthat wraps the (root), (auth), and everything.
*/

import type { Metadata } from "next";
import { Mona_Sans, Teko } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
	variable: "--font-mona-sans",
	subsets: ["latin"],
});

const tekoSans = Teko({
	variable: "--font-teko",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Joberit",
	description: "An AI Coding Interview Preps Platform ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${monaSans.variable} bg-pattern`}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
