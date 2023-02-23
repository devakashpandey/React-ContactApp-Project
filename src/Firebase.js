import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyDdMyveqrR4tzIfkausqOyaX3taTQjZ1MY",
    authDomain: "react-contact-app-6f23b.firebaseapp.com",
    databaseURL: "https://react-contact-app-6f23b-default-rtdb.firebaseio.com",
    projectId: "react-contact-app-6f23b",
    storageBucket: "react-contact-app-6f23b.appspot.com",
    messagingSenderId: "1000165099807",
    appId: "1:1000165099807:web:73da4b809ff7b30696482a"
 };

 const firebaseApp = initializeApp(firebaseConfig);

 export const db =  getDatabase(firebaseApp)




 