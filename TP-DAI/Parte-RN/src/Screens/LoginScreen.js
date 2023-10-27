import { useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import {
    useFonts,
    Fredoka_300Light,
} from "@expo-google-fonts/fredoka";
import Input from '../Components/Input';
import Button from "../Components/Button"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function LoginScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [respuesta, setRespuesta] = useState('')
    let [fontsLoaded] = useFonts({
        Fredoka_300Light,
    });
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
            console.log(user)
            if (user.email !== undefined) {
                props.navigation.navigate('Home', {Email: email, Password: password})
            }
        }
        catch(error) {
            console.log(error);
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "El email o password no coinciden",
            });
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
                        <TouchableOpacity onPress={onPressSign}><Text style={styles.textSignUp}>No tienes cuenta? Registrate!</Text></TouchableOpacity>
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