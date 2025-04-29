"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function signUp(params: SignUpParams) {
	const { uid, name, email, password } = params;

	try {
		const userRecord = await db.collection("users").doc(uid).get();

		if (userRecord.exists) {
			return {
				success: false,
				message: "User already exists. Pleaes sign in instead",
			};
		}

		await db.collection("users").doc(uid).set({
			name,
			email,
		});

		return {
			success: true,
			message: "User created successfully",
		};
	} catch (e: any) {
		console.error("Error in creating the user", e);

		if (e.code === "auth/email-already-exists") {
			return {
				success: false,
				message: "This email already exists",
			};
		}

		return {
			success: false,
			message: "Something went wrong, fail to create an account",
		};
	}
}

export async function signIn(params: SignInParams) {
	const { email, idToken } = params;

	try {
		const userRecord = await auth.getUserByEmail(email);

		if (!userRecord) {
			return {
				success: false,
				message: "User does not exist. Please sign up instead",
			};
		}

		await setSessionCookie(idToken);
	} catch (e: any) {
		console.error("Error", e);

		return {
			success: false,
			message: "Something went wrong, fail to log in the account",
		};
	}
}

export async function setSessionCookie(idToken: string) {
	const cookieStore = await cookies();
	const sessionCookie = await auth.createSessionCookie(idToken, {
		expiresIn: ONE_WEEK,
	});

	cookieStore.set("session", sessionCookie, {
		maxAge: ONE_WEEK,
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		path: "/",
		sameSite: "lax",
	});
}
