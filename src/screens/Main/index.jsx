import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Login from "../Login";
import Perfil from "./Perfil";
import TesteVocacional from "./TesteVocacional";

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
      <Drawer.Screen name="Teste Vocacional" component={TesteVocacional} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Sair" component={Login} />
    </Drawer.Navigator>
  );
}
