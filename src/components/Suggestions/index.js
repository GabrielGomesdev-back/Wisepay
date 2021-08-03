import React from  'react';
import { Scroll, Option, Img, Label, Sub, Text } from './style';
import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

const items = [  /* Vetor que vai repetir as imagens/botões */
    {
        key: String(Math.random()),
        img: img5, 
        Sub: 'Doações',
    },
    {
        key: String(Math.random()),
        img: img2, 
        Sub: 'Uber',
    },
    {
        key: String(Math.random()),
        img: img3, 
        Sub: 'Transporte',
    },
    {
        key: String(Math.random()),
        img: img4, 
        Sub: 'SKY',
    },
    {
        key: String(Math.random()),
        img: img1, 
        Sub: 'Recarga',
    },
    {
        key: String(Math.random()),
        img: img6, 
        Sub: 'Contas',
    },
    {
        key: String(Math.random()),
        img: img7, 
        Sub: 'Ajuda',
    },
];

export default function Suggestions(){
    return (
        <Scroll>
            <Label>Sugestões</Label><Text>Favoritos</Text>
            {items.map((items) => (
                <Option key={items.key}>
                    <Img source={items.img}/>
                    <Sub>{items.Sub}</Sub>
                </Option>
            ))}
        </Scroll>
    );
}