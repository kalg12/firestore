import {db} from './firebase/firebase.js'
/* import {collection, addDoc} from 'firebase/firestore/lite'
 */
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, deleteField } from "firebase/firestore";


/* Agregando datos a un documento */

/* try {
  const docRef = await addDoc(collection(db, "personas"), {
    nombre: "Juan",
    apellidos: "Pérez",
    edad: 30
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
} */

/* Leer datos */

/* const querySnapshot = await getDocs(collection(db, "personas"));
querySnapshot.forEach((doc) => {
  console.log(doc.id);
  console.log(doc.data());
  console.log(doc.data().nombre);
}); */


/* Eliminar datos */

const eliminar = async (id) => {
  try{
    const collection = await doc(db, "personas", id);
    await deleteDoc(collection);
    console.log("Documento eliminado");
  }
  catch(e){
    console.error("Error eliminando documento: ", e);
  }
}
/* eliminar("zVSYVopSHrL67Fky2EmF"); */

/* Editar datos */

const editar = async (id) => {
  try{
    const collection = await doc(db, "personas", id);
    await updateDoc(collection, {
      nombre: "Fernando",
      apellido: "Luciano",
      edad: 22
    });
    console.log("Documento editado");
  }
  catch(e){
    console.error("Error editando documento: ", e);
  }
}

/* editar("8LZTglmFuLMWx7qniV2M"); */

const elimnarUnCampo = async (id) => {
  try{
    const collection = await doc(db, "personas", id);
    await updateDoc(collection, {
      apellidos: deleteField()
    })
    console.log("Campo eliminado");
  }
  catch(e){
    console.error("Error eliminando campo: ", e);
  }
}

/* elimnarUnCampo("8LZTglmFuLMWx7qniV2M"); */