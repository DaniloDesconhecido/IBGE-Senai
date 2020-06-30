import api from '../services/api';
import {AsyncStorage} from 'react-native';

export default async function IbgeController(name,year,navigation){
  
  const response = await api.get('/'+ name);
  const getName = response.data[0].nome;
  const maximumSize = response.data[0].res.length;
  
  let maximumValue = response.data[0].res[0].frequencia;
  
  for(let i =0; i< maximumSize;i++){
    
    var aux = response.data[0].res[i].frequencia;
  
    if(maximumValue < aux){
      var decade = response.data[0].res[i].periodo;
      maximumValue = aux;
    }
  }
  
  const timePeriodOne = decade.replace(/(\D)/g,',').split(',')[1];
  const timePeriodTwo = decade.replace(/(\D)/g,',').split(',')[2];  
  
  const period = timePeriodOne + ' - ' + timePeriodTwo;
  var description = 'A década que mais nasceu '+getName+' foi '+period;

  if(year >= timePeriodOne && year <= timePeriodTwo){
      description = 'O periodo do seu ano é o que mais nasceu '+getName+' '+ period;
  }  
  await AsyncStorage.setItem('description', description);
  return (navigation.navigate('Response'), {header:null});
}
