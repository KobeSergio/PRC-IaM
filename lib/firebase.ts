import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  query,
  where,
  setDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getBlob,
} from "firebase/storage";
import { Inspection } from "@/types/Inspection";
import { Client } from "@/types/Client";
import { RO } from "@/types/RO";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firebase constants
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
const clientsRef = collection(db, "clients");
const prbRef = collection(db, "prb");
const inspectionsRef = collection(db, "inspections");
const roRef = collection(db, "ro");
const ocRef = collection(db, "oc");
const acdRef = collection(db, "acd");
const DATE_NOW = new Date().toLocaleString();

export default class Firebase {
  //GET: Sign in funciton.
  //Returns 200 if successful, 400 if email is not found, 401 if password is incorrect, and 500 if there is an error.
  async signIn(email: string, password: string) {
    try {
      const q = query(collection(db, "prb"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("No matching documents.");
        return 400;
      }

      for (const doc of querySnapshot.docs) {
        if (doc.data().password === password) {
          return 200;
        }
      }
      return 401;
    } catch (error) {
      console.log(error);
      return 500;
    }
  }

  //GET: Get all clients.
  //Returns ro list if successful, [] if there is an error.
  async getAllClients() {
    try {
      const querySnapshot = await getDocs(clientsRef);
      const clients: Client[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Client;
        data.client_id = doc.id;
        clients.push(data);
      });
      return clients;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  //GET: Get all inspections.
  //Returns ro list if successful, [] if there is an error.
  async getAllInspections() {
    try {
      const querySnapshot = await getDocs(inspectionsRef);
      const inspections: Inspection[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Inspection;
        data.inspection_id = doc.id;
        inspections.push(data);
      });
      return inspections;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  //GET: Get all ROs.
  //Returns ro list if successful, [] if there is an error.
  async getAllROs() {
    try {
      const querySnapshot = await getDocs(roRef);
      const ro: RO[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as RO;
        data.ro_id = doc.id;
        ro.push(data);
      });
      return ro;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  //POST: Create a new inspection.
  //Returns 200 if successful, 400 if there is an error.
  async createInspection(inspectionForm: Inspection) {
    try {
      const docRef = await addDoc(inspectionsRef, {
        ...inspectionForm,
        createdAt: DATE_NOW,
      });
      await updateDoc(docRef, {
        inspection_id: docRef.id,
      });
      return 200;
    } catch (error) {
      console.log(error);
      return 400;
    }
  }

  //POST: Create a new client.
  //Returns 200 if successful, 400 if there is an error.
  async createNewClient(clientForm: Client) {
    try {
      const docRef = await addDoc(clientsRef, {
        ...clientForm,
      });
      await updateDoc(docRef, {
        client_id: docRef.id,
      });
      return 200;
    } catch (error) {
      console.log(error);
      return 400;
    }
  }
}
