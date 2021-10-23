import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAOK3ubc8lovhG_X9f4f-PAnntav2PAnCs",
  authDomain: "linkedin-clone-24cdd.firebaseapp.com",
  projectId: "linkedin-clone-24cdd",
  storageBucket: "linkedin-clone-24cdd.appspot.com",
  messagingSenderId: "293710985688",
  appId: "1:293710985688:web:3cc3f94892e945174c9aad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
