import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { Container, Header, Label, Sub, View, Card, CardHeader,
 Avatar, Description, Bold, CardBody, Username, CardFooter, Details,
 Value, Divider, Pipe, Todas, Date, DateLabel, Feed, Options, FeedLabel } from './style';
import avatar from '../../images/avatar.png';


export default function Activities(){
    return (
        <Container>
            <View>
                <Todas>Todas </Todas><Pipe/><Sub> Minhas</Sub>
                <Label>Atividades</Label>
            </View>
            <Header>
                <Card>
                    <CardHeader>
                        <Avatar source={avatar} />
                        <Description>
                            <Bold>Você</Bold> pagou a <Bold>@user2</Bold>
                        </Description>
                    </CardHeader>
                    <CardBody>
                        <Username>User1</Username>
                    </CardBody>
                    <CardFooter>
                        <View>
                            <Details>
                                <Value>R$ 50,00</Value>
                                <Divider/>
                                <Date>
                                    <EvilIcons name="lock" size={24} color="rgba(255, 255, 255, 0.5)"  />
                                    <DateLabel>Há 2 dias</DateLabel>
                                </Date>   
                            </Details>
                        </View>
                        <Feed>
                            <Options>
                                <EvilIcons name="comment" size={24} color="rgba(255, 255, 255, 0.5)"  />
                                <FeedLabel>0</FeedLabel>   
                            </Options>
                            <Options>
                                <EvilIcons name="heart" size={24} color="rgba(255, 255, 255, 0.5)"  />
                                <FeedLabel>0</FeedLabel>   
                            </Options>
                        </Feed>
                    </CardFooter>
                </Card>
            </Header>
        </Container>
    );
}