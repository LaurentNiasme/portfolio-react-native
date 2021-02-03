import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import mementoStyle from '../../../styles/memento.component.style';

type CaseMementoProps = {
    dataMemento : {
        entity:string,
        color : string,
        icone: number,
        
    },
    onPressCase : (entity:string, keycase:number)=> void,
    keyCase : number,
    entityFind : string[],
    start:boolean,
    allCreate: boolean,
    bothEntitySelect:number[],
}

const CaseMemento = ({dataMemento, onPressCase, keyCase, entityFind, start, allCreate, bothEntitySelect} : CaseMementoProps) => {

    const  [styleColor, setStyleColor] = useState<string>("black")
    const [styleCase, setStyleCase] = useState<object>(mementoStyle.caseInit)
    // if (dataMemento.entity !== "neutre"){
       
    // }
    const switchColor = () => {
        // si le duos est trouvé
        if(entityFind.includes(dataMemento.entity)){
            // setStyleColor(dataMemento.color)
            setStyleCase(mementoStyle.caseFind)
        }else if (dataMemento.entity !=="neutre"){
            // setStyleColor("black")
            setStyleCase(mementoStyle.caseBack)
        } 
    }

    useEffect(()=>{
        // si les cases sont simplement retournés 
        if(bothEntitySelect.includes(keyCase)){
            // setStyleColor(dataMemento.color)
            setStyleCase(mementoStyle.caseReturn)
        }else if (dataMemento.entity !=="neutre"&& entityFind.includes(dataMemento.entity)!==true){
            setStyleCase(mementoStyle.caseBack)
        } 
    },[bothEntitySelect])
    
    useEffect(()=> {
        if (start){

            switchColor()
          
        }
    },[entityFind])

    useEffect(()=>{
     
        if(start){
            switchColor()
        }else{

            setStyleCase(mementoStyle.caseInit)
           
        }
    },[start])

 

    return (
      
            <TouchableOpacity key={keyCase} onPress={()=>onPressCase(dataMemento.entity, keyCase)} 
            // style={start ? [mementoStyle.case, {backgroundColor:styleColor}]:[mementoStyle.case, {backgroundColor:dataMemento.color}]}
            // style={start ? [mementoStyle.case, {backgroundColor:styleColor}]:mementoStyle.case}
            style={(dataMemento.entity ==="neutre") ? [mementoStyle.case, mementoStyle.caseNeutre]:[mementoStyle.case, styleCase]}
            >
                    {(dataMemento.entity ==="neutre") ? null : <Image source={dataMemento.icone} style={mementoStyle.iconeMemento} />}
                <Text>
                    {/* {dataMemento.entity!=="neutre" ? `${dataMemento.color}` : "f"} */}
                </Text>
            </TouchableOpacity>
        
    )
}

export default CaseMemento