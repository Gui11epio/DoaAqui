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

function DrawerScreens() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TelaHome} />
      <Drawer.Screen name="Explorar" component={TelaExplorar} />
      <Drawer.Screen name="Campanhas" component={TelaCampanhas} />
      <Drawer.Screen name="ONGs" component={TelaOngs} />
      <Drawer.Screen name="Sobre Nós" component={TelaSobreNos} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Drawer" component={DrawerScreens} />
        <Stack.Screen name="Cadastrar" component={TelaCadastro} />
        <Stack.Screen name="Doações" component={TelaDoacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
