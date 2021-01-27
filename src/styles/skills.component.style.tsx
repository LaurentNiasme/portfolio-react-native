import {StyleSheet} from 'react-native';

const styleSkills = StyleSheet.create({
    mainSkill : {
        display:'flex',
        flexDirection:'column',
        margin:7,
        marginBottom:60,
        paddingBottom:40
    },

    containerText:{
        marginBottom:20,
        backgroundColor :'#313A56',
        padding:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },

    txtSkillTitle : {
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20,
        color : 'white',
        
    },

    TxtSkill : {
        color : 'white',
        lineHeight:20,
    },

    boldText : {
        fontWeight:'bold',
    },




})

export default  styleSkills