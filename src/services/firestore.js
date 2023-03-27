import { collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import products from "../products/products";


const firebaseConfig = {

  apiKey: "AIzaSyCFGzBlIuEYGA1nrVzL3nudiUGqYLCazYY",

  authDomain: "ch-react-solis.firebaseapp.com",

  projectId: "ch-react-solis",

  storageBucket: "ch-react-solis.appspot.com",

  messagingSenderId: "834063658531",

  appId: "1:834063658531:web:7bc32df24ff2e406e6cb96"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItemsFromDatabase() {
    const productsColectionRef = collection(db, "products");
    let snapshotProducts = await getDocs(productsColectionRef);
    const documents = snapshotProducts.docs;
  
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
}
  
export async function getItemsByCategoryFromDatabase(categoryURL) {
    const productsColectionRef = collection(db, "products");

    const q = query(productsColectionRef, where("category", "==", categoryURL));

    let snapshotProducts = await getDocs(q);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
}

export async function getSingleItemFromDatabase(idItem) {
    const productsColectionRef = collection(db, "products");
    const docRef = doc(productsColectionRef, idItem);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists() === false) throw new Error("No existe el documento");
  
    return { ...docSnapshot.data(), id: docSnapshot.id };
}

export async function createOrder(orderData){
    const collectionRef = collection(db, "orders");
    const res = await addDoc (collectionRef, orderData)
    console.log( res )
    return res.id
}

export async function uploadProductsData() {
    for (let item of products){
        const collectionRef = collection(db, 'products');
        const {id} = await addDoc(collectionRef, item)
        return id;
    }
}