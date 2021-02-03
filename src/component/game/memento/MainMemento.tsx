import React, {useState, useEffect, memo} from 'react';
import {View, Text, TouchableOpacity, GestureResponderEvent} from 'react-native';
import MainGlobal from '../../global/MainGlobal';
import ZoneMemento from './ZoneMemento';
import mementoStyle from '../../../styles/memento.component.style';
import { event } from 'react-native-reanimated';



const MainMemento =() => {
    const [nbrColor, setNbrColor] = useState<number>(2)
    const [start, setStart] = useState<boolean>(false)
    const [reset, setReset] = useState<boolean>(false)
    const [nbrDuosFind, setNbrDuosFind] = useState<number>(1)
    const [txtNbrDuos, setTxtNbrDuos] = useState<string>("Choisissez le nombre de duos à trouver")

    const onPress = (e:GestureResponderEvent, nbr:number)=> {
        e.preventDefault()

        setNbrColor(nbr)

    }
// lancer le jeu, les boutons reset et les flêches disparaissent 
    const onPressGo =() => {
        setStart(true)
        duosFind(0)
    };
// RESET : on affiche de nouveau les flêches et on remet tout à zéro
    const onPressReset = (e:GestureResponderEvent) => {
        e.preventDefault()
        setStart(false)
        setReset(true)
        setNbrDuosFind(0)
    }
// On n'est plus dans le reset
    const disableReset = () => {
        setReset(false)
    }
// Changer le texte qui affiche le nombre de duos à trouver
    const duosFind = (nbrDuos : number)=> {
        setNbrDuosFind(nbrDuos)

    }

    const changeTextDuos = () => {
        console.log(nbrColor, nbrDuosFind)
        let nbrString = (nbrColor-nbrDuosFind).toString()
        let text
        if((nbrColor-nbrDuosFind) === 1){
           text = start ? `Encore ${nbrString} duo à trouver` : `${nbrString} duo à trouver`
            setTxtNbrDuos(text)
        }else if((nbrColor-nbrDuosFind) === 0){
            text = "AAAh bah bravo :-)"
             setTxtNbrDuos(text)
         } else {
             console.log("texte me")
            text = start ? `Encore ${nbrString} duos à trouver` : `${nbrString} duos à trouver` 
            setTxtNbrDuos(text) 
         }
    }

// Fleche pour descendre le nombre de duos à trouver
    const onPressDecrease = (e:GestureResponderEvent) => {
        e.preventDefault()
        setStart(false)
        if(nbrColor<2){

        }else{

            setNbrColor(nbrColor-1)
            duosFind(0)
        }
    }

// flêche pour augmenter le nombre de duos à trouver
    const onPressIncrease = (e:GestureResponderEvent) => {
        e.preventDefault()
        setStart(false)
      
        if(nbrColor>12){
        }else{
            setNbrColor(nbrColor+1)
            duosFind(0)
        }
        
    }
    useEffect(()=>{
        start ? null : changeTextDuos(0)
    },[nbrColor])

    useEffect(()=>{
        start ?  changeTextDuos(0) : null
    },[start])

    useEffect(()=> {
        changeTextDuos(nbrDuosFind)
    },[nbrDuosFind])
    return (
        <MainGlobal>
            <View style={mementoStyle.containerMementoGame}>
                <View style={mementoStyle.containerMemento }>
                    <ZoneMemento nbrColor={nbrColor} start={start} reset={reset} disableReset={disableReset} duosFind={duosFind}/>
                </View>
                <View>
                    <Text style={mementoStyle.txtNbrColor}>
                        {/* {nbrColor-nbrDuosFind} {((nbrColor-nbrDuosFind) === 1) ? 'duo à trouver' : 'duos à trouver'} */}
                        {txtNbrDuos}
                    </Text>
                </View>
                <View style={mementoStyle.containerArrow}>
                    {start ?  null :  <TouchableOpacity onPress={(e)=>onPressDecrease(e)} style={mementoStyle.buton}>
                        <Text>
                            Left
                        </Text>
                    </TouchableOpacity>}
                   {start ? null : <TouchableOpacity onPress={(e)=>onPressIncrease(e)} style={mementoStyle.buton}>
                        <Text>
                            Right
                        </Text>
                    </TouchableOpacity>}
                </View> 
                <View style={{display:'flex', flexDirection:'row'}}>
                   {start ? null : <TouchableOpacity onPress={(e)=>onPressGo()} style={mementoStyle.buton}>
                        <Text>
                        go
                        </Text>
                    </TouchableOpacity>}
                    <TouchableOpacity onPress={(e)=>onPressReset(e)} style={mementoStyle.buton}>
                        <Text>
                        Reset
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
         
        </MainGlobal>
    )
}

export default MainMemento