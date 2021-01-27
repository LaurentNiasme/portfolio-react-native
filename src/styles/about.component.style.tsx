import {StyleSheet} from 'react-native'

const styleAbout = StyleSheet.create({
    mainAbout :{
        display:'flex',
        flexDirection:'column',
        margin:7,
        marginBottom:60,
        paddingBottom:40


    },
    aboutTitle : {
       fontSize:20,
       fontWeight:'bold',
       marginBottom:20,
       
    },
    containAboutText : {
        marginBottom:20,
        backgroundColor :'#313A56',
        padding:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        // elevation: 5
    },
    containAboutTextYears : {
        marginBottom:20,
        backgroundColor :'#313A56',
        padding:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        // elevation: 5
    },
    aboutText : {
        color : 'white',
        lineHeight:20,
        

    },
    aboutMainYears : {

    },

    mainYearsNavBar : {
        display:'flex',
        flexDirection:'row',
        flex:1,
        height:20,
        justifyContent:'center',
        marginBottom:20

    },
    butonYearJob : {
        width:'auto',
        height:25,
        backgroundColor:'rgb(54, 54, 54);',
        padding:5,
        display:'flex',
        justifyContent:'center'

    },
    buttonClickYears : {
        
    },
    buttonNotSelected : {
        
    },
    buttonClickYearsSelected : {
      
        borderBottomColor: '#6495ed',
        borderBottomWidth:5,
       
        
    },


    mainTextJob : {

    },

    yearsJob : {

    },

    listJob : {

    }



})

export default styleAbout