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
    marginTop: '10%',
    color: '#034b6e',
    fontWeight: 'bold',

  },
  contentContainer: {
    top: '35%',
    alignItems: 'center',
  },
  image: {
    width: "88%",
    height: 250,
    resizeMode:'cover'
    


  },
  logoContainer: {
    flexDirection: "row",
           flexWrap: "wrap",
          marginTop:'-55%',
           alignItems:'center',
           borderBottomColor:'#034b6e',
           borderBottomWidth:1


  },
  TextContainer: {
    flexDirection: "row",
           flexWrap: "wrap",
           alignItems:'center'

  },
  ContentContainer: {
    flexDirection: "row",
           flexWrap: "wrap",
           marginStart:'5%'

  },
  ContentText: {
    fontSize: 21,
    color: '#034b6e',
    padding:'10%',
    lineHeight: parseInt('30%'),
    textAlignLast: 'justify' ,
    
   

  },
  ButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems:'center',
    marginTop:'-28%'


  },
  Button: {
    textColor:'#034b6e'

  },
});