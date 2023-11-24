import { useContext, useEffect, useState} from 'react'
import {View, StyleSheet ,Text, Button, Pressable} from 'react-native'
import { UserContext } from '../Context/UserContext'
import { doc, getDoc, getFirestore, collection, getDocs } from "firebase/firestore";
import CardEntrada from '../Components/CardEntrada';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeigth = Dimensions.get('window').height
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
                console.log(docSnap)
                docSnap.forEach(doc => {
                    let objInfo = doc.data()
                    let objEntrada = {
                        id: doc.id,
                        data: objInfo
                    }
                    console.log(objEntrada)
                    console.log(doc.id)
                    arrayEntradas.push(objEntrada)
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
        <View style={styles.container}>
            {ObjetoUser.user.nombre === null ? <Text>Bienvenido <Pressable style={styles.boton} onPress={onPress}><Text style={styles.textoBoton}>Completar mi perfil</Text></Pressable></Text> : <Text>Bienvenido {ObjetoUser.user.Nombre} <Pressable style={styles.boton} ><Text style={styles.textoBoton}>Completar mi perfil</Text></Pressable></Text>}
            <View style={styles.row}>
                {entradas.map((entrada) => {
                    return (
                        <CardEntrada entrada={entrada}></CardEntrada>
                    )
                })}
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeigth,
        backgroundColor: 'rgba(34,36,40,1)'
    },
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
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    }
})