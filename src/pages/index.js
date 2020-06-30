import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Logo from '../assets/logo.png';
import api from '../services/api';
import IbgeController from '../controllers/ibgeControler';

export default function Home({ navigation }) {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={Logo} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Aplicativo de nomes do IBGE</Text>
        <Text style={styles.textoNome}>Informe um nome </Text>
        <TextInput 
        style={styles.inputNome} 
        onChangeText={(val) => setName(val)} 
        maxLength={15}
        />
        <Text style={styles.textoAno}>Informe o ano de nascimento </Text>
        <TextInput
          style={styles.inputAno}
          onChangeText={(vala) => setYear(vala)}
          keyboardType={'numeric'}
          maxLength={4}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => IbgeController(name, year, navigation)}>
          <Text 
          style={styles.texto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
