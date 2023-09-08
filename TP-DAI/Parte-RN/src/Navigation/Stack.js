import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home'
import PerfilVisualizar from '../Screens/PerfilVisualizar'
import PerfilEditar from '../Screens/PerfilEditar'
const Stack = createNativeStackNavigator();
export default function StackScreen() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
                <Stack.Screen name="Sign Up" component={SignUp}></Stack.Screen>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="PerfilVisualizar" component={PerfilVisualizar}></Stack.Screen>
                <Stack.Screen name="PerfilEditar" component={PerfilEditar}></Stack.Screen>

            </Stack.Navigator>
    )

    
}