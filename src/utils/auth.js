import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/init";
export async function doSignInWithGoogle(){
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    return result;
}

export function doSignOut(){
    return auth.signOut();
}