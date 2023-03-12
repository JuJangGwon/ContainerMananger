import firebaseApp from "./firebaseApp";
import {getFirestore} from "firebase/firestore";

const db = getFirestore( firebaseApp.firebaseApp);
export default db;
