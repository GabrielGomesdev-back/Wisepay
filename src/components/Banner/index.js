import React from 'react';
import { Container, Title, Sub, Img, Text } from './style';
import Img13 from '../../images/13.png';

export default function Banner (){
    return (
        <Container>
            <Img source={Img13}/>
            <Title>Cobre um amigo</Title>
            <Sub>Mantenha suas parcerias em dia, use o Wisepay para fazer uma cobrança</Sub>
            <Text>Cobrar agora !</Text>
        </Container>
    );
}