import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import Input from "./Input";
import { doc, getFirestore, collection, setDoc, updateDoc } from "firebase/firestore";
import { UserContext } from "../Context/UserContext";
export default function ModalForm({ entrada, isModalVisible, handleModal }) {
    const [tarjeta, setTarjeta] = useState("")
    const objetoUser = useContext(UserContext)
    const cargarTarjeta = async () => {
        console.log(entrada)
        const db = getFirestore();
        const docRefUsuarios = doc(db, "users", objetoUser.user.uid)
        const docRefEntradas = doc(db, 'entradas', entrada.id);
        await updateDoc(docRefUsuarios, {
            tarjeta: tarjeta
        })
        await updateDoc(docRefEntradas, {
            uidUser: objetoUser.user.uid
        })
    }
    return (
        <Modal isVisible={isModalVisible}>
            <View style={styles.modal}>
                <View style={styles.containerInput}>
                    <TextInput 
                        onChangeText={setTarjeta}
                        value={tarjeta}
                        style={styles.input}
                        placeholder="Tarjeta de credito/debito"
                    />
                </View>
                    
                <View style={styles.containerBotones}>
                    <TouchableOpacity style={styles.botonEnviar} onPress={cargarTarjeta}>
                        <Text style={styles.textoBoton}>Enviar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botonCerrar} onPress={handleModal}>
                        <Text style={styles.textoBoton}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    botonCerrar: {
        backgroundColor: '#FF8000',
        padding: 10,
        borderRadius: 50,
        height: 30,
        width: "90%",
        margin: 10,
        justifyContent: "center",
    },
    botonEnviar: {
        backgroundColor: '#0019B9',
        padding: 10,
        borderRadius: 50,
        height: 30,
        width: "90%",
        justifyContent: "center",
        margin: 10
    },
    textoBoton: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        textAlign: 'center',
        fontFamily: "Fredoka_300Light",
    },
    containerBotones: {
        alignItems: 'center'
    },
    containerTour: {
        backgroundColor: 'red'
    }, 
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        outLineStyle: 'none',
        marginBottom: 10,
        color: 'black',
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: 'gray',
        width: '50%',
    },
    containerInput: {
        alignItems: "center"
    }
})