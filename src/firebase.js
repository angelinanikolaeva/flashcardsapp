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
export const auth = getAuth();
