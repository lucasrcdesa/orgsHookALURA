import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Estrelas from './Estrelas';

function Produtor({nome, imagem, distancia, estrelas}) {
  const [ligado, setLigado] = useState(false);
  return (
    <TouchableOpacity style={estilos.cards} onPress={() => setLigado(!ligado)}>
      <Image source={imagem} accessibilityLabel={nome} style={estilos.img} />
      <View style={estilos.info}>
        <View>
          <Text>{nome}</Text>
          <Estrelas quantidade={estrelas} editavel={ligado} grande={ligado} />
        </View>
        <Text>{distancia}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Produtor;

const estilos = StyleSheet.create({
  cards: {
    backgroundColor: '#f6f6f6',
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    elevation: 4,
  },
  img: {
    height: 48,
    width: 48,
    borderRadius: 0,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
