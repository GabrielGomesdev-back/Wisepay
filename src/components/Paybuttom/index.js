import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import { Button, Label } from './style';
import { TouchableWithoutFeedback } from 'react-native';

export default function PayButton({ onPress, focused }){
    return (
/* funciona como onclick */ <TouchableWithoutFeedback onPress={ onPress }> 
            <Button
                colors={
                    focused /* função funciona como uma função de foco, que acontece algo enquanto está em foco*/
                        ?['#fff', '#ccc'] /* Cor do botão enquanto está pressionado */
                        : ['#9400d3', '#800080'] /* Cor do botão enquanto não está pressionado */
                }
                start={[1, 0.2]}
            >
                <MaterialIcons name="attach-money" size={30} color={focused ?'#000' :'#fff'} /*Icone que funciona com focused*//> 
                <Label focused={focused}>Pagar</Label>
            </Button>
        </TouchableWithoutFeedback>
    );
}