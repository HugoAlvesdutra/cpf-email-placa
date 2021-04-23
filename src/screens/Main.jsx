import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { idenficadorTipoEntrada } from '../utils/utils';

const Main = () => {
  const [resultadoAvaliacaoTexto, setResultadoAvaliacaoTexto] = useState('...');
  const [textoEntrada, setTextoEntrada] = useState('');

  const tratarTextoDigitado = (e) => {
    setTextoEntrada(e.target.value)
  }

  const vetificarTexto = () => {
    idenficadorTipoEntrada(textoEntrada);
  }

  return (
    <View style={styles.container}>
      <Text>Informe abaixo o dado que deseja identificar!</Text>
      <TextInput onChange={(e) => { tratarTextoDigitado(e) }} placeholder="Digite aqui a placa, email ou CPF"></TextInput>
      <Button onPress={() => { vetificarTexto() }} title="Verificar texto" accessibilityLabel="Verificar texto" />
      <Text>Você digitou: {resultadoAvaliacaoTexto}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default Main;