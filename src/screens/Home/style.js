import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    padding-top: 1px;
    background-color: #000;
    flex: 1;
    /* Wrapper que demarca a área que vão aparecer os elementos */
`;

export const Scroll = styled.ScrollView`
/* Scroll vertical */
`;

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* Container que engloba todos os elementos da upperside bar */
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding-left: 75px;
    padding-right: 75px;
    left: 25px;
    /* É basicamente uma label */
`;

export const Balance = styled.Text`
    font-size: 20px;
    color: #fff;
    text-align: center;
    font-weight: bold;
    left: 25px;
    padding-bottom: 5px;
    /* É basicamnete igual uma label */
`;