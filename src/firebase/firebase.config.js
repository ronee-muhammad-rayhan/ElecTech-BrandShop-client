/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrG_RbcvjseUfYsMyRynMvRlnAwgvG-Ao",
  authDomain: "b8a10-brandshop-electech.firebaseapp.com",
  projectId: "b8a10-brandshop-electech",
  storageBucket: "b8a10-brandshop-electech.appspot.com",
  messagingSenderId: "442669530505",
  appId: "1:442669530505:web:e5217acc4a48078c967558",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;
export const app = initializeApp(firebaseConfig);
