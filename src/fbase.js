import firebase from 'firebase/app';
import 'firebase/auth';
import { FIREBASE_CONFIG } from './config';

const firebaseConfig = {
  apiKey: FIREBASE_CONFIG.API_KEY,
  authDomain: FIREBASE_CONFIG.AUTH_DOMAIN,
  projectId: FIREBASE_CONFIG.PROJECT_ID,
  storageBucket: FIREBASE_CONFIG.STORAGE_BUCKET,
  messagingSenderId: FIREBASE_CONFIG.MESSAGE_ID,
  appId: FIREBASE_CONFIG.APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
