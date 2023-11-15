import { useContext, useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import {
    useFonts,
    Fredoka_300Light,
} from "@expo-google-fonts/fredoka";
import Input from '../Components/Input';
import Button from "../Components/Button"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../Context/UserContext'
import { doc, getDoc, getFirestore, collection } from "firebase/firestore";
Pressable.defaultProps = { activeOpacity: 0.8 };

export default function LoginScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [respuesta, setRespuesta] = useState('')
    let [fontsLoaded] = useFonts({
        Fredoka_300Light,
    });
    const objetoUser = useContext(UserContext)
    const onPressSign = () => {
        props.navigation.navigate('Sign Up')
    }
    const onPress = async () => {
        try {
            const auth = getAuth();
            const { user } = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const db = getFirestore();
            const docRef = doc(collection(db, 'users'), user.uid);
            const docSnap = await getDoc(docRef);
            if (user.email !== undefined) {
                objetoUser.setUser(docSnap.data().objUsuario)
                props.navigation.navigate('Home')
            }
        }
        catch(error) {
            console.log(error);
        }

    }
    return (
        <View style={styles.container}>
            {!fontsLoaded ? null : (
                <View>
                    <Input label="Email" value={email} onChange={setEmail}></Input>
                    <Input label="Contraseña" value={password} onChange={setPassword}></Input>

                    <View style={styles.containerButon}>
                        <Button texto="Enviar" email={email} onPress={onPress} password={password} ></Button>
                        {isLoading ? null : <Text>{respuesta}</Text>}
                        <Pressable onPress={onPressSign}><Text style={styles.textSignUp}>No tienes cuenta? Registrate!</Text></Pressable>
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