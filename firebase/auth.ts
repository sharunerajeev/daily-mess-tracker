import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";

// Firebase Authentication Helpers

// Login user
export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error: unknown) {
        const err = error as FirebaseError;
        throw new Error(err.message);
    }
};

// Register user
export const registerUser = async (email: string, password: string) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error: unknown) {
        const err = error as FirebaseError;
        throw new Error(err.message);
    }
};

// Logout user
export const logoutUser = async () => {
    try {
        await auth().signOut();
    } catch (error: unknown) {
        const err = error as FirebaseError;
        throw new Error(err.message);
    }
};

// Authentication State Listener
export const onAuthStateChangedListener = (callback: (user: any) => void) => {
    return auth().onAuthStateChanged(callback);
};
