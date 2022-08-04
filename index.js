import {db} from './firebase/firebase.js'
/* import {collection, addDoc} from 'firebase/firestore/lite'
 */

import { collection, addDoc } from "firebase/firestore";

try {
  const docRef = await addDoc(collection(db, "personas"), {
    nombre: "Juan",
    apellidos: "Pérez",
    edad: 30
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}


