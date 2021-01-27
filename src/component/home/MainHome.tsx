import React from 'react';
import {Text, View} from 'react-native';
import stylesTextHome from '../../styles/textHome.component.style';

const MainHome = ()=> {

    return (
            <View style={stylesTextHome.mainConainer}>
                <View style={[ stylesTextHome.hello]}>
                    <Text style={[stylesTextHome.textHello,stylesTextHome.textColor]}>
                        Hello World
                    </Text>
                </View>
                <View style={stylesTextHome.name}>
                    <Text style={[stylesTextHome.textName,stylesTextHome.textColor]} >
                        Laurent Niasme
                    </Text>
                </View>
                <View style={stylesTextHome.dev}>
                    <Text style={[stylesTextHome.textHello,stylesTextHome.textColor]} >
                        Développeur Web
                    </Text>
                </View>
                <View style={stylesTextHome.frontEnd}>
                    <Text style={[stylesTextHome.textFrontEnd,stylesTextHome.textColor]}>                 
                        Front End
                    </Text>    
                </View>
            </View>
    )
}

export default MainHome