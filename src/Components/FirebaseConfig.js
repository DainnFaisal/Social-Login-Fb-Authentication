import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAJQXaZNXdK2pqEn7DPrhQdPxsfhrQusEs",
  authDomain: "social-logins-dca21.firebaseapp.com",
  projectId: "social-logins-dca21",
  storageBucket: "social-logins-dca21.appspot.com",
  messagingSenderId: "474554539663",
  appId: "1:474554539663:web:14372438b8fb9b38a45afa",
  measurementId: "G-W1HT3L9FHZ"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
                         
const auth = getAuth(app)       
const provider = new FacebookAuthProvider()

export {auth, provider}
