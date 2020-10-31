import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJWou1RtyGUIAVqke0VUO1f5tbZWhbaZQ",
  authDomain: "discord-clone-jp.firebaseapp.com",
  databaseURL: "https://discord-clone-jp.firebaseio.com",
  projectId: "discord-clone-jp",
  storageBucket: "discord-clone-jp.appspot.com",
  messagingSenderId: "866824646066",
  appId: "1:866824646066:web:0753825cdf4528ad9808ab",
  measurementId: "G-T3CG3E74GW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.forestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
