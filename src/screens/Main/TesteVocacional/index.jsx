import React from "react";
import styled from "styled-components";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
import Header from "../../../components/Header";

const Scroll = styled.ScrollView`
  background: #0059d4;
  flex: 1;
`;

const BackView = styled.View`
  padding-left: 24px;
  align-self: center;
  width: 100%;
`;

const Wrapper = styled.View`
  width: 93%;
  margin: 20px;
  background: #ffffff;
  border-radius: 30px;
  align-self: center;
  padding-left: 24px;
  padding-top: 34px;
`;

const TestTitle = styled.Text`
  color: #8a8a8a;
`;

const ProgressBar = styled.Image`
  width: 100%;
  margin-left: -2px;
`;

const Subtitle = styled.Text`
  margin-top: 30px;
  font-size: 16px;
  color: #8a8a8a;
  text-transform: uppercase;
`;

const Question = styled.Text`
  color: #0059d4;
  font-size: 24px;
  text-align: left;
`;

const QuestionBox = styled.View`
  padding: 10px;
`;

const AlternativaRow = styled.View`
  padding: 5px
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const Alternativa = styled.Text`
  color: #8a8a8a;
  font-size: 24px;
  margin-left: 10px;
`;

const ButtonWrapper = styled.TouchableOpacity`
  margin-top: 40px;
  background: #0059d4;
  border-radius: 32px;
  width: 318px;
  height: 48px;

  justify-content: center;
  align-items: center;
`;
const Proceed = styled.Text`
  color: white;
`;

export default function ({ navigation }) {
  return (
    <Scroll>
      <Header
        openDrawer={() => {
          navigation.openDrawer();
        }}
      />
      <BackView>
        <FontAwesome
          name="long-arrow-left"
          size={24}
          color="white"
          style={{ alignSelf: "flex-start" }}
        />
      </BackView>
      <Wrapper>
        <TestTitle>Questão 1 / 12</TestTitle>
        <ProgressBar source={require("../../../assets/bar.png")} />
        <Subtitle>Subtítulo</Subtitle>
        <Question>
          Na sua opinião, quais destas palavras combinam com a sua
          personalidade?
        </Question>
        <QuestionBox>
          <AlternativaRow>
            <Entypo name="circle" size={28} color="#EBF3F5" />
            <Alternativa>Ousado</Alternativa>
          </AlternativaRow>
          <AlternativaRow>
            <Entypo name="circle" size={28} color="#EBF3F5" />
            <Alternativa>Indiferente</Alternativa>
          </AlternativaRow>
          <AlternativaRow>
            <Entypo name="circle" size={28} color="#EBF3F5" />
            <Alternativa>Ousado</Alternativa>
          </AlternativaRow>
          <AlternativaRow>
            <Entypo name="circle" size={28} color="#EBF3F5" />
            <Alternativa>Ousado</Alternativa>
          </AlternativaRow>

          <ButtonWrapper>
            <Proceed>Avançar</Proceed>
          </ButtonWrapper>
        </QuestionBox>
      </Wrapper>
    </Scroll>
  );
}
