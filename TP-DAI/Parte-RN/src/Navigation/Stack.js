import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home'
const Stack = createNativeStackNavigator();
export default function StackScreen() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
                <Stack.Screen name="Sign Up" component={SignUp}></Stack.Screen>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
            </Stack.Navigator>
    )

    
}