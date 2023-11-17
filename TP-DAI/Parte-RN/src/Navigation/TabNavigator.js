import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home'
import PerfilStack from './PerfilStack'
import { UserContext } from '../Context/UserContext'
import { useEffect, useState, useContext } from "react";
const Tab = createBottomTabNavigator()

const homeName = "Home";
const perfilName = "Perfil"
const logOut = "Log Out"
export default function TabNavigator({ route }) {
    const NumPasaporteContext = useContext(UserContext)
    
    /*useEffect( () => {
        console.log(NumPasaporteContext)
        const { NumPasaporte } = route.params
        const crearContext = async () => {
            NumPasaporteContext.setPasaporte(NumPasaporte)
            await AsyncStorage.setItem("NumPasaporte", NumPasaporte)
        }
        crearContext()
    }, [])*/
    
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        }  else if (rn === perfilName) {
                            iconName = focused ? 'person-circle' : 'person-circle-outline'
                        } else if (rn === logOut) {
                            iconName = focused ? 'basket' : 'basket-outline'
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerShown: false
                })}
                tabBarOptions={{
                    activeTintColor: 'orange',
                    inactiveTintColor: 'orange',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}>
                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={perfilName} component={PerfilStack}/>
                {/*<Tab.Screen name={logOut} component={LogOut}></Tab.Screen>*/}
            </Tab.Navigator>
        

    );
}