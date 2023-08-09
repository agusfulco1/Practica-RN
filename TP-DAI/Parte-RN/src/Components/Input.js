import * as react from 'react'
import {StyleSheet, View,Text, TextInput} from "react-native"

export default function Input(props) {
    
    return (
        <View style={styles.box}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={props.onChange}
                value={props.value} 
            />
        </View>
    )
    
}


const styles = StyleSheet.create({
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
})