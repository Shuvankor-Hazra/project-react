import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvbbxLveZpmmd9c1X1KOClCZWEtUey9C8",
  authDomain: "project-react-c74f5.firebaseapp.com",
  projectId: "project-react-c74f5",
  storageBucket: "project-react-c74f5.appspot.com",
  messagingSenderId: "132167870324",
  appId: "1:132167870324:web:9375be56241763d32cae21",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
