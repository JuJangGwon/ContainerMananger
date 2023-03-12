import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const { APIKEY, AUTHDOMAIN, DATABASEURL, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID, APPID, MEASUREMENTID } = process.env;

const firebaseConfig = {
  apiKey: "AIzaSyBpkpKvdRHjnFoUjWZZV1-0MKNJv7FQ8_E",
  authDomain: "mylittleassist-2c973.firebaseapp.com",
  databaseURL: "https://mylittleassist-2c973-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mylittleassist-2c973",
  storageBucket: "mylittleassist-2c973.appspot.com",
  messagingSenderId: "122162507510",
  appId: "1:122162507510:web:667acf03228af27f2806d7",
  measurementId: "G-1369KTXEC0"
};
const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);
export default firestore;