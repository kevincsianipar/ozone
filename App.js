import React, { Component } from "react";
import {
  Container,
  Header,
  Body,
  Content,
  Footer,
  FooterTab,
  Button,
  Image,
  Icon,
  Left,
  Right,
  Title,
  Text,
  Badge
} from "native-base";
import ContentCard from "./components/mainMenu/contentCard";
export default class FooterTabsBadgeExample extends Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <ContentCard />
        </Content>
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge>
                <Text>2</Text>
              </Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge>
                <Text>51</Text>
              </Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
