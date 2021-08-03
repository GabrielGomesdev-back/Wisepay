import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    padding-top: 1px;
    background-color: #000;
    flex: 1;
`;

export const Scroll = styled.ScrollView``;

export const Img = styled.Image`
    height: 90px;
    width: 90px;
    margin-top: 15px;
    margin-bottom: 25px;
`;

export const View = styled.View`
    height: 150px;
    border-radius: 20px;
    align-items: center;
`;

export const Text = styled.Text`
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    bottom: 15px;
`;

export const Sub = styled.Text`
    color: #000;
    font-size: 18px;
    margin-bottom: 5px;
    margin-left: 10px;
`;

export const Info = styled.Text`
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    left: 75px;
    margin-right: 30px;
`;

export const Option = styled.TouchableOpacity`
    top: 70px;
    border-width: 1px;
    background-color: #fff;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    max-height: 50px;
`;

export const Label = styled.Text`
    font-size: 19px;
    color: rgba(255, 255, 255, 0.5);
    left: 20px;
    font-weight: bold;
    top: 65px;
`;

export const SubText = styled.Text`
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    bottom: 10px;
`;