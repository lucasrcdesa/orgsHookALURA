import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Topo from './components/Topo';
import Produtores from './components/Produtores';
function Home() {
  return (
    <SafeAreaView>
      <Topo />
      <Produtores />
    </SafeAreaView>
  );
}

export default Home;
