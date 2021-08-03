import React from 'react';
import {AntDesign, Entypo} from '@expo/vector-icons';
import {Container, View, Title, Banner, Text, Icon, Inline, Sub,
 Buttom, Label} from './style';

export default function Card (){
    return (
        <Container>
            <View>
                <Title>Formas de Pagamento</Title>
            </View>
            <Banner>
                <Text>Cadastre seu cartão de crédito</Text>
                <Inline>
                    <Icon><Entypo name="credit-card" size={90} color="#fff"/></Icon>
                    <Sub>Cadastre seu cartão de crédito para
                         fazer pagamentos quando estiver
                          sem saldo no seu Wisepay! :)</Sub>
                </Inline>
                <Buttom>
                    <AntDesign name="pluscircleo" size={30} color="#fff"/>
                    <Label>Adicionar cartão de crédito</Label>
                </Buttom>
            </Banner>
        </Container>
    ); 
}