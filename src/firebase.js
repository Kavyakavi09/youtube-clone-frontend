import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_Auth_API_KEY}`,
  authDomain: `${process.env.REACT_APP_Auth_DOMAIN}`,
  projectId: `${process.env.REACT_APP_Auth_pROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_Auth_STORAGE}`,
  messagingSenderId: `${process.env.REACT_APP_Auth_MESSAGE_ID}`,
  appId: `${process.env.REACT_APP_Auth_APP_ID}`,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
