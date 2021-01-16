import React from "react";
import styled from "styled-components/native";
import bgImage from "../../assets/bg.png";

const Scroll = styled.ScrollView``;

const Container = styled.View`
  background: white;
  position: relative;
  opacity: 1;
`;

const LogoImage = styled.Image`
  width: 100%;
`;

const WelcomeView = styled.View`
  background: white;
  left: 0px;
  top: -40px
  height: 200px;
  border-top-right-radius: 30px;
border-top-left-radius: 30px;
position: relative;
`;
const Title = styled.Text`
  top: 20px;
  text-align: left;
  font: normal bold 24px barlow;
  padding: 10px 30px;
  letter-spacing: 0px;
  color: #0059d4;
`;

const LoremText = styled.Text`
  padding: 10px 30px;
  text-align: left;
  top: 10px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;
const SignUpButton = styled.Text`
  color: black;
`;
const Login = styled.Text`
  color: white;
`;

const ButtonWrap = styled.TouchableOpacity`
	width: 174px;
height: 48px;
border: 2px solid ${(props) => props.borderColor};
border-radius: 32px;	
    justify-content: center
    align-items: center;
	background-color: ${(props) => props.backgroundColor};
`;

export default function ({ navigation }) {
  return (
    <Scroll>
      <Container>
        <LogoImage source={bgImage} />
        <WelcomeView>
          <Title>Seja bem-vindo</Title>
          <LoremText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsum
            quis sequi doloribus sit, Commodi excepturi fuga molestiae quaerat?
          </LoremText>
          <ButtonContainer>
            <ButtonWrap backgroundColor="white" borderColor="black">
              <SignUpButton> Cadastrar</SignUpButton>
            </ButtonWrap>
            <ButtonWrap backgroundColor="#0059D4" borderColor="#0059D4">
              <Login
                onPress={() => {
                  navigation.navigate("LoginPrincipal");
                }}
              >
                Entrar
              </Login>
            </ButtonWrap>
          </ButtonContainer>
        </WelcomeView>
      </Container>
    </Scroll>
  );
}
