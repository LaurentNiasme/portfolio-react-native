import React from 'react';
import {View, Text, Button } from 'react-native';
import ButonNavBar from '../buton/ButonNavBar';
import styleNavBar from '../../styles/navBar.component.style'

import { StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MainWorks from '../works/MainWorks';
import MainAbout from '../about/MainAbout';
import MainHome from '../home/MainHome';
import MainSkills from '../skills/MainSkills';
import MainMemento from '../game/memento/MainMemento'
import MainTabBar from '../navBar/MainTabBar';

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Profile'>;


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const MainNavBar = () => {

    return(
    <Tab.Navigator
    initialRouteName="Home"
    tabBar={props=><MainTabBar {...props}/>}
    tabBarOptions={{
      // activeTintColor: 'red',
      // style:{
      //   backgroundColor:'#3e4d69',
      // },
    
      // labelStyle: {
      //   fontSize: 20,
      //   margin: 0,
      //   padding: 0,
      //   textAlign:'center',
      //   textAlignVertical:'center'

      // },
    }}
    >
        <Tab.Screen name="Home" component={MainHome}/>
        <Tab.Screen name="About" component={MainAbout}/>
        <Tab.Screen name="Works" component={MainWorks}/>
        <Tab.Screen name="Skills" component={MainSkills}/>
        <Tab.Screen name="Game" component={MainMemento}/>
    </Tab.Navigator>
    )
}

export default MainNavBar

{/* <ButonNavBar name ={"Home"} route={"/"} url={"url"} urlIcone ={"url icone"} handleClick={()=>{"something"}}  nameClick={"name"}/>
<ButonNavBar name ={"Home"} route={"/"} url={"url"} urlIcone ={"url icone"} handleClick={()=>{"something"}}  nameClick={"name"}/>
<ButonNavBar name ={"Home"} route={"/"} url={"url"} urlIcone ={"url icone"} handleClick={()=>{"something"}}  nameClick={"name"}/>
<ButonNavBar name ={"Home"} route={"/"} url={"url"} urlIcone ={"url icone"} handleClick={()=>{"something"}}  nameClick={"name"}/>
<ButonNavBar name ={"Home"} route={"/"} url={"url"} urlIcone ={"url icone"} handleClick={()=>{"something"}}  nameClick={"name"}/> */}