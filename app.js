import * as React from 'react';
import { createAppContainer, createBottomTabNavigator } from '@react-navigation/native';
import { Text, View, StyleSheet, Component } from 'react-native';
import Constants from 'expo-constants';
import {
  HomeScreen,
  PerfilScreen,
  PesquisaScreen,
  ProfissionalScreen,
} from './telas/Index';

const TabNavigator = createBottomTabNavigator  ({
  
  Home: HomeScreen,
  Perfil: PerfilScreen,
  Pesquisar: PesquisaScreen,
  ProfissionalPage: ProfissionalScreen,
  
},

{
  tabBarOptions: {
   labelStyle: {
     fontSize: 35,  
    },
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  } 
}
);

import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default createAppContainer(TabNavigator);

