import firebaseApp from "./firebaseApp";
import { getAuth } from "firebase/auth";

// const fb = firebaseApp;
const authService = getAuth(firebaseApp);
export default authService;