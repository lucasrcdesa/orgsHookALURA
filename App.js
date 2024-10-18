import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Home from './src/telas/Home';

function App() {
  return (
    <SafeAreaView style={estilo.tela}>
      <Home />
    </SafeAreaView>
  );
}

export default App;

const estilo = StyleSheet.create({
  tela: {
    flex: 1,
  },
});
