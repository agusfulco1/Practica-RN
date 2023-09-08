import { useEffect, useState} from 'react'
import {View, StyleSheet ,Text, Button, TouchableOpacity} from 'react-native'
import axios from 'axios'

export default function Home({route, navigation}) {
    const [usuario, setUsuario] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const { Usuario, Contraseña } = route.params
    useEffect(() => {
        axios.post('http://localhost:5000/usuario', {
            Nombre: Usuario,
            Contraseña: Contraseña
        })
            .then(function(response) {
                setUsuario(response.data)
            })
            .finally(() => setIsLoading(false))
    }, [])
    
    const onPress = () => {
        navigation.navigate('PerfilVisualizar', {ObjUsuario: usuario})
    }
    return (
        <View>
            {isLoading ? null : usuario.NombreCompleto === null ? <Text>Bienvenido <TouchableOpacity style={styles.boton} onPress={onPress}><Text style={styles.textoBoton}>Completar mi perfil</Text></TouchableOpacity></Text> : <Text>Bienvenido {usuario.NombreCompleto}</Text>}
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