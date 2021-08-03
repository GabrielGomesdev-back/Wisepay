import React from 'react';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {Wrapper, Icon, Container, Value, Num,
     Sub, Inline, Buttom, View, Cont, Text} from './style';
import Card from '../../components/Card';
import Ticket from '../../components/Ticket';


export default function Wallet(){
    return (
        <Wrapper>
            <Container>
                <Icon><FontAwesome name="signal" size={30} color="#fff"/></Icon>
                <Sub>Saldo Wisepay</Sub>
                <Inline>
                    <Value>R$</Value><Num>0,00</Num>
                </Inline>
                <Text>Seu Saldo rende 100% de CDI</Text>
                <Inline>
                    <View>
                        <Cont>
                            <MaterialCommunityIcons name="plus" size={25} color="#fff"/>
                            <Buttom>Adicionar</Buttom>
                        </Cont>            
                    </View>
                    <View>
                        <Cont>    
                            <FontAwesome name="bank" size={25} color="#fff"/>
                            <Buttom>Retirar</Buttom>
                        </Cont>
                    </View>
                </Inline>
            </Container>
            <Card/>
            <Ticket/>
        </Wrapper>
    );
}