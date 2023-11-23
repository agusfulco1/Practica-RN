import {Pressable, Text, View} from 'react-native'
import { useState } from 'react';
import ModalForm from './ModalForm';
export default function CardEntrada({entrada}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => {
        setIsModalVisible(() => !isModalVisible)
    } 
    return (
        <View>
            <Text>{entrada.partido}</Text>
            <Text>{entrada.estadio}</Text>
            <Text>{entrada.precio}</Text>
            <Pressable onPress={handleModal}><Text>Comprar</Text></Pressable>
            {isModalVisible ? <ModalForm entrada={entrada} isModalVisible={isModalVisible} handleModal={handleModal} /> : null}
        </View>
    )
}