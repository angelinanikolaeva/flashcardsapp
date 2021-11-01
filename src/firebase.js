import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1xwkSScPD572s5182h76h9kT3YgsSHmo",
  authDomain: "vocavoca-4dc30.firebaseapp.com",
  projectId: "vocavoca-4dc30",
  storageBucket: "vocavoca-4dc30.appspot.com",
  messagingSenderId: "120924591237",
  appId: "1:120924591237:web:e2407893761cd0049685ec",
};
export const app = initializeApp(firebaseConfig);
// export const db = app.firestore();
export const auth = getAuth();

//REACT_APP_FIREBASE_API_KEY=AIzaSyB1xwkSScPD572s5182h76h9kT3YgsSHmo
// REACT_APP_FIREBASE_AUTH_DOMAIN=vocavoca-4dc30.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=projectIdvocavoca-4dc30
// REACT_APP_FIREBASE_STORAGE_BUCKET=vocavoca-4dc30.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=120924591237
// REACT_APP_FIREBASE_APP_ID=1:120924591237:web:e2407893761cd0049685ec
