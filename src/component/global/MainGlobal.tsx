import React from 'react';
import  {View, SafeAreaView, ScrollView} from 'react-native';
import globalStyle from '../../styles/global.component.style'

type Props = {
    children?: React.ReactNode;};

const MainGlobal = ({children}:Props) => {

    return (
        <SafeAreaView>

        
        <ScrollView style={globalStyle.main} >
            {children}
        </ScrollView>
        </SafeAreaView>
    )
}
export default MainGlobal;