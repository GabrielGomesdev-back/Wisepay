import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    padding-top: 1px;
    background-color: #000;
    flex: 1;
    /* Wrapper que demarca a área que vão aparecer os elementos */
`;

export const Icon = styled.TouchableOpacity`
    margin-top: 16px;
    margin-right: 20px;
    left: 367px;
`;

export const Container = styled.View`
    background-color: #9400d3;
    height: 310px;
    border-radius: 9px;
`;

export const Value = styled.Text`
    font-size: 50px;
    color: #fff;
    padding-left: 115px;
`;

export const Num = styled.Text`
    font-size: 50px;
    color: #fff;
    margin-left: 20px;
`;

export const Sub = styled.Text`
    color: #fff;
    font-size: 17px;
    padding-left: 155px;
    margin-top: 30px;
`;

export const Inline = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const Buttom = styled.Text`
    color: #fff;
    margin-left: 5px;
    font-size: 18px;
    align-items: center;
`;

export const View = styled.TouchableOpacity`
    margin: 38px;
    border-color: #fff;
    border-width: 1px;
    border-radius: 30px;
    flex: 1px;
    height: 30px;
    flex-direction: row;
    bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const Cont = styled.View`
    flex: 1px;
    flex-direction: row;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #fff;
    bottom: 17px;
    left: 100px;
    font-size: 16px;
`;