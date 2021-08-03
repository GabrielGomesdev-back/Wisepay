import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient)`
    width: 57px;
    height: 57px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text`
    font-size: 12px;
    color: ${({ focused }) => focused ?'#000' :'#fff'};
    /* focused da label tem que ser criado no styles para
    só ser chamado no index */
`;