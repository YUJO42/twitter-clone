import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCW1tbmrqk-DBMu15h4ec5HPLwr441bbNE',
  authDomain: 'twitter-clone-d875a.firebaseapp.com',
  projectId: 'twitter-clone-d875a',
  storageBucket: 'twitter-clone-d875a.appspot.com',
  messagingSenderId: '68811103814',
  appId: '1:68811103814:web:ab7b267b8c334200003447',
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
