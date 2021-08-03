import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Text } from './style';

export default function Ticket(){
    return (
        <Container>
            <MaterialCommunityIcons name="ticket-percent" size={35} color="#9400D3" />
            <Text>Usar código promocional</Text>
        </Container>
    );
}