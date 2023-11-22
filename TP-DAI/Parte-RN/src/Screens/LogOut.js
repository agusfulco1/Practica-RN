import { useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LogOut() {
    useEffect(  () => {
        const desloguarse = async () => {
            AsyncStorage.setItem('Uid', "")
            navigation.navigate('Login')
        }
        desloguarse()
    }, [])
}