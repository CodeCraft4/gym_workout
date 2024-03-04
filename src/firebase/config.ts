import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrjLZEyYwsuNZWBn5riyilapuGLMR2KI4",
  authDomain: "addmember-f6f41.firebaseapp.com",
  projectId: "addmember-f6f41",
  storageBucket: "addmember-f6f41.appspot.com",
  messagingSenderId: "662247209525",
  appId: "1:662247209525:web:c2fc88809b75b710aacf7c",
  measurementId: "G-6NPKK84E3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { db, storage, auth };
