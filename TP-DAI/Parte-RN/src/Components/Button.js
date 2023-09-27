import * as react from 'react'
import { StyleSheet, View, Animated, Text, TouchableOpacity } from "react-native"
import axios from 'axios'
export default function Button(props) {
    
    const animation = new Animated.Value(0);
    const inputRange = [0, 1];
    const outputRange = [1, 0.8];
    const scale = animation.interpolate({ inputRange, outputRange });

    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    const onPressOut = () => {
        Animated.spring(animation, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    };
    return (
        <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
            <TouchableOpacity onPress={props.onPress} onPressIn={onPressIn} onPressOut={onPressOut} style={styles.botonContainer}>
                <Text style={styles.textoBoton}>{props.texto}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    botonContainer: {
        padding: 10,
        backgroundColor: "#1573FF",
        borderRadius: 50,
        padding: 10,
        marginTop: 15,
        outlineColor: "#1573FF",
        outlineStyle: "solid",
        outlineWidth: 2,
        outlineOffset: 3,
        width: 300,
        justifyContent: "center",
        height: 60,
        marginBottom: 15,
    },
    textoBoton: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        textAlign: 'center',
        fontFamily: "Fredoka_300Light",
    }
})  