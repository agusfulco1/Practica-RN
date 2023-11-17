import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUp from '../Screens/SignUp'
import Tab from './TabNavigator'
import { UserContext } from '../Context/UserContext'
import { useState } from 'react';
const Stack = createNativeStackNavigator();
export default function StackScreen() {
    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{user, setUser}}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
                <Stack.Screen name="Sign Up" component={SignUp}></Stack.Screen>
                <Stack.Screen name="Tab" component={Tab}></Stack.Screen>
            </Stack.Navigator>
        </UserContext.Provider>
            
    )

    
}