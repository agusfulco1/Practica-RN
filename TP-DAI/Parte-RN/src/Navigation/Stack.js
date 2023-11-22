import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUp from '../Screens/SignUp'
import Tab from './TabNavigator'


const Stack = createNativeStackNavigator();
export default function StackScreen() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="Sign Up" component={SignUp}></Stack.Screen>
            <Stack.Screen name="Tab" component={Tab}></Stack.Screen>
        </Stack.Navigator>
    )


}