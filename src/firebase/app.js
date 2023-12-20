import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDRTkVNrUX492mJ5EKRAbjoRWq6w7NqzdE',
	authDomain: 'student-newsletter-ed446.firebaseapp.com',
	projectId: 'student-newsletter-ed446',
	storageBucket: 'student-newsletter-ed446.appspot.com',
	messagingSenderId: '587270263419',
	appId: '1:587270263419:web:a96fecf4587ec48bda88de',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore db
const db = getFirestore(app);

export { db };
