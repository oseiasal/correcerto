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
const RightView = styled.View`
  width: 80px;
  justify-content: space-between;
  flex-direction: row;
`;

const HeaderContainer = styled.View`
  margin-top: 10px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Header({ openDrawer }) {
  return (
    <HeaderContainer>
      <AntDesign
        name="bars"
        size={30}
        color="white"
        onPress={() => {
          openDrawer();
        }}
      />
      <RightView>
        <MaterialCommunityIcons name="bell-outline" size={30} color="white" />
        <FontAwesome5 name="user" size={30} color="white" />
      </RightView>
    </HeaderContainer>
  );
}
