import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB2ZiAir11Y5K0L8mYI-i-P1husm_4lsRE",
    authDomain: "netflix-clone-15156.firebaseapp.com",
    projectId: "netflix-clone-15156",
    storageBucket: "netflix-clone-15156.appspot.com",
    messagingSenderId: "184387221390",
    appId: "1:184387221390:web:252d59efb655e4b37356df"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
export {auth}
export default db
