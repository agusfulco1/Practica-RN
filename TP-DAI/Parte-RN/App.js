import StackScreen from "./src/Navigation/Stack"
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState } from 'react';
import { UserContext } from './src/Context/UserContext'
const firebaseConfig = {
  apiKey: "AIzaSyArdTNAB2okxowH24e0oD5466X7yb9A4cw",
  authDomain: "practica-rn.firebaseapp.com",
  projectId: "practica-rn",
  storageBucket: "practica-rn.appspot.com",
  messagingSenderId: "84498110057",
  appId: "1:84498110057:web:e24b62519119eba93274f8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export default function App() {
  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </UserContext.Provider>

  )
}
