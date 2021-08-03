import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

import PayButton from './components/Paybuttom';

import HomeScreen from './screens/Home';
import PayScreen from './screens/Pay';
import WalletScreen from './screens/Wallet';
import NotifyScreen from './screens/Notify';
import ConfigScreen from './screens/Config';

const Tab = createBottomTabNavigator();
const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    Notify: {
        lib: Entypo,
        name: 'bell',
    },
    Config: {
        lib: FontAwesome,
        name: 'gears',
    },
};

export default function Navigation(){
    return(
        <Tab.Navigator  /* Configuração dos botões  */
            screenOptions={({route, navigation}) =>({     
                tabBarIcon:({color, size, focused}) => {
                    if(route.name == 'Pay') {
                        return (
                            <PayButton
                            onPress={() => navigation.navigate('Pay')}
                            focused={focused}
                            />
                        );
                    }
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#fff', /* Cor do botão quando está ativo */
                inactiveTintColor: '#92929c', /* Cor do botão quando está inativo */
                style: {
                    backgroundColor:'#131418', /* cor da bottom bar */
                    borderTopColor:'rgba(255, 255, 255, 0.2)',
                },
            }}
            >
            <Tab.Screen name="Home" /* Abaixo, botões e seus titulos */
            component={HomeScreen} 
            options={{
                title:'Início'
            }}
            />
            <Tab.Screen name="Wallet" 
            component={WalletScreen}
            options={{
                title:'Carteira'
            }}
            />
            <Tab.Screen name="Pay"
            component={PayScreen} 
            options={{
                title:'',
            }}
            />
            <Tab.Screen name="Notify"
            component={NotifyScreen} 
            options={{
                title:'Notificações'
            }}
            />
            <Tab.Screen name="Config"
            component={ConfigScreen} 
            options={{
                title:'Ajustes'
            }}
            />
        </Tab.Navigator>
    );
}