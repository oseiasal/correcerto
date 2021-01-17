import React from "react";
import styled from "styled-components";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
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
  align-items: center;
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
  margin-right: 5px;
  left: 20px;
  width: 90px;
  height: 70px;
  background: #ffffff33;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
const TitleMiniCard = styled.Text`
  text-align: left;
  font-size: 12px;
  letter-spacing: 0px;
  color: #ffffff;
`;
const MiniCardNum = styled.Text`
  font-size: 24px;
  letter-spacing: 0px;
  color: #ffffff;
`;

const WrapButton = styled.TouchableOpacity`
  margin-right: 22px;
  margin-left: 15px;
  width: 164px;
  height: 48px;

  border-radius: 30px;
  border: solid white 2px;
  opacity: 1;
  justify-content: center;
`;
const EditButton = styled.Text`
  align-self: center;
  color: white;
`;

const InforRow = styled(Row)`
  margin-top: 12px;
  justify-content: space-between;
`;

const InformationView = styled.View`
  margin-top: 20px;
  background: #ebf3f5;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const LastDesafios = styled(Row)`
  justify-content: space-between;
  margin-top: 20px;
`;
const Last = styled.Text`
  margin-left: 25px;
  color: #0e304d;
  font-size: 18px;
  font-weight: bold;
`;
const SeeMore = styled.Text`
  margin-right: 25px;
  color: #0059d4;
`;

const UserInfoView = styled.View`
margin-top: 10px
  width: 376px;
  background: #ffffff;
  border-radius: 4px;
  opacity: 1;
  padding: 10px;
  left: 25px;
`;
const UserRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #8a8a8a;
`;
const UserTextCel = styled.View`
  justify-content: center;
  left: -20px;
`;
const UserCelRight = styled.View``;
const UserTitle = styled.Text`
  color: #0e304d;
  opacity: 1;
  font-size: 16px;
`;

const UserInfoTitle = styled.Text`
  left: 24px;
  color: #0e304d;
  opacity: 1;
  font-size: 16px;
`;
const UserSubtitle = styled.Text`
  color: #8a8a8a;
`;
const UserTextSubTitle = styled.Text`
margin-top:6px
  left: 24px;
  color: #8a8a8a;
`;
const UserMiniAvatar = styled.Image`
  height: 70px;
  width: 70px;
`;

const Title = styled.Text`
  color: #0e304d;
  left: 24px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const GraphRow = styled(Row)``;

const GraphImage = styled.Image`
  height: 150px;
  width: 150px;
`;

export default function ({ openDrawer }) {
  const name = "Pedro Almeida Nogueira";
  return (
    <>
      <Scroll>
        <Header
          openDrawer={() => {
            navigation.openDrawer();
          }}
        />
        <UserView>
          <BackView>
            <FontAwesome name="long-arrow-left" size={24} color="white" />
          </BackView>
          <Avatar source={require("../../../assets/avatar.png")} />
        </UserView>
        <PerfilInfoContainer>
          <Name>{name}</Name>
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

          <InforRow>
            <MiniCard>
              <TitleMiniCard>Processos</TitleMiniCard>
              <MiniCardNum>58</MiniCardNum>
            </MiniCard>

            <MiniCard>
              <TitleMiniCard>Entrevistas</TitleMiniCard>
              <MiniCardNum>3</MiniCardNum>
            </MiniCard>

            <WrapButton>
              <EditButton>Editar Perfil</EditButton>
            </WrapButton>
          </InforRow>
        </PerfilInfoContainer>
        <InformationView>
          <LastDesafios>
            <Last>Informações pessoais</Last>
            <SeeMore>Veja todas</SeeMore>
          </LastDesafios>
          <UserInfoView>
            <UserRow>
              <UserMiniAvatar
                source={require("../../../assets/miniavatar.png")}
              />
              <UserTextCel>
                <UserTitle>{name}</UserTitle>
                <UserSubtitle>pedro_almeida@gmail.com</UserSubtitle>
              </UserTextCel>
              <UserCelRight>
                <AntDesign name="right" size={24} color="#8A8A8A" />
              </UserCelRight>
            </UserRow>
            <UserRow>
              <UserTextCel>
                <UserTextSubTitle>Celular</UserTextSubTitle>
                <UserInfoTitle>11 95638-2122</UserInfoTitle>
              </UserTextCel>
              <UserCelRight>
                <AntDesign name="right" size={24} color="#8A8A8A" />
              </UserCelRight>
            </UserRow>
            <UserRow>
              <UserTextCel>
                <UserTextSubTitle>Cidade</UserTextSubTitle>
                <UserInfoTitle>São Paulo</UserInfoTitle>
              </UserTextCel>
              <UserCelRight>
                <AntDesign name="right" size={24} color="#8A8A8A" />
              </UserCelRight>
            </UserRow>
            <UserRow>
              <UserTextCel>
                <UserTextSubTitle>Estado Civil</UserTextSubTitle>
                <UserInfoTitle>Solteiro</UserInfoTitle>
              </UserTextCel>
              <UserCelRight>
                <AntDesign name="right" size={24} color="#8A8A8A" />
              </UserCelRight>
            </UserRow>
          </UserInfoView>
          <Title>Evolução do seu Perfil</Title>
          <UserInfoView>
            <GraphRow>
              <GraphImage source={require("../../../assets/graph.png")} />
            </GraphRow>
          </UserInfoView>

          <LastDesafios>
            <Last>Seu currículo</Last>
            <SeeMore>Veja mais</SeeMore>
          </LastDesafios>

          <UserInfoView>
            <UserRow>
              <UserTextCel>
                <UserTextSubTitle>Experiência</UserTextSubTitle>
                <UserInfoTitle>Não Possui</UserInfoTitle>
              </UserTextCel>
              <UserCelRight>
                <AntDesign name="right" size={24} color="#8A8A8A" />
              </UserCelRight>
            </UserRow>
            <UserRow>
              <UserTextCel>
                <UserTextSubTitle>Escolaridade</UserTextSubTitle>
                <UserInfoTitle>
                  Ensino Médio - E.E. Moacyr Fernandes
                </UserInfoTitle>
              </UserTextCel>
              <UserCelRight>
                <AntDesign name="right" size={24} color="#8A8A8A" />
              </UserCelRight>
            </UserRow>
            <UserRow>
              <UserTextCel>
                <UserTextSubTitle>Cursos Complementares</UserTextSubTitle>
                <UserInfoTitle>7 cadastrados</UserInfoTitle>
              </UserTextCel>
              <UserCelRight>
                <AntDesign name="right" size={24} color="#8A8A8A" />
              </UserCelRight>
            </UserRow>
          </UserInfoView>
        </InformationView>
      </Scroll>
    </>
  );
}
