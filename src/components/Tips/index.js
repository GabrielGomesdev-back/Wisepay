import React from 'react';
import { Container, Option, Img, Title } from './style';
import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
    {
        key: String(Math.random()),
        img: img8,
        title: 'Universitário! Cadastre-se e ganhe mais cashback',
        bgColor: '#9400d3'
    },
    {
        key: String(Math.random()),
        img: img9,
        title: 'Conheça nossas promoções',
        bgColor: '#bf40bf',
    },
    {
        key: String(Math.random()),
        img: img10,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#7a297a'
    },
    {
        key: String(Math.random()),
        img: img11,
        title: 'Pague suas contas sem sair de casa!',
        bgColor: '#800080'
    },
    {
        key: String(Math.random()),
        img: img12,
        title: 'Recarregue seu cartão transporte sem sair de casa!',
        bgColor: '#9932cc'
    },
]

export default function Tips(){
    return (
        
        <Container>
            {items.map((items) => (
                <Option key={items.key} bgColor={items.bgColor}>
                    <Title>{items.title}</Title>
                    <Img source={items.img}/>
                </Option>
            ))}
        </Container>
    );
}