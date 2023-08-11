import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createNativeStackNavigator();
export default function StackScreen() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            </Stack.Navigator>
    )

    
}