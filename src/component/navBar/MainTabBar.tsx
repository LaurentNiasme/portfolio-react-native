import React from 'react';
import {View,Text, TouchableOpacity,Image} from 'react-native';
import {BottomTabBarProps, BottomTabBarOptions} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
type MainTabBarProps = {

}

export interface iEmit {
    emit:()=>void
  }

const MainTabBar = ({state,descriptors, navigation}:BottomTabBarProps<BottomTabBarOptions>) => {
    return(
        <View style={{display:'flex',flexDirection:"row",justifyContent:'space-around',backgroundColor:'#3e4d69',}}>
            {state.routes.map((route, index)=>{
                const {options} = descriptors[route.key]
                const isFocused = state.index === index;

                let styleText  =  {color:'white'}
                let styleIcone = {width:30, height:30};
                const onPress = ()=> {
                    const event = navigation.emit(
                        {
                            type: 'tabPress',
                            target: 'skills',
                            canPreventDefault: true,
                        }
                    )
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                        styleText =  {color:'red'}
                        styleIcone = {width:30, height:30};
                      }
                }
                
                const onLongPress = () => {
                    navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                    });
                };

                let iconName 
                if (route.name==='Home'){
                    iconName= require("@images/icone_home.png")
                }else if (route.name==='About') {
                    iconName= require("@images/icone_about.png")
                } else if (route.name==='Works') {
                    iconName= require("@images/icone_works.png")
                }else{
                    iconName= require("@images/icone_skills.png")
                }
      
                return (
                    <TouchableOpacity
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style= {{display:'flex', flexDirection:'column', alignItems:'center', margin:10}}
                    >
                        <Text style={styleText}>
                            {route.name}
                           
                        </Text>
                        {/* <Ionicons name="md-checkmark-circle" size={32} color="green"  /> */}
                        <Image style = {styleIcone}  source={ iconName} />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
export default MainTabBar