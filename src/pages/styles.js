import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight+20,
      backgroundColor: '#000121',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    marginTop: 48,
    color: '#777',
    fontWeight: 'bold'
  },
  inputNome: {
    borderWidth: 1,
    borderColor: '#777',
    width: 250,
    borderRadius: 100,
    textAlign: 'center',
    color: '#777',
    borderStyle: 'solid',
    marginTop: 20
  },
  inputAno: {
    borderWidth: 1,
    borderColor: '#777',
    width: 250,
    borderRadius: 100,
    textAlign: 'center',
    color: '#777',
    borderStyle: 'solid',
    marginTop: 20
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',    
  },
  texto:{
    color: '#777',
    fontSize: 16,
    textAlign: 'center',    
  },
   textoAno:{
    color: '#777',
    fontSize: 16,
    textAlign: 'center',    
    marginTop: '5%',
  },
   textoNome:{
    color: '#777',
    fontSize: 16,
    textAlign: 'center',
    marginTop: '12%',    
  },
  button:{
    
    width: 150,
    borderRadius: 9,
    textAlign: 'center',
    color: '#777',
    borderStyle: 'solid',    
    marginTop: '21%',
    padding: 5,
    backgroundColor: '#570003',
  },
  textoresultado:{
    color: '#777',
    fontSize: 16,
    textAlign: 'center',
    marginTop: '40%',  
  }
  

})