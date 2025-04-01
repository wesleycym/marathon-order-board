import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const signInWithGoogle = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
};
// for sign in
export const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};
// for sign up
export const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signOut = () => {
    return  auth.signOut();
};

// if this method has error, use typescript to fix it
export const onAuthStateChanged = (callback) => {
    return onAuthStateChanged(auth, callback);
};