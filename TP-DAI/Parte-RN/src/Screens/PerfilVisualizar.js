import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useContext, useState } from 'react'
import {
    useFonts,
    Fredoka_300Light,
} from "@expo-google-fonts/fredoka";
import Button from "../Components/Button"
import { UserContext } from '../Context/UserContext';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Perfil({ navigation }) {

    const ObjUsuario = useContext(UserContext)
    console.log(ObjUsuario)
    let [fontsLoaded] = useFonts({
        Fredoka_300Light,
    });

    const CambiarModo = () => {
        {
            navigation.navigate("PerfilEditar")
        }
    }
    return (
        
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollview}>
                {!fontsLoaded ? null : (
                    <>
                        <View style={styles.container2}>
                            <View style={styles.titulo}>
                                <Text style={styles.textoTitulo}>Tu perfil</Text>
                                <Button texto="Editar" onPress={CambiarModo}></Button>
                            </View>
                            <View style={styles.containerDatos}>
                                <View style={styles.containerDato}>
                                    <Text style={styles.dato}>Nombre: {ObjUsuario.user.nombre}</Text>
                                </View>
                                <View style={styles.containerDato}>
                                    <Text style={styles.dato}>Contraseña: {ObjUsuario.user.password}</Text>
                                </View>
                                <View style={styles.containerDato}>
                                    <Text style={styles.dato}>Email: {ObjUsuario.user.email}</Text>
                                </View>
                                <View style={styles.containerDato}>
                                    <Text style={styles.dato}>Apellido: {ObjUsuario.user.apellido}</Text>
                                </View>
                                <View style={styles.containerDato}>
                                    <Text style={styles.dato}>Usuario: {ObjUsuario.user.usuario}</Text>
                                </View>
                            </View>

                        </View>
                    </>
                )}
                </ScrollView>
            </View>
                
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: windowWidth,
        height: windowHeight,
    },
    container2: {
        height: "100%",
        width: '50%',
        borderWidth: 1,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        backgroundColor: "blue",
        height: "20%",
        width: "100%",
        alignItems: "center"
    },
    textoTitulo: {
        color: "white",
        fontSize: 35,
        fontWeight: 600,
    },
    containerDatos: {
        alignItems: 'center',
        height: "80%",
    },
    dato: {
        fontSize: 25
    },
    containerDato: {
        justifyContent: 'center',
        width: "100%",
        alignItems: 'center',
        height: "33.333333333333333333333%",
        borderBottomColor: 'lightgray',
        borderWidth: 1,
    },
});