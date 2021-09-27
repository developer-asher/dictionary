import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDu6Oc1z9UhKDpMn4Me3Q1Dciasb1SC9rQ',
  authDomain: 'dictionary-b7f54.firebaseapp.com',
  projectId: 'dictionary-b7f54',
  storageBucket: 'dictionary-b7f54.appspot.com',
  messagingSenderId: '442931536748',
  appId: '1:442931536748:web:96a903250f8ac62548c949',
  measurementId: 'G-QP1TL8ZKEK',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
