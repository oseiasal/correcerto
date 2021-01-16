import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/bg2.jpeg";

const Scroll = styled.ScrollView`
  position: relative;
`;
const Container = styled.View`
  position: relative;
`;

const CadastroHeader = styled.View`
  margin-top: 40px;
  padding: 10px;
`;
const Cadastre = styled.Text`
  text-align: right;
  color: white;
`;

const Background = styled.Image`
  width: 100%;
  position: absolute;
`;

const WelcomeContainer = styled.View`
  top: 150px;
  left: 24px;
`;
const Title = styled.Text`
  text-align: left;
  font: normal bold 24px Barlow;
  letter-spacing: 0px;
  color: #ffab2c;
  opacity: 1;
`;

const Msg = styled.Text`
  width: 366px;
  text-align: left;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const LoginContainer = styled.View`
  background: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  opacity: 1;
  top: 180px;
  height: 600px;
  position: relative;
`;

const LoginText = styled.Text`
  margin-top: 20px;
  margin-left: 24px;
  height: 17px;
  text-align: left;
  font: normal normal bold 14px/18px Barlow;
  letter-spacing: 0px;
  color: #0e304d;
  opacity: 1;
`;

const PassLabel = styled.Text`
  margin-top: 20px;
  margin-left: 24px;
  height: 17px;
  text-align: left;
  font: normal normal bold 14px/18px Barlow;
  letter-spacing: 0px;
  color: #0e304d;
  opacity: 1;
`;

const EmailInput = styled.TextInput`
  margin-top: 5px;
  margin-left: 24px;
  width: 366px;
  background: #ebf3f5;
  border-radius: 24px;
  opacity: 1;
  padding: 10px;
`;

const PassInput = styled.TextInput`
  margin-top: 5px;
  margin-left: 24px;
  width: 366px;
  background: #ebf3f5;
  border-radius: 24px;
  opacity: 1;
  padding: 10px;
`;

const ButtonWrap = styled.TouchableOpacity`
margin-top: 20px;
margin-bottom: 20px;
align-self: center;
width: 174px;
height: 48px;
border: 2px solid ${(props) => props.borderColor};
border-radius: 32px;	
justify-content: center
align-items: center;
background-color: ${(props) => props.backgroundColor};
`;

const LoginButtonText = styled.Text`
  color: white;
`;

const ForgotButton = styled.Text`
  margin-left: 170px;
  color: #0e304d;
  opacity: 1;
`;

export default function () {
  return (
    <>
      <Scroll>
        <Background source={bgImage} />
        <Container>
          <CadastroHeader>
            <Cadastre>Cadastre-se</Cadastre>
          </CadastroHeader>
          <WelcomeContainer>
            <Title>Entrar</Title>
            <Msg>
              Insira seu e-mail para começar a procurar vagas perto de você.
            </Msg>
          </WelcomeContainer>

          <LoginContainer>
            <LoginText>E-mail</LoginText>
            <EmailInput placeholder="Digite seu e-mail aqui..." />
            <PassLabel>Senha</PassLabel>
            <PassInput placeholder="*******" secureTextEntry={true} />
            <ButtonWrap backgroundColor="#0059D4" borderColor="#0059D4">
              <LoginButtonText>Entrar</LoginButtonText>
            </ButtonWrap>
            <ForgotButton>Esqueceu sua senha? Recuperar</ForgotButton>
          </LoginContainer>
        </Container>
      </Scroll>
    </>
  );
}
