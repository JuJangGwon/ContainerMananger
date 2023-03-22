import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import authService from "../../ net/auth";

type RegisterProps = {
  email: string;
  password: string;
};

export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(authService, email, password);
};