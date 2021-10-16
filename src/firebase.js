import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDHlO94KWxtu2LQoOsroON8SHdbGHU90DM",
  authDomain: "dev-env-6c3f7.firebaseapp.com",
  projectId: "dev-env-6c3f7",
  storageBucket: "dev-env-6c3f7.appspot.com",
  messagingSenderId: "252120337761",
  appId: "1:252120337761:web:86720b06a0659d28640920",
});
export const auth = firebase.auth(app);
export default firebase;

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
