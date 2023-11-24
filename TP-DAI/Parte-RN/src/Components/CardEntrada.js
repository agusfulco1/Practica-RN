import {Pressable, Text, View, StyleSheet, Image} from 'react-native'
import { useState } from 'react';
import ModalForm from './ModalForm';
export default function CardEntrada({entrada}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    console.log(entrada)
    const handleModal = () => {
        setIsModalVisible(() => !isModalVisible)
    } 
    return (
        <View style={styles.card}>
            <Image style={styles.img} source={entrada.data.imagen}></Image>
            <Text style={styles.texto}>{entrada.data.partido}</Text>
            <Text style={styles.texto}>{entrada.data.estadio}</Text>
            <Text style={styles.texto}>{entrada.data.precio}</Text>
            <View style={styles.containerBoton}>
                <Pressable style={styles.boton} onPress={handleModal}><Text style={styles.textoBoton}>Comprar</Text></Pressable>
            </View>
            
            {isModalVisible ? <ModalForm entrada={entrada} isModalVisible={isModalVisible} handleModal={handleModal} /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 250,
        backgroundColor: 'rgb(52,62,235)',
        margin: 10,
        width: 300,
        borderRadius: 10,
    },
    texto: {
        color: 'white',
        fontSize: 20
    }, 
    img: {
        width: "100%",
        height: "40%",
        
    },
    boton: {
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkgray',
        borderRadius: 50,
        width: '50%',
        height: '100%',
        
    },
    containerBoton: {
        width: "100%",
        alignItems: 'center',
        height: '20%',
        
    },
    textoBoton: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})  