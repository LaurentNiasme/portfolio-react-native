import React, {useState, useEffect} from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import styleAbout from '../../styles/about.component.style';

export interface bigData {
    job:{
        puce:boolean | null,
        underYears:string,
        text:string[]
    }[],
    years:string,
  }

type ButonYearsJobProps = {
    years:string,
    handleClick : (e:MouseEvent, idBtn:number, data:bigData ) => void,
    idBtn : number,
    style: object,
    data:{
        job:{
            puce:boolean | null,
            underYears:string,
            text:string[]
        }[],
        years:string,      
    }
}

const ButonYearsJob = ({years, handleClick, idBtn, style, data}:ButonYearsJobProps) => {
    console.log(data.years)
    return (
        <View style={styleAbout.butonYearJob}>
            <TouchableOpacity onPress={(e)=>handleClick(e, idBtn, data)} style={style} >
                <Text style = {styleAbout.aboutText}>
                    {data.years}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButonYearsJob;