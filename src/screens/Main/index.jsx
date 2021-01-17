import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import Home from "./Home";
import Login from "../Login";

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <Drawer.Navigator
      drawerStyle={{ backgroundColor: "#0059D4", width: "80%" }}
      drawerContentOptions={{
        activeTintColor: "#FFAB2C" /* font color for active screen label */,
        inactiveTintColor:
          "white" /* Font color for inactive screens' labels */,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Desafios" component={Home} />
      <Drawer.Screen name="Curriculo" component={Home} />
      <Drawer.Screen name="Seus Projetos" component={Home} />
      <Drawer.Screen name="Teste Vocacional" component={Home} />
      <Drawer.Screen name="Perfil" component={Home} />
      <Drawer.Screen name="Sair" component={Login} />
    </Drawer.Navigator>
  );
}
