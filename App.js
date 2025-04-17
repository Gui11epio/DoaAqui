import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import TelaHome from './telas/TelaHome';
import TelaExplorar from './telas/TelaExplorar';
import TelaCampanhas from './telas/TelaCampanhas';
import TelaDoacoes from './telas/TelaDoacoes';
import TelaSobreNos from './telas/TelaSobreNos';
import TelaCadastro from './telas/TelaCadastro';
import TelaOngs from './telas/TelaOngs';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TelaHome} />
      <Stack.Screen name="Cadastrar" component={TelaCadastro} />
      <Stack.Screen name="Explorar" component={TelaExplorar} />
      <Stack.Screen name="Campanhas" component={TelaCampanhas} />
      <Stack.Screen name="ONGs" component={TelaOngs} />
      <Stack.Screen name="Minhas Doações" component={TelaDoacoes} />
      <Stack.Screen name="Sobre Nós" component={TelaSobreNos} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainStack} />
        <Drawer.Screen name="Cadastrar" component={TelaCadastro} />
        <Drawer.Screen name="Explorar" component={TelaExplorar} />
        <Drawer.Screen name="Campanhas" component={TelaCampanhas} />
        <Drawer.Screen name="ONGs" component={TelaOngs} />
        <Drawer.Screen name="Minhas Doações" component={TelaDoacoes} />
        <Drawer.Screen name="Sobre Nós" component={TelaSobreNos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
