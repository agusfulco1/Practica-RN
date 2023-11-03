import { StyleSheet, Text, View } from 'react-native';
import Input from '../Components/Input';
import Button from "../Components/Button"
import {useState, useContext, useEffect} from 'react'
import {
    useFonts,
    Fredoka_300Light,
} from "@expo-google-fonts/fredoka";
import axios from 'axios'
import { UserContext } from '../Context/UserContext';
import { doc, setDoc, getFirestore } from "firebase/firestore";
export default function PerfilEditar({navigation}) {
    const [Usuario, setUsuario] = useState('')
    const [Contraseña, setContraseña] = useState('')
    const [Email, setEmail] = useState('')
    const [respuesta, setRespuesta] = useState()
    const [isLoading, setLoading] = useState(true)
    const [Nombre, setNombre] = useState("")
    const[Apellido, setApellido] = useState("")
    
    const ObjetoUsuario = useContext(UserContext)

    useEffect(() => {
        setUsuario(ObjetoUsuario.user.usuario)
        setContraseña(ObjetoUsuario.user.contraseña)
        setEmail(ObjetoUsuario.user.email)
        setNombre(ObjetoUsuario.user.nombre)
        setApellido(ObjetoUsuario.user.apellido)
    }, [])
    
    let [fontsLoaded] = useFonts({
        Fredoka_300Light,
    });

    const onPress = async () => {
        const uid = ObjetoUsuario.user.uid
        const objUsuario = {
            Nombre: Nombre,
            Contraseña: Contraseña,
            Email: Email,
            Usuario: Usuario,
            Apellido: Apellido,
            uid
        }
        ObjetoUsuario.setUser(objUsuario)
        if (Email !== "" && Contraseña !== "") {
            const db = getFirestore();
                await setDoc(doc(db, "users", uid), {
                    objUsuario
                });
                console.log(objUsuario)
                ObjetoUsuario.setUser(objUsuario)
                navigation.navigate("PerfilVisualizar")
        }
        else {
            setLoading(false)
            setRespuesta("Cambios no guardados, los campos con asterisco son obligatorios")
        } 
    }

    return (
        <View style={styles.container}>
            {!fontsLoaded ? null : (
                <>
                    <View style={styles.container2}>
                        <Input label="Usuario" value={Usuario} onChange={setUsuario}></Input>
                        <Input label="Contraseña" value={Contraseña} onChange={setContraseña}></Input>
                        <Input label="Email" value={Email} onChange={setEmail}></Input>
                        <Input label="Nombre" value={Nombre} onChange={setNombre}></Input>
                        <Input label="Apellido" value={Apellido} onChange={setApellido}></Input>
                        <View style={styles.containerButon}>
                            <Button texto="Guardar Cambios" onPress={onPress} ></Button>
                            {isLoading ? null : <Text>{respuesta}</Text>}
                        </View>
                    </View>
                </>
            )} 
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        outLineStyle: 'none',
        marginBottom: 10
    },
    label: {
        color: "#00000080",
        fontSize: 15,
        fontWeight: 300,
    },
    box: {
        alignItems: 'left',
    },
    botonContainer: {
        backgroundColor: "#1573FF",
        borderRadius: 50,
        padding: 10,
        marginTop: 20,
        outlineColor: "#1573FF",
        outlineStyle: "solid",
        outlineWidth: 2,
        outlineOffset: 3,
        width: 200,
        height: 40,
    },
    textoBoton: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: "Fredoka_300Light",
        justifyContent: "center"
    },
    containerButon: {
        alignItems: 'center'
    },
    textSignUp: {
        color: 'blue'
    }
});