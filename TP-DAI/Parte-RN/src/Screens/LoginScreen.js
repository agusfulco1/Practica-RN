import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { Animated, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import {
    useFonts,
    Fredoka_300Light,
} from "@expo-google-fonts/fredoka";
import Input from '../Components/Input';
import Button from "../Components/Button"
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function LoginScreen() {
    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [isLoading, setLoading] = useState(true)
    const [respuesta, setRespuesta] = useState('')
    let [fontsLoaded] = useFonts({
        Fredoka_300Light,
    });

    const onPress = () => {
        axios.get('http://localhost:5000/login')
            .then(function (response) {
                const UsuariosArr = response.data
                verificar(UsuariosArr)
            })
            .finally(() => setLoading(false))
    }
    const verificar = usuariosArr => {
        usuariosArr.forEach(element => {
            if (element.Nombre === usuario && element.contraseña === contraseña) {
                setRespuesta('Cuenta OK')
            }
        });
        if (respuesta == ""){
            setRespuesta("La contraseña o nombre de usuario no coinciden")
        }
    }

    return (
        <View style={styles.container}>
            {!fontsLoaded ? null : (
                <View>
                    <Input label="Usuario" value={usuario} onChange={setUsuario}></Input>
                    <Input label="Contraseña" value={contraseña} onChange={setContraseña}></Input>
                    <View style={styles.containerButon}>
                        <Button texto="Enviar" usuario={usuario} onPress={onPress} contraseña={contraseña} ></Button>
                        {isLoading ? null : respuesta }
                        <TouchableOpacity style={styles.textSignUp}>No tienes cuenta? Registrate!</TouchableOpacity>
                    </View>
                    <StatusBar style="auto" />
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
        textAlign: 'center'
    },
    textSignUp: {
        color: 'blue'
    }
});