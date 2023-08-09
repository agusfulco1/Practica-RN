import * as react from 'react'
import {StyleSheet,View, Animated, Text, TouchableOpacity} from "react-native"

export default function Button(props) {
    const animation = new Animated.Value(0);
    const inputRange = [0, 1];
    const outputRange = [1, 0.8];
    const scale = animation.interpolate({inputRange, outputRange});

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
        <Animated.View style={[styles.button, {transform: [{scale}]}]}>
            <TouchableOpacity onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} style={styles.botonContainer}>
                <Text style={styles.textoBoton}>{props.texto}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}  