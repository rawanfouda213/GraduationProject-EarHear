import { StyleSheet } from "react-native";
//import {width ,height } from "./Welcomepage";
export const styles  = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 27,
     marginTop: '5%',
    color: '#034b6e',
    fontWeight: 'bold',

  },
  contentContainer: {
     top: '25%',
    alignItems: 'center',
  },
  image: {
    width: "80%",
    height: 250,
    resizeMode:'cover',
    marginTop:'-25%',
    justifyContent:'center',
    alignItems:'center',
  
  },

  logoContainer: {
    flexDirection: "row",
          //  flexWrap: "wrap",
          //  marginRight:'20%',
           alignItems:'center',
           borderBottomColor:'#034b6e',
           borderBottomWidth:.5,
         justifyContent:'center',
         marginTop:'25%'


  },
  TextContainer: {
    flexDirection: "row",
    
           alignItems:'center',
marginBottom:'-25%'
  },
  ContentContainer: {
    flexDirection: "row",
        
           marginStart:'5%'

  },
  ContentText: {
    fontSize: 22,
    color: '#034b6e',
 
    lineHeight: parseInt('30%'),
    textAlignLast: 'justify' ,
     marginTop:'35%'
   

  },
  ButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems:'center',
     marginTop:'2%'


  },
  Button: {
    textColor:'#034b6e'

  },
});