import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB3nd4682HGm9im55J_dvLfg3vNfgHmjEE",
    authDomain: "amzon-clone-d2c2c.firebaseapp.com",
    projectId: "amzon-clone-d2c2c",
    storageBucket: "amzon-clone-d2c2c.appspot.com",
    messagingSenderId: "930033319618",
    appId: "1:930033319618:web:7dda824e4187186d8c855b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };