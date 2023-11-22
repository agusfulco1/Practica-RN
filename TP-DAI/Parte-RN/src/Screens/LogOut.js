import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogOut() {
    useEffect(  () => {
        const desloguarse = async () => {
            localStorage.setItem('ObjetoUser', "")
            navigation.navigate('Login')
        }
        desloguarse()
    }, [])
}