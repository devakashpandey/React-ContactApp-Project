import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";


const FirebaseContext = createContext()

const firebaseConfig = {
    apiKey: "AIzaSyDdMyveqrR4tzIfkausqOyaX3taTQjZ1MY",
    authDomain: "react-contact-app-6f23b.firebaseapp.com",
    projectId: "react-contact-app-6f23b",
    storageBucket: "react-contact-app-6f23b.appspot.com",
    messagingSenderId: "1000165099807",
    appId: "1:1000165099807:web:73da4b809ff7b30696482a"
 };

 const firebaseApp = initializeApp(firebaseConfig);


 export const FirebaseReducer = ({children}) => {
    return(

        <FirebaseContext.Provider value={null}>

        {children}

        </FirebaseContext.Provider>
    )
    
 }

 export const UseFirebaseValue = () => useContext(FirebaseContext);



 