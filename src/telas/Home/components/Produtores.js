import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import {carregaProd} from '../../../servicos/carregaDados';
function Produtores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState('');
  useEffect(() => {
    const ret = carregaProd();
    setTitulo(ret.titulo);
    setLista(ret.lista);
  }, []);
  const Titulo = () => {
    return <Text style={estilo.tit}>{titulo}</Text>;
  };
  return (
    <FlatList
      data={lista}
      renderItem={({item: {nome}}) => <Text>{nome}</Text>}
      ListHeaderComponent={Titulo}
      keyExtractor={({nome}) => nome}
    />
  );
}

export default Produtores;

const estilo = StyleSheet.create({
  tit: {
    fontSize: 30,
  },
});
