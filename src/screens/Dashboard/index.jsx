import React from "react";
import styled from "styled-components";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import ImageElipse from "../../assets/elipse.png";

const Scroll = styled.ScrollView``;

const HeaderContainer = styled.View`
  margin-top: 10px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const RightView = styled.View`
  width: 80px;
  justify-content: space-between;
  flex-direction: row;
`;

const SearchArea = styled.View``;
const SearchTitle = styled.Text`
  margin-left: 24px;
  text-align: left;
  font: normal normal bold 18px/22px Barlow;
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
const ProjectWrapper = styled.View``;
const ProjectTitle = styled.Text`
  font-size: 18px;
  color: #0e304d;
  opacity: 1;
`;
const JobTitle = styled.Text`
  color: #0059d4;
  opacity: 1;
`;

export default function () {
  return (
    <>
      <Scroll>
        <Elipse source={ImageElipse} />
        <HeaderContainer>
          <AntDesign name="bars" size={30} color="black" />
          <RightView>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              color="black"
            />
            <FontAwesome5 name="user" size={30} color="black" />
          </RightView>
        </HeaderContainer>

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
        </ProjectContainer>
      </Scroll>
    </>
  );
}
