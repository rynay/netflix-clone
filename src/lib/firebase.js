import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC6S5JWFkPiPDySOJ1zWyLHr9ueJbwIdGM',
  authDomain: 'netflix-react-clone-70d64.firebaseapp.com',
  projectId: 'netflix-react-clone-70d64',
  storageBucket: 'netflix-react-clone-70d64.appspot.com',
  messagingSenderId: '108692332489',
  appId: '1:108692332489:web:7daf9df5a88cdd45309218',
};

export const firebase = Firebase.initializeApp(firebaseConfig);
