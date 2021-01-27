
import { create } from 'react-test-renderer';
import {StyleSheet  } from 'react-native';


 const styleNavBar = StyleSheet.create({
    navBar : {
        display:'flex',
        
        flexDirection:'row',
        // justifyContent:'center',
        height:60,
        width:'100%',
        backgroundColor:'rgb(39, 39, 39)',
        
    },
    butonSwitchPage : {
        display:'flex',
        flexDirection:'row',
        flex:1,
    },
    butonNavBar : {
        // width:250,
        height:'100%',
        flex:1,
        margin:1,
        backgroundColor:'#000000',
        color:'rgb(255, 255, 255)'
    },

    image : {
        display:'flex',
        flex:1
    },

    butonClick : {
        display:'flex',
    
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:0,
 
        color:'#6495ed',
        textAlign:'center',

    }
})
export default styleNavBar;