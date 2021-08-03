import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Container, Content, Img, Wrapper, Icons, Text,
 Icone } from './style';
import Img6 from '../../images/06.png';

export default function PayContent(){
    return (
        <Wrapper>
            <Container>
                <Img source={Img6}/>
                <Text>Usar leitor de código de barras</Text>
                <Icons>
                    <AntDesign name="right" size={24} color="#9400D3" />
                </Icons>
            </Container>
            <Content>
                <Img source={Img6}/>
                <Text>Digitar o código de barras manualmente</Text>
                <Icone>
                    <AntDesign name="right" size={24} color="#9400D3" />
                </Icone>
            </Content>
        </Wrapper>
    );
}