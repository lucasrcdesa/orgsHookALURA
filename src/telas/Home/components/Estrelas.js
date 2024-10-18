import React, {useState} from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import estrelaOn from '../../../assets/produtores/estrela.png';
import estrelaOff from '../../../assets/produtores/estrelaCinza.png';

function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = true,
  grande = false,
}) {
  const [quant, setQuant] = useState(quantidadeAntiga);

  const getImage = i => {
    if (i < quant) {
      return estrelaOn;
    }
    return estrelaOff;
  };

  const RenderEstrelas = () => {
    const lista = [];

    for (let i = 0; i < 5; i++) {
      lista.push(
        <TouchableOpacity
          key={i}
          disabled={!editavel}
          onPress={() => setQuant(i + 1)}>
          <Image style={estilizacao(grande).estrela} source={getImage(i)} />
        </TouchableOpacity>,
      );
    }
    return lista;
  };

  return (
    <View style={estilizacao(grande).estrelas}>
      <RenderEstrelas />
    </View>
  );
}

export default Estrelas;

const estilizacao = grande =>
  StyleSheet.create({
    estrelas: {
      padding: 10,
      flexDirection: 'row',
    },
    estrela: {
      height: grande ? 20 : 10,
      width: grande ? 20 : 10,
    },
  });
