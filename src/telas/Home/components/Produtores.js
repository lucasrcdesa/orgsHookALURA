import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import {carregaProd} from '../../../servicos/carregaDados';
import Produtor from './Produtor';

function Produtores({topo: Topo}) {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState('');
  useEffect(() => {
    const ret = carregaProd();
    setTitulo(ret.titulo);
    setLista(ret.lista);
  }, []);
  const Titulo = () => {
    return (
      <>
        <Topo />
        <Text style={estilo.tit}>{titulo}</Text>
      </>
    );
  };
  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtor {...item} />}
      ListHeaderComponent={Titulo}
      keyExtractor={({nome}) => nome}
    />
  );
}

export default Produtores;

const estilo = StyleSheet.create({
  tit: {
    fontSize: 30,
    padding: 10,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});
