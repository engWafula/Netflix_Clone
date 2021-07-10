import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCw61BfAyNNuG2WePlxxp_jCgrPL3uuFkE",
  authDomain: "netflix-bc961.firebaseapp.com",
  projectId: "netflix-bc961",
  storageBucket: "netflix-bc961.appspot.com",
  messagingSenderId: "144955918010",
  appId: "1:144955918010:web:a6ebc879dc1a43ed5ca483",
  measurementId: "G-1EL2TDJ65G"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
export {auth}
export default db
