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

type RegisterProps = {
  email: string;
  password: string;
};
/*

export async function registerWithEamil({ email, password }: RegisterProps) {
  try {
    await createUserWithEmailAndPassword(authService, email, password).then(
      (e: React.ChangeEvent<HTMLInputElement>) => { }
    );
  } catch (e: React.ChangeEvent<HTMLInputElement>) {
    return e.message.replace("Firebase: Error ", "");
  }
}


//Email로 로그인하는 함수
export async function loginWithEamil({ email, password }: RegisterProps) {
  try {
    await signInWithEmailAndPassword(authService, email, password);
  } catch (e: any) {
    return e.message.replace("Firebase: Error ", "");
  }
}
*/