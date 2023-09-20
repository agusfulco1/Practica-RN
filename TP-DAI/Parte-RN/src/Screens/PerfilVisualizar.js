import { Animated, TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import { useContext, useState } from 'react'
import {
    useFonts,
    Fredoka_300Light,
} from "@expo-google-fonts/fredoka";
import Button from "../Components/Button"
import { UserContext } from '../Context/UserContext';
export default function Perfil({navigation}) {

    const {ObjetoUsuario} = useContext(UserContext)

    let [fontsLoaded] = useFonts({
        Fredoka_300Light,
    });

    const CambiarModo = () => {{
        navigation.navigate("PerfilEditar")
    }}
    return (
        <View style={styles.container}>
            {!fontsLoaded ? null : (
                <>
                    <Button texto="Editar" onPress={CambiarModo}></Button>
                    <View style={styles.container2}>
                        <Text>{ObjUsuario.Nombre}</Text>
                        <Text>{ObjUsuario.Contraseña}</Text>
                        <Text>{ObjUsuario.NombreCompleto}</Text>
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