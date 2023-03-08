import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy_ajKUmoyaDL2HarjW8wx0en6xVa82Go",
  authDomain: "project-react-b61fe.firebaseapp.com",
  projectId: "project-react-b61fe",
  storageBucket: "project-react-b61fe.appspot.com",
  messagingSenderId: "35952976390",
  appId: "1:35952976390:web:77843083e2baaed8c71987",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
