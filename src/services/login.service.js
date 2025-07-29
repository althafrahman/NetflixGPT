import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Adjust the import path as necessary

export async function registerUser(email, password, setError) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // User registered successfully
        return userCredential.user;
    } catch (error) {
        // Handle errors here
        console.error("Error registering user:", error);
        setError(error.message)
    }
}

export async function loginUser (email, password, setError) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // User logged in successfully
        return userCredential.user;
    } catch (error) {
        // Handle errors here
        console.error("Error logging in user:", error);
        setError(error.message)
    }
}