import React from "react";
import styled from "styled-components";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
  EvilIcons,
} from "@expo/vector-icons";
import ImageElipse from "../../../assets/elipse.png";
import Header from "../../../components/Header";

const Scroll = styled.ScrollView``;

const SearchArea = styled.View``;
const SearchTitle = styled.Text`
  margin-left: 24px;
  text-align: left;
  font-size: 24px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const SearchTool = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SearchView = styled.View`
  flex-direction: row;
  align-items: center;

  margin-left: 24px;
  width: 306px;
  height: 42px;

  background: #ffffff;
  border-radius: 4px;
  opacity: 0.5;
  padding-left: 5px;
`;
const Search = styled.TextInput`
  padding: 10px;
`;

const Elipse = styled.Image`
  position: absolute;
`;

const ToolView = styled.View`
  height: 42px;
  width: 42px;
  justify-content: center;
  align-items: center;
  margin-left: 24px;

  background: #ffffff;
  border-radius: 4px;
  opacity: 0.3;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Presentation = styled.Text`
  margin-top: 10px;
  margin-left: 24px;

  font-size: 14px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const TextData = styled.Text`
  margin-top: 10px;

  color: #ffab2c;
  opacity: 1;
`;

const ProjectContainer = styled.View`
  top: 10px;
  margin-left: 24px;
  width: 376px;
  height: 221px;
  background: #ffffff;
  box-shadow: 0px 0px 2px #00000029;
  border-radius: 4px;
  opacity: 1;
`;
const RowProject = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const IconCel = styled.View`
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
`;
const ProjectWrapper = styled.View`
  padding: 10px;
  opacity: 0.9;
`;
const ProjectTitle = styled.Text`
  font-size: 18px;
  color: #0e304d;
  opacity: 1;
`;
const JobTitle = styled.Text`
  color: #0059d4;
  opacity: 1;
`;

const InfoCard = styled.View``;
const Calendar = styled.Text``;
const InfoRow = styled(Row)`
  margin-top: 12px;
  margin-left: 12px;
`;

const InfoRowData = styled(Row)`
  margin-top: 12px;
  margin-left: 22px;
  justify-content: space-between;
`;
const LastTime = styled.Text``;
const ProjectStatus = styled.Text`
  margin-right: 24px;

  background: #0059d4;
  border-radius: 20px;
  opacity: 0.55;
  color: blue;
  padding: 5px;
`;

const ButtonWrap = styled.TouchableOpacity`
margin-top: 30px;
align-self: center;
width: 366px;
height: 48px;
border: 2px solid ${(props) => props.borderColor};
border-radius: 32px;	
justify-content: center
align-items: center;
background-color: ${(props) => props.backgroundColor};
`;

const NewProject = styled.Text`
  color: white;
`;

const LastDesafios = styled(Row)`
  justify-content: space-between;
  margin-top: 10px;
`;
const Last = styled.Text`
  margin-left: 22px;
`;
const SeeMore = styled.Text`
  margin-right: 22px;
`;

const LateralScrollView = styled.ScrollView`
  height: 150px;
  margin: 10px;
  padding: 5px;
`;
const Card = styled.View`
  left: 24px;
  width: 290px;
  height: 130px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  flex-direction: row;
  padding: 10px;
  margin: 5px;
`;

const WhiteCircle = styled.View`
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
`;
const InfoCardNew = styled.View``;

const TextTema = styled.Text`
  color: #0059d4;
`;
const TituloDesafio = styled.Text`
  font-size: 17px;
  letter-spacing: 0px;
  color: #0e304d;
  opacity: 1;
`;
const NomeEmpresa = styled.Text`
  color: #8a8a8a;
`;
const Dias = styled.Text`
  color: #8a8a8a;
`;

export default function ({ navigation }) {
  return (
    <>
      <Scroll>
        <Elipse source={ImageElipse} />

        <Header
          openDrawer={() => {
            navigation.openDrawer();
          }}
        />
        <SearchArea>
          <SearchTitle>Procurar por corre</SearchTitle>
          <SearchTool>
            <SearchView>
              <AntDesign name="search1" size={24} color="black" />
              <Search placeholder="Procure por um desafio" />
            </SearchView>
            <ToolView>
              <FontAwesome5 name="tools" size={24} color="black" />
            </ToolView>
          </SearchTool>
        </SearchArea>
        <Row>
          <Presentation>Você está participando de </Presentation>
          <TextData>5 desafios</TextData>
        </Row>
        <ProjectContainer>
          <RowProject>
            <IconCel>
              <Entypo name="circle" size={24} color="black" />
            </IconCel>
            <ProjectWrapper>
              <ProjectTitle>Titulo do Projeto</ProjectTitle>
              <JobTitle>Instituto CCR - Vila Olímpia</JobTitle>
            </ProjectWrapper>
            <IconCel>
              <Entypo name="share" size={24} color="black" />
            </IconCel>
          </RowProject>
          <InfoCard>
            <InfoRow>
              <EvilIcons name="calendar" size={24} color="black" />
              <Calendar>Data e Hora: 24 de janeiro - 14:23</Calendar>
            </InfoRow>
            <InfoRow>
              <MaterialIcons name="place" size={24} color="black" />
              <Calendar>Tema: Logística e políticas públicas</Calendar>
            </InfoRow>

            <InfoRowData>
              <LastTime>Há 10 dias</LastTime>
              <ProjectStatus>Enviado</ProjectStatus>
            </InfoRowData>
          </InfoCard>
        </ProjectContainer>
        <ButtonWrap backgroundColor="#0059D4" borderColor="#0059D4">
          <NewProject> Adicionar Projeto</NewProject>
        </ButtonWrap>

        <LastDesafios>
          <Last>Últimos desafios</Last>
          <SeeMore>Veja mais</SeeMore>
        </LastDesafios>
        <LateralScrollView horizontal={true}>
          <Card>
            <WhiteCircle>
              <Entypo name="circle" size={24} color="black" />
            </WhiteCircle>
            <InfoCardNew>
              <TextTema>Políticas Públicas</TextTema>
              <TituloDesafio>Título desafio</TituloDesafio>
              <NomeEmpresa>Nome da Empresa</NomeEmpresa>

              <Dias>Há 21 dias</Dias>
            </InfoCardNew>
          </Card>
          <Card>
            <WhiteCircle>
              <Entypo name="circle" size={24} color="black" />
            </WhiteCircle>
            <InfoCardNew>
              <TextTema>Políticas Públicas</TextTema>
              <TituloDesafio>Título desafio</TituloDesafio>
              <NomeEmpresa>Nome da Empresa</NomeEmpresa>

              <Dias>Há 21 dias</Dias>
            </InfoCardNew>
          </Card>
        </LateralScrollView>
      </Scroll>
    </>
  );
}
