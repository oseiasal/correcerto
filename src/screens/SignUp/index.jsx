import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components";

const Scroll = styled.ScrollView`
  padding: 24px;
  background: white;
`;

const Menu = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Voltar = styled.Text`
  font-size: 18px;
`;
const Avancar = styled.Text`
  font-size: 18px;
`;

const CircleImage = styled.Image`
  margin-top: 90px;
  align-self: center;

  border-radius: 290px;

  justify-content: center;
  align-items: center;
  height: 290px;
  width: 290px;
`;

const PolicyTitle = styled.Text`
  margin-top: 48px;
  color: #0059d4;
  text-align: center;
  align-self: center;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #0059d4;
`;

const Description = styled.Text`
  margin-top: 12px;
  width: 366px;
  height: 71px;
  text-align: center;
  align-self: center;
  font-size: 16px;
  letter-spacing: 0px;
  color: #0e304d;
  opacity: 1;
`;

const ButtonWrap = styled.TouchableOpacity`
  margin-top: 12px;

  align-self: center;

  width: 366px;
  height: 48px;

  background: #0059d4;
  border-radius: 32px;

  justify-content: center;
  align-items: center;
`;
const Next = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

export default function ({ navigation }) {
  return (
    <Scroll>
      <Menu>
        <Voltar
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <FontAwesome name="long-arrow-left" size={24} color="black" />
        </Voltar>
        <Avancar>Avançar</Avancar>
      </Menu>

      <CircleImage source={require("../../assets/bigcircle.png")} />

      <PolicyTitle>Por que queremos essas informações?</PolicyTitle>

      <Description>
        Utilizaremos essas informações para criar seu currículo, melhorar sua
        procura por vagas e auxilia-lo na melhora do seu currículo
      </Description>

      <ButtonWrap>
        <Next
          onPress={() => {
            navigation.navigate("Form1");
          }}
        >
          Avançar
        </Next>
      </ButtonWrap>
    </Scroll>
  );
}
