import React from 'react';
import { Wrapper, Header, Text, Sub } from './style';

export default function Notify(){
    return (
        <Wrapper>
            <Header>
                <Text>Atividade</Text>
            </Header>
            <Sub>Novo</Sub>
        </Wrapper>
    );
}