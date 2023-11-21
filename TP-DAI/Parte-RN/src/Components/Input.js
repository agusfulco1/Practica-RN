import { useState } from "react"
import { StyleSheet, View, Text, TextInput, Animated, Pressable } from "react-native"

export default function Input(props) {
    const animation = new Animated.Value(0);

    const onPressIn = () => {
        console.log("hola")
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

    const bgInput = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['white', 'blue']
    })
    console.log(bgInput)

    return (
        <Animated.View style={styles.box}>
            <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
                <TextInput
                    style={[styles.input, bgInput]}
                    onChangeText={props.onChange}
                    value={props.value}
                    placeholder={props.label}
                    
                />
            </Pressable>

            <Text style={styles.inputBorder}></Text>
        </Animated.View>

    )

}


const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        outLineStyle: 'none',
        marginBottom: 10,
    },
    label: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 300,
    },
    box: {
        alignItems: 'left',
    },
})