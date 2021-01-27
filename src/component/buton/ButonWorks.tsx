import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styleWorks from '../../styles/works.component.style';

type butonWorksProps = {
    handleClick : (idBtn:number, name:string ) => void,
    name:string, 
    idBtn:number,
   
}

const ButonWorks = ({handleClick, name, idBtn}:butonWorksProps)=> {


    return(
  

        <View>
            <TouchableOpacity   onPress={(e)=>handleClick(idBtn, name)}  >
                <Text >
                {name}
                </Text>
            </TouchableOpacity>
        </View>
    )

};

export default ButonWorks;