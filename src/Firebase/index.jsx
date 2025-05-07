import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // إضافة استيراد Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyDgeWc9AaQEl2MQp13FuFGpizE-AZFweDI",
  authDomain: "laborc-9e26c.firebaseapp.com",
  projectId: "laborc-9e26c",
  storageBucket: "laborc-9e26c.firebasestorage.app",
  messagingSenderId: "446323041375",
  appId: "1:446323041375:web:179180233c08096b0427ea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); 