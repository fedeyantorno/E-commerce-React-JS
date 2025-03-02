// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where, addDoc, updateDoc } from 'firebase/firestore';
import { productsBazar } from '../asyncMock';
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
export const getProducts = async () => {
	try {
		const querySnapshot = await getDocs(collection(db, 'products'));
		if (!querySnapshot || querySnapshot.size <= 0) return [];
		return querySnapshot.docs.map((product) => ({ id: product.id, ...product.data() }));
	} catch (error) {
		console.log('Error al obtener la colección', error);
		return [];
	}
}

// Filtrar por categoría
export const getCategory = async (category = '') => {
	try {
		const filteredQuery = query(
			collection(db, 'products'),
			where('category', '==', category)
		);
		const querySnapshot = await getDocs(filteredQuery);

		if (!querySnapshot || querySnapshot.size <= 0) return [];

		return querySnapshot.docs.map((product) => ({
			id: product.id,
			...product.data()
		}));
	} catch (error) {
		console.log('Error al obtener la colección', error);
		return [];
	}
};

// Filtrar por subcategoría
export const getSubCategory = async (subcategory = '') => {
	try {
		const filteredQuery = query(
			collection(db, 'products'),
			where('subcategory', '==', subcategory)
		);
		const querySnapshot = await getDocs(filteredQuery);

		if (!querySnapshot || querySnapshot.size <= 0) return [];

		return querySnapshot.docs.map((product) => ({
			id: product.id,
			...product.data()
		}));
	} catch (error) {
		console.log('Error al obtener la colección', error);
		return [];
	}
};

// Obtener un producto
export const getProductById = async (id) => {

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
      return [];
  }
  
}

//Agregar una nueva orden de pedido
export const sendOrder = async (order) => {
  const ordersCollection = collection(db, 'orders');
  try {
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  } catch (error) {
    console.error('Error al agregar el documento nuevo ', error);
    return [];
  }
}

// Actualizamos el stock de un producto
export const updateProductStock = async (id, quantity) => {
    const itemDocRef = doc(db, 'products', id);
    try {
        const snapshot = await getDoc(itemDocRef);
        if (snapshot.exists()) {
            const currentStock = snapshot.data().stock;
            const newStock = currentStock - quantity;
            await updateDoc(itemDocRef, { stock: newStock });}
    } catch (error) {
        console.error('Error al actualizar el stock del producto', error);
        return [];
    }
}

// Función para exportar los productos a Firestore
export const exportProductsToFirestore = async () => {
    try {
        const productsRef = collection(db, 'products');
        
        for (const product of productsBazar) {
            await addDoc(productsRef, product);
        }
        
        console.log('Productos exportados exitosamente a Firestore');
    } catch (error) {
        console.error('Error al exportar productos:', error);
    }
  }
