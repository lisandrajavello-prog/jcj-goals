
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/";
const firebaseConfig = {
  apiKey: "AIzaSyDNyWXHLqrrdmVEhfPY559HOMSKW4ScTQ8",
  authDomain: "ed-tech-2004.firebaseapp.com",
  projectId: "ed-tech-2004",
  storageBucket: "ed-tech-2004.firebasestorage.app",
  messagingSenderId: "393271296491",
  appId: "1:393271296491:web:d65f16c04afe5c539519ae"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)