import {StyleSheet} from 'react-native'

const stylesTextHome = StyleSheet.create({
//   mainHome : {
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     height:'100%',
//     width:'100%',
//     backgroundColor:'red',
//     flexDirection:'column'
      
//   },
  mainConainer : {
    marginTop:150,
    width:'100%',
    height:200,
    display:'flex',
    justifyContent:'center',
      flexDirection:'column',
  },
  hello : {
    display:'flex',
    justifyContent:'center',
    paddingLeft:10,
    backgroundColor:'#2d384b',
    height:40,
    width: '55%',
    zIndex:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    
  },
  textHello : {
    fontSize: 20,
  },
  textColor : {
      color:'white',
  },
  name : {
    display:'flex',
    justifyContent:'center',      
    fontSize: 20,
    paddingLeft:10,
    backgroundColor:'#2b3649',
    height:60,
    width: '70%',
    zIndex:5,
    color:'white',
    
  },
  textName : {
    fontSize: 25,
  },
  dev : {
    display:'flex',
    justifyContent:'center',
    height:50,
    width: '60%',
    fontSize: 20,
    paddingLeft:10,
    backgroundColor:'#3e4d69',
    color:'white',
  },
  frontEnd : {
    display:'flex',
    justifyContent:'center',
    height:30,
    width: '40%',
    fontSize: 16,
    paddingLeft:10,
    backgroundColor:'#303c52',
    color:'white',
  },
  textFrontEnd : {
    fontSize: 16,
  },
})

export default stylesTextHome