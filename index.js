import {db} from './firebase/firebase.js'
import { collection, addDoc, doc, getDocs, deleteDoc } from "firebase/firestore";

/* Agregar datos a nuestro documento */
const agregarDocumento = async (nombre, apellido, edad) => {
  try {
    const agregando = await addDoc(collection(db,"personas"),
    {
      nombre: nombre,
      apellido: apellido,
      edad: edad
    })
    console.log("Documento agregado correctamente :D")
  } catch (error) {
    console.log(error)
  }
}

/* agregarDocumento("Kai", "García", 21) */

const leerDocumentos = async() =>{
  const leeyendo = await getDocs(collection(db,"personas"))
  leeyendo.forEach((doc) => {
    console.log(doc.id)
    console.log(doc.data().nombre)
  })
}

/* leerDocumentos(); */

/* Eliminar */

const eliminarDocumento = async (id) => {
  const eliminar = await doc (db, "personas", id)
  await deleteDoc(eliminar)
  console.log("Documento eliinado")
}

eliminarDocumento("rLOKzIAaFFfe3tlX34rp")

