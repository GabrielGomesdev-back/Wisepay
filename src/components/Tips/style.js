import styled from 'styled-components/native';

export const Option = styled.TouchableOpacity`
    background-color: ${({ bgColor }) => bgColor};
    width: 150px;
    height: 227px;
    border-radius: 9px;
    padding: 15px 15px 15px 15px;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;

export const Img = styled.Image`
    width: 80px;
    height: 80px;
`;

export const Container = styled.ScrollView.attrs(() =>({
    horizontal: true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
}))`
    margin-top: 16px;
`;