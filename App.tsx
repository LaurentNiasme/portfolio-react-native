
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
import globalStyle from './src/styles/global.component.style'
import MainNavBar from './src/component/navBar/MainNavBar';
import MainWorks from './src/component/works/MainWorks';
import TestExpo from './src/component/works/TestExpo';


declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <MainNavBar/>
        </View>
        <ScrollView style={globalStyle.main}>
              <MainWorks /> 
              {/* <TestExpo /> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



export default App;
