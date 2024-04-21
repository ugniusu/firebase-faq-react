import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCogR-w2Swfsn0AQzubwAW51y2xJqxpjMM",
  authDomain: "faq-react-76e40.firebaseapp.com",
  databaseURL:
    "https://faq-react-76e40-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "faq-react-76e40",
  storageBucket: "faq-react-76e40.appspot.com",
  messagingSenderId: "797689325504",
  appId: "1:797689325504:web:bfd111741ea66708c4ca25",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
