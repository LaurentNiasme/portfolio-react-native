import {StyleSheet} from 'react-native';

const mementoStyle = StyleSheet.create({

    containerMementoGame : {
        display:'flex',
        flexDirection:'column',
    },

    containerMemento : {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',

        marginTop:50,
        marginBottom:50,
        width:400,
        
       
    },
    ZoneMemento : {
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        width:350,
        height:350,
 
        alignItems:'center',
        justifyContent:'center'
    },
    case : {
        width : 55,
        height : 55,
        
        margin:1,
    },
    caseInit : {
        backgroundColor:'white',
    },
    caseBack : {
        backgroundColor:'black'
    },
    caseNeutre : {
        backgroundColor:'gray',
    },
    caseReturn : {
        backgroundColor:'blue',
    },

    caseFind : {
        backgroundColor:'red',
    },
    iconeMemento : {
        width:50,
        height:50,
        resizeMode:'contain'
    },
    containerArrow : {
        display:"flex",
        flexDirection: "row",
    },
    buton : {
        width : 55,
        height : 55,
        backgroundColor : "red",
        margin:1,
    },

    txtNbrColor : {
        fontSize : 22,
    },

    
})

export default mementoStyle