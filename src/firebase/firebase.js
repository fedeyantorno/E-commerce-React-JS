// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjbqLsZO5sRGS7rynfL02lpAFgev_PeLQ",
  authDomain: "proyecto-react-e-commerc-95a59.firebaseapp.com",
  projectId: "proyecto-react-e-commerc-95a59",
  storageBucket: "proyecto-react-e-commerc-95a59.firebasestorage.app",
  messagingSenderId: "930601880127",
  appId: "1:930601880127:web:dca754a6e90694db76c68a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Obtener una colección
export async function getProducts() {
  try {
      const querySnapshot = await getDocs(collection(db, 'products'))
      if (querySnapshot !== 0) {
          const productList = querySnapshot.docs.map((docu) => {
              return {
                  id: docu.id,
                  ...docu.data()
              }
          })
          return productList            
      } else {
          console.log('Colección vacía')            
      }        
  } catch (error) {
      console.log('Error al obtener la colección', error)        
  }  
};

// Filtrar por categoría
export async function getCategory(category) {
  try {
      const filteredQuery = query(collection(db, 'products'), where('category', '==', category))
      const querySnapshot = await getDocs(filteredQuery)
      if (querySnapshot.size !== 0) {
          const productsList = querySnapshot.docs.map((docu) => {
              return {
                  id: docu.id,
                  ...docu.data()
              }
          })
          return productsList           
      } else {
          console.log('Colección vacía')            
      }
  }
  catch (error) {
      console.log('Error al obtener la colección', error)        
  }    
};

// Obtener un producto
export async function getSingleProduct(id) {

  const documentRef = doc(db, 'products', id);
  try {
      const snapshot = await getDoc(documentRef);
      if (snapshot.exists()) {
          return {
              id: snapshot.id,
              ...snapshot.data()
          }             
      } else {
          console.log('El documento no existe')            
      }
  } catch (error) {
      console.log('Error al obtener el documento', error)
  }
  
}

