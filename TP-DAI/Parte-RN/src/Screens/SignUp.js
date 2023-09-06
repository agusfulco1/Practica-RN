import * as react from 'react'
import { Animated, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import {
    useFonts,
    Fredoka_300Light,
} from "@expo-google-fonts/fredoka";
import Input from '../Components/Input';
import Button from "../Components/Button"
import axios from 'axios'

export default function SignUp() {
    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [nombreCompleto, setNombreCompleto] = useState('')
    const [respuesta, setRespuesta] = useState()
    const [isLoading, setLoading] = useState(true)
    let [fontsLoaded] = useFonts({
        Fredoka_300Light,
    });
    const onPressSign = () => {
        props.navigation.navigate('Login')
    }
    const onPress = () => {
        axios.post('http://localhost:5000/registrarse', {
            Nombre: usuario,
            Contraseña: contraseña,
            NombreCompleto: nombreCompleto
        })
        .then(function (response) {
            setRespuesta(response.data.message)
        })
        .finally(() => setLoading(false))
    } 

    return (
        <View style={styles.container}>
            {!fontsLoaded ? null : (
                <View>
                    <Input label="Usuario" value={usuario} onChange={setUsuario}></Input>
                    <Input label="Contraseña" value={contraseña} onChange={setContraseña}></Input>
                    <Input label="Nombre Completo" value={nombreCompleto} onChange={setNombreCompleto}></Input>
                    <View style={styles.containerButon}>
                        <Button texto="Enviar" usuario={usuario} onPress={onPress} contraseña={contraseña} ></Button>
                        {isLoading ? null : <Text>{respuesta}</Text>}
                        <TouchableOpacity onPress={onPressSign} ><Text style={styles.textSignUp}>Ya tiene Cuenta? Logueate!</Text></TouchableOpacity>
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