import React from "react";
import styled from "styled-components";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Header from "../../../components/Header";

const Scroll = styled.ScrollView`
  background: #0059d4;
`;

const UserView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 22px;
`;
const BackView = styled.View`
  left: 0px;
`;
const Avatar = styled.Image`
  width: 178px;
  height: 178px;
  right: 120px;
  top: 10px;
`;

const PerfilInfoContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
`;
const Name = styled.Text`
  align-self: center;
  font-size: 22px
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`;
const Endereco = styled.Text`
  color: white;
  justify-content: center;
  align-items: center;
`;
const SocialLink = styled.Text`
  color: white;
  justify-content: center;
  align-items: center;
`;

const MiniCard = styled.View`
  margin-left: 5px;
  left: 24px;
  width: 98px;
  height: 90px;
  background: #ffffff;
  border-radius: 4px;
  opacity: 0.3;
  justify-content: center;
  align-items: center;
`;
const TitleMiniCard = styled.Text`
  text-align: left;
  font-size: 15px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const MiniCardNum = styled.Text`
  font-size: 24px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

export default function () {
  return (
    <>
      <Scroll>
        <Header />
        <UserView>
          <BackView>
            <FontAwesome name="long-arrow-left" size={24} color="white" />
          </BackView>
          <Avatar source={require("../../../assets/avatar.png")} />
        </UserView>
        <PerfilInfoContainer>
          <Name>Pedro Almeida</Name>
          <Row>
            <Endereco>
              <MaterialIcons name="place" size={14} color="white" /> Grajaú, São
              Paulo - SP
            </Endereco>
            <SocialLink>
              {" | "}
              <FontAwesome name="linkedin" size={14} color="white" />{" "}
              /pedro_almeida
            </SocialLink>
          </Row>

          <Row>
            <MiniCard>
              <TitleMiniCard>Processos</TitleMiniCard>
              <MiniCardNum>58</MiniCardNum>
            </MiniCard>

            <MiniCard>
              <TitleMiniCard>Entrevistas</TitleMiniCard>
              <MiniCardNum>3</MiniCardNum>
            </MiniCard>
          </Row>
        </PerfilInfoContainer>
      </Scroll>
    </>
  );
}
