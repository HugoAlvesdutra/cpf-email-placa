import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { idenficadorTipoEntrada } from '../utils/utils';

const Main = () => {
  const [resultadoAvaliacaoTexto, setResultadoAvaliacaoTexto] = useState('...');
  const [textoEntrada, setTextoEntrada] = useState('');

  const tratarTextoDigitado = (text) => {
    setTextoEntrada(text);
  }

  const vetificarTexto = () => {
    const retorno = idenficadorTipoEntrada(textoEntrada);
    setResultadoAvaliacaoTexto(`Valor Informado: ${textoEntrada} \nTipo de entrada: ${retorno.tipoEntrada} \n Status: ${retorno.status}`);
  }

  return (
    <View style={styles.container}>
      <Text>Informe abaixo o dado que deseja identificar!</Text>
      <TextInput onChangeText={(text) => { tratarTextoDigitado(text) }} placeholder="Digite aqui a placa, email ou CPF"></TextInput>
      <Button onPress={() => { vetificarTexto() }} title="Verificar texto" accessibilityLabel="Verificar texto" />
      <Text>{resultadoAvaliacaoTexto}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

/* Estilo do componente */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default Main;