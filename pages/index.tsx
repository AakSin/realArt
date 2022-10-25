import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlOka8nYzmYlQ4PPlYYJ59_N4rJAkDXgE",
  authDomain: "realart-20aab.firebaseapp.com",
  projectId: "realart-20aab",
  storageBucket: "realart-20aab.appspot.com",
  messagingSenderId: "404959848134",
  appId: "1:404959848134:web:82881ce2d1da87a782d9c7",
  measurementId: "G-NZD45QBWQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

// Get a list of cities from your database
async function getPaintings(db: any) {
  const paintingsCol = collection(db, "paintings");
  const panintingsSnapshot = await getDocs(paintingsCol);
  const paintingsList = panintingsSnapshot.docs.map((doc) => doc.data());
  return paintingsList;
}
console.log(getPaintings(db));
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>"Real" Art</h1>
      </header>
    </div>
  );
}
