// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
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

