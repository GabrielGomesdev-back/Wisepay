import React from 'react';
import avatar from '../../images/avatar.png';
import { Wrapper, Img, View, Text, Sub, Info, Scroll,
Option, Label, SubText } from './style';
import { Ionicons } from '@expo/vector-icons'; 

const items =[
    {
        key: String(Math.random()),
        Sub: 'Meu Picpay',
        info: '@user1',
    },
    {
        key: String(Math.random()),
        Sub: 'Meu Número',
        info: '+55 (11) 91234-5678',
    },
    {
        key: String(Math.random()),
        Sub: 'Meu Picpay',
        info: 'user@gmail.com',
    },
    {
        key: String(Math.random()),
        Sub: 'Dados Pessoais',
        info: '',
    },
    {
        key: String(Math.random()),
        Sub: 'Conta bancária',
        info: '',
    },
    {
        key: String(Math.random()),
        Sub: 'Taxas e limites',
        info: '',
    },
    {
        key: String(Math.random()),
        Sub: 'Meus endereços',
        info: '',
    },
    {
        key: String(Math.random()),
        Sub: 'Meus Favoritos',
        info: '',
    },
    {
        key: String(Math.random()),
        Sub: 'Validar identidade',
        info: '',
    },
];

export default function Config(){
    return (
        <Wrapper>
            <View>
                <Img source={avatar}/>
                <Text>@User1</Text>
                <SubText>User</SubText>
            </View>
            <Label>Minha Conta</Label>
            {items.map((items)=>(
                <Option key={items.key}>
                    <Sub>{items.Sub}</Sub>
                    <Info>{items.info}</Info>
                    <Ionicons name="chevron-forward-outline" size={24} color="black" />
                </Option>
            ))}
        </Wrapper>
    );
}