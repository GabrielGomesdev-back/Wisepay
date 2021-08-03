import React from 'react';
import { Wrapper, Container, Img } from './style';
import Img6 from '../../images/06.png';
import PayBanner from '../../components/PayBanner';
import PayContent from '../../components/PayContent';

export default function Pay(){
    return (
        <Wrapper>
            <Container>
                <Img source={Img6}/>
            </Container>
            <PayBanner/>
            <PayContent/>
        </Wrapper>
    );
}