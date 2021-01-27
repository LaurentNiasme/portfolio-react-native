import React from 'react';
import {View, Text} from 'react-native';
import ButonNavBar from '../buton/ButonNavBar';
import styleNavBar from '../../styles/navBar.component.style'

const MainNavBar = () => {

    return(
        <View style={styleNavBar.navBar}>
            <ButonNavBar name ={"Home"} route={"/"} url={"url"} urlIcone ={"url icone"} handleClick={()=>{"something"}}  nameClick={"name"}/>
            <ButonNavBar name ={"Home"} route={"/"} url={"url"} urlIcone ={"url icone"} handleClick={()=>{"something"}}  nameClick={"name"}/>
            <ButonNavBar name ={"Home"} route={"/"} url={"url"} urlIcone ={"url icone"} handleClick={()=>{"something"}}  nameClick={"name"}/>
            <ButonNavBar name ={"Home"} route={"/"} url={"url"} urlIcone ={"url icone"} handleClick={()=>{"something"}}  nameClick={"name"}/>
            <ButonNavBar name ={"Home"} route={"/"} url={"url"} urlIcone ={"url icone"} handleClick={()=>{"something"}}  nameClick={"name"}/>
        </View>
    )
}

export default MainNavBar