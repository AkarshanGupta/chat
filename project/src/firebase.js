import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBR_vOpo4sfUZyJDXaIguxeD89pLJ_-BZw",
  authDomain: "chat-30c72.firebaseapp.com",
  projectId: "chat-30c72",
  storageBucket: "chat-30c72.appspot.com",
  messagingSenderId: "860896197587",
  appId: "1:860896197587:web:2c170f97a0f855c45e0d26"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider,db };
export default db;




