import { useState} from 'react'
import {View, StyleSheet ,Text, Button} from 'react-native'
import axios from 'axios'

export default function Home({route}) {
    const [usuario, setUsuario] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    axios.post('http://localhost:5000/usuario', {
        Nombre: Usuario,
        Contraseña: Contraseña
    })
        .then(function(response) {
            setUsuario(response.data)
        })
        .finally(() => setIsLoading(false))
    return (
        <View>
            {isLoading ? null : usuario.NombreCompleto === null ? <Text>Bienvenido <Button>Completar perfil</Button></Text> : <Text>Bienvenido {usuario.NombreCompleto}</Text>}
        </View>
    )
}