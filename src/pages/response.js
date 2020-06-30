import React, {useState, useEffect} from 'react';
import {View,Text,AsyncStorage,Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import Logo from '../assets/logo.png';
import { useNavigation } from "@react-navigation/native";

export default function Response(){
  const [description,setDescription] = useState('');
  const navigation = useNavigation();
  useEffect(()=>{
    async function getDescription(){
      setDescription(await  AsyncStorage.getItem('description'));
    }
    getDescription();
  },[]);

  return (
   <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={Logo} />
      </View>
      <View style={styles.body}>
        <Text style={styles.textoresultado}>{description}</Text>
      </View>
      <View style={styles.body}>
      <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.goBack()}>
          <Text 
          style={styles.texto}>Voltar</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}









