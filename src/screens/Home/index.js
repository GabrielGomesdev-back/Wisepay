import React from 'react';
import { MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { Wrapper, Header, Scroll, BalanceContainer, BalanceTitle, Balance } from './style';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
    return (
        <Wrapper>
            <Scroll> 
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#9400d3" />
                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>
                    <AntDesign name="gift" size={30} color="#9400d3" />
                    <FontAwesome name="percent" size={30} color="#9400d3" />
                </Header>
                <Suggestions/>
                <Activities/>
                <Tips/>
                <Banner/>
            </Scroll>
        </Wrapper>
    );
}