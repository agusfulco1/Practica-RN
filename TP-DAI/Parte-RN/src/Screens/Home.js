import { useContext, useEffect, useState} from 'react'
import {View, StyleSheet ,Text, Button, Pressable} from 'react-native'
import { UserContext } from '../Context/UserContext'
import { doc, getDoc, getFirestore, collection, getDocs } from "firebase/firestore";
import CardEntrada from '../Components/CardEntrada';
export default function Home({route, navigation}) {
    const [entradas, setEntradas] = useState([])
    const ObjetoUser  = useContext(UserContext)

    console.log(ObjetoUser)
    
    useEffect(() => {
        const cargarEntradas = async () => {
            try {
                const db = getFirestore();
                const docRef = collection(db, 'entradas');
                const docSnap = await getDocs(docRef);
                let arrayEntradas = []
                docSnap.forEach(doc => {
                    arrayEntradas.push(doc.data())
                })
                setEntradas(arrayEntradas)
            }
            catch(error) {
                console.log(error);
            }
            
        }
        cargarEntradas()
    }, [])
    
    return (
        <View>
            {ObjetoUser.user.nombre === null ? <Text>Bienvenido <Pressable style={styles.boton} onPress={onPress}><Text style={styles.textoBoton}>Completar mi perfil</Text></Pressable></Text> : <Text>Bienvenido {ObjetoUser.user.Nombre} <Pressable style={styles.boton} ><Text style={styles.textoBoton}>Completar mi perfil</Text></Pressable></Text>}
            {entradas.map((entrada) => {
                return (
                    <CardEntrada entrada={entrada}></CardEntrada>
                )
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    boton: {
        backgroundColor: "#1573FF",
        borderRadius: 50,
        padding: 10,
        marginTop: 20,
        outlineColor: "#1573FF",
        outlineStyle: "solid",
        outlineWidth: 2,
        outlineOffset: 3,
        width: 100,
        height: 40,
    },
    textoBoton: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: "Fredoka_300Light",
        justifyContent: "center"
    }
})