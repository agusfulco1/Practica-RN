import * as react from 'react'
import { Animated, Pressable, TextInput, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import {
    useFonts,
    Fredoka_300Light,
} from "@expo-google-fonts/fredoka";
import Input from '../Components/Input';
import Button from "../Components/Button"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [respuesta, setRespuesta] = useState()
    const [isLoading, setLoading] = useState()
    const [usuario, setUser] = useState("")
    const [apellido, setApellido] = useState("")
    const [nombre, setNombre] = useState("")


    let [fontsLoaded] = useFonts({
        Fredoka_300Light,
    });
    const onPressSign = () => {
        navigation.navigate('Login')
    }
    const onPress = async () => {
            try {
                const auth = getAuth();
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                const { uid } = user;
                const db = getFirestore();
                await setDoc(doc(db, "users", uid), {
                    nombre,
                    apellido,
                    email,
                    usuario,
                    password,
                    uid,
                });
                setNombre("");
                setApellido("");
                setEmail("");
                setPassword("");
                setUser("");
                setLoading(false)
                navigation.navigate('Login')

            } catch (error) {
                console.log(error);
            }
    }

    return (
        <View style={styles.container}>
            {!fontsLoaded ? null : (
                <View>
                    <Input label="Email" value={email} onChange={setEmail}></Input>
                    <Input label="Contraseña" value={password} onChange={setPassword}></Input>
                    <Input label="Nombre" value={nombre} onChange={setNombre}></Input>
                    <Input label="Apellido" value={apellido} onChange={setApellido}></Input>
                    <Input label="Usuario" value={usuario} onChange={setUser}></Input>
                    <View style={styles.containerButon}>
                        <Button texto="Enviar" onPress={onPress} ></Button>
                        {isLoading ? null : <Text>{respuesta}</Text>}
                        <Pressable onPress={onPressSign} ><Text style={styles.textSignUp}>Ya tiene Cuenta? Logueate!</Text></Pressable>
                    </View>
                </View>
            )}

        </View>
    );
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