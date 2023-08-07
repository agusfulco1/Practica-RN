import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { Animated, TouchableOpacity,TextInput,StyleSheet, Text, View } from 'react-native';
import axios from 'axios'
import {
  useFonts,
  Fredoka_300Light,
} from "@expo-google-fonts/fredoka";
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function App() {
  const [usuario,setUsuario] = useState('')
  const [contraseña,setContraseña] = useState('')
  const [respuesta, setRespuesta] = useState()
  const [isLoading, setLoading] = useState(true)
  let [fontsLoaded] = useFonts({
    Fredoka_300Light,
  });
  const onPress = () => {
    axios.post('http://localhost:5000/login', {
      Usuario: usuario,
      Contraseña: contraseña
    })
    .then((response) => setRespuesta(response.data.message))
    .finally(() => setLoading(false))
  }
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
    <View style={styles.container}>
      {!fontsLoaded ? null : (
        <View> 
          <View style={styles.box}>
            <Text style={styles.label}>Usuario</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUsuario}
              value={usuario} 
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              onChangeText={setContraseña}
              value={contraseña} 
            />
          </View>
          <Animated.View style={[styles.button, {transform: [{scale}]}]}>
            <TouchableOpacity onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} style={styles.botonContainer}>
                <Text style={styles.textoBoton}>Enviar</Text>
            </TouchableOpacity>
          </Animated.View>
          <Text>{respuesta}</Text>
          <StatusBar style="auto" />          
        </View>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  botonContainer: {
    backgroundColor: "#1573FF",
    borderRadius: 50,
    padding: 10,
    marginTop: 20,
    outlineColor: "#1573FF",
    outlineStyle: "solid",
    outlineWidth: 2,
    outlineOffset: 3,
    width: 200,
    height: 40,
},
textoBoton: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Fredoka_300Light",
    justifyContent: "center"
}
});
