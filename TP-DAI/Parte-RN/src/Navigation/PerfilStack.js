import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PerfilVisualizar from '../Screens/PerfilVisualizar'
import PerfilEditar from '../Screens/PerfilEditar'
const Stack = createNativeStackNavigator();
export default function StackScreen() {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="PerfilVisualizar" component={PerfilVisualizar}></Stack.Screen>
                <Stack.Screen name="PerfilEditar" component={PerfilEditar}></Stack.Screen>
            </Stack.Navigator>
            
    )

    
}