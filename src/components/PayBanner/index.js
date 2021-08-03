import React from 'react';
import {Container, Img, Title, View, Text, Sub, Banner } from './style';

export default function PayBanner(){
    return(
        <Container>
            <Title>Pagar Conta</Title>
            <View>
                <Text>Saiba mais</Text>
            </View>
            <Sub>Como deseja pagar sua conta ?</Sub>
        </Container>
    );
}