import { useEffect, useState } from "react"
import { StyleSheet, View, Text, TextInput, Animated, Pressable } from "react-native"

export default function Input(props) {
    const animation = new Animated.Value(0);
    /*const bgInput = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['white', 'blue']
    })
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

    useEffect(() => {
        console.log(bgInput)
    }, [animation])*/
    
    

    return (
        <Animated.View style={styles.box}>
            {/*<Pressable /*onPressIn={onPressIn} onPressOut={onPressOut} </Pressable>*/}
                <TextInput
                    style={styles.input}
                    onChangeText={props.onChange}
                    value={props.value}
                    placeholder={props.label}
                />
            
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
        color: 'white',
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: 'gray',
        
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