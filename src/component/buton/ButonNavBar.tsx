import React, {useState} from 'react';
import styleNavBar from '../../styles/navBar.component.style'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';

type ButonNavBarProps = {
    name: string;
    route: string;
    url:string;
    urlIcone:string;
    handleClick : (result:string)=>void;
    nameClick: string
}



const ButonNavBar = ({name, route, url, urlIcone, handleClick, nameClick}:ButonNavBarProps)=> {
    // const history = useHistory();
    const [overButon, setOverButon] = useState();
    const [nameButon, setNameBUton] = useState(false);
    const [urlIconeButon, setUrlIconeButon] = useState(urlIcone)

    const mouseOver = ()=> {
  
    }

    const mouseIn = () => {
       
    };

    const mouseLeave = () => {

    };


    return(
        <View style= {styleNavBar.butonNavBar}>
            {/* <a  href={route} style= {styleNavBar.butonClick}  onMouseEnter={mouseIn} onMouseLeave={mouseLeave} onMouseOver={mouseOver} onClick={()=>handleClick(name)} >
            { (nameButon || (name===nameClick)) ?  name : <img style={styleNavBar.image} src={urlIconeButon}  alt={name}  />}
            </a> */}
            <Button
            onPress={()=>(console.log("something"))}
            title="Something"
            />
            <Text style= {styleNavBar.butonNavBar}>bo</Text>
        </View>
    )
}

export default ButonNavBar;