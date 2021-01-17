import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { Picker, PickerIOS } from "@react-native-picker/picker";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import styled from "styled-components";

const Scroll = styled.ScrollView`
  position: relative;
  background: #0059d4;
`;

const Menu = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const Voltar = styled.Text`
  font-size: 18px;
`;
const Avancar = styled.Text`
  color: white;
  font-size: 18px;
`;

const Container = styled.View`
  padding: 24px;
  margin-top: 20px;
  background: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;

  position: relative;
`;

const Bar = styled.Image`
  margin-top: 10px;
  align-self: center;
  width: 380px;
  height: 20px;
`;

const TitleText = styled.Text`
margin-top: 5px;
  font-size: 18px
letter-spacing: 0px;
  color: #0059d4;
`;
const DescriptionText = styled.Text`
  text-align: left;
  letter-spacing: 0px;
  color: #0e304d;
  opacity: 1;
`;

const LabelText = styled.Text`
  margin-top: 10px;

  font-size: 16px;
  letter-spacing: 0px;
  color: #0e304d;
  opacity: 1;
`;
const Edit = styled.TextInput`
  margin-top: 2px;
  width: 366px;
  height: 48px;

  background: #ebf3f5;
  border-radius: 24px;
  padding: 5px;
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

const ListMenu = styled(Picker)`
  margin-top: 2px;
  width: 366px;
  height: 48px;

  background: #ebf3f5;
  border-radius: 24px;
  padding: 5px;
`;

const Calendario = styled(Calendar)``;

export default function ({ navigation }) {
  return (
    <Scroll>
      <Menu>
        <Voltar
          onPress={() => {
            navigation.pop();
          }}
        >
          <FontAwesome name="long-arrow-left" size={24} color="white" />
        </Voltar>
        <Avancar>Avançar</Avancar>
      </Menu>

      <Container>
        <Bar source={require("../../assets/bar.png")} />

        <TitleText>Informações pessoais</TitleText>
        <DescriptionText>
          Insira suas informações para uma melhor experiência na busca por vagas
        </DescriptionText>

        <LabelText>Nome Completo</LabelText>
        <Edit placeholder="Insira seu nome completo" />
        <LabelText>E-mail</LabelText>
        <Edit placeholder="exemplo@exemplo.com" />
        <LabelText>Sexo</LabelText>
        <ListMenu>
          <ListMenu.Item label="-Selecione-" value="indefinido" />
          <ListMenu.Item label="-- Masculino" value="Masculino" />
          <ListMenu.Item label="-- Feminino" value="Feminino" />
        </ListMenu>

        <LabelText>confirmar e-mail</LabelText>
        <Edit placeholder="exemplo@exemplo.com" />
        <LabelText>Nacionalidade</LabelText>
        <Edit placeholder="Selecione o país em que você nasceu" />

        <LabelText>Estado Civil</LabelText>
        <ListMenu>
          <ListMenu.Item label="-Selecione-" value="indefinido" />
          <ListMenu.Item label="-- Solteiro" value="Solteiro" />
          <ListMenu.Item label="-- Casado" value="Casado" />
          <ListMenu.Item label="-- Divorciado" value="Divorciado" />
        </ListMenu>

        <LabelText>Data de Nascimento</LabelText>
        <Edit placeholder="Selecione a data de Nascimento" />
        <ButtonWrap>
          <Next
            onPress={() => {
              navigation.navigate("Form1");
            }}
          >
            Avançar
          </Next>
        </ButtonWrap>
      </Container>
    </Scroll>
  );
}
