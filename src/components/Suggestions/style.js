import styled from 'styled-components/native';

export const Option = styled.TouchableOpacity`
    width: 90px;
    margin-right: 15px;
    padding-top: 39px;
    align-items: center;
    right: 160px;
    /* Tag que vai criar a opção no index de a foto ser clicável
    e funcionar como um botão */
`;

export const Img = styled.Image``;

export const Label = styled.Text`
    padding-top: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    /* Tag que funciona no index para apresentar texto */
`;

export const Sub = styled.Text`
    padding-top: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 13px;
`;

export const Text = styled.Text`
    left: 8px;
    top: 5px;
    color: #fff;
    font-size: 15px;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
    horizontal: true,
    borderRadius: 9,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle: {
        alignItens: 'center',
        paddingLeft: 16,
    },
}))`
    background-color: #1e222b;
    height: 140px;
    /* Criação e estilização de um srcoll horizontal */
`;