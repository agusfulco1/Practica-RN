import { useState} from 'react'
import {View, StyleSheet ,Text} from 'react-native'
import axios from 'axios'

export default function Home({route}) {
    const [nombreCompleto, setNombreCompleto] = useState('')
    const { Usuario, Contraseña } = route.params
    axios.post('http://localhost:5000/usuario', {
        Nombre: Usuario,
        Contraseña: Contraseña
    })
        .then()
    return (
        <View>
            <Text>Bienvenido {nombreCompleto}</Text>
        </View>
    )
}