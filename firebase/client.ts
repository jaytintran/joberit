// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAMtSlTwIokt7TlYGyQdAuuGhYwABYZsok",
	authDomain: "joberit-53a76.firebaseapp.com",
	projectId: "joberit-53a76",
	storageBucket: "joberit-53a76.firebasestorage.app",
	messagingSenderId: "989080124098",
	appId: "1:989080124098:web:a90f24f6020409a836595b",
	measurementId: "G-2QFFV86C7Y",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
