import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import authService from "../../ net/auth";


export async function registerWithEamil(email, password) {
  try {
    await createUserWithEmailAndPassword(authService, email, password).then(
      (e) => { }
    );
  } catch (e) {
    return e.message.replace("Firebase: Error ", "");
  }
}


//Email로 로그인하는 함수
export async function loginWithEamil(email, password) {
  try {
    await signInWithEmailAndPassword(authService, email, password);
  } catch (e) {
    return e.message.replace("Firebase: Error ", "");
  }
}