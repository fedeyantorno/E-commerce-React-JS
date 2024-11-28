// Este código se debe ejecutar desde firebase.js y la llamada a la función puede hacerse desde App.jsx

import { collection, addDoc } from 'firebase/firestore';
import { productsBazar } from '../asyncMock';

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

  // Llamar a la funcion desde algún componente para exportar los productos:
  // import { exportProductsToFirestore } from './firebase/firebase';
  // exportProductsToFirestore();