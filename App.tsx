
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import globalStyle from './src/styles/global.component.style'
import MainNavBar from './src/component/navBar/MainNavBar';
import MainWorks from './src/component/works/MainWorks';
import MainAbout from './src/component/about/MainAbout';
import MainHome from './src/component/home/MainHome';
import MainSkills from './src/component/skills/MainSkills';



const Stack = createStackNavigator();
const StackNavBar = createStackNavigator();

function stackNavBar() {
  return(
   <StackNavBar.Navigator>
     <StackNavBar.Screen
         name="navBar" 
         component={MainHome} 
         options={{ title: 'navBar' }}
     />
   </StackNavBar.Navigator>
  )
}

function NavStack() {
  return (
     <Stack.Navigator
     initialRouteName="home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="home" 
        component={MainHome} 
        options={{ title: 'home' }}
      />
    </Stack.Navigator>
  );
}


declare const global: {HermesInternal: null | {}};


const App = () => {
  return (
    <>
    <NavigationContainer>
             <MainNavBar/>
        </NavigationContainer>
      {/* <StatusBar barStyle="dark-content" />
  
   */}
    </>
  );
};



export default App;
