

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

let db = false;
let app;

export const getAuthentication = () => {
  if (!app) {
    const firebaseConfig = {
      apiKey: "AIzaSyAUXe6zXg0TJN-1slBEgNvXI01UFhj8roI",
      authDomain: "http://ridex-4ccd0.firebaseapp.com",
      projectId: "ridex-4ccd0",
      storageBucket: "http://ridex-4ccd0.appspot.com",
      messagingSenderId: "1:878229996643:web:7f9f502f681563962d2456",
      appId: "G-TGWM6ZJTZS"
    }

     app = initializeApp(firebaseConfig)

  }

  const auth = getAuth(app);

  return auth;

}
export const getDb = () => {
  if (!app) {
    const firebaseConfig = {
      apiKey: "AIzaSyAUXe6zXg0TJN-1slBEgNvXI01UFhj8roI",
      authDomain: "http://ridex-4ccd0.firebaseapp.com",
      projectId: "ridex-4ccd0",
      storageBucket: "http://ridex-4ccd0.appspot.com",
      messagingSenderId: "1:878229996643:web:7f9f502f681563962d2456",
      appId: "G-TGWM6ZJTZS"
    }

     app = initializeApp(firebaseConfig)

  }

  if(!db){
    db = getFirestore(app)
  }


  return db
}