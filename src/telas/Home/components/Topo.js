import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {carregaTopo} from '../../../servicos/carregaDados';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };
  attTopo() {
    const retorno = carregaTopo();
    this.setState({topo: retorno});
  }
  componentDidMount() {
    this.attTopo();
  }
  render() {
    return (
      <View style={estilos.container}>
        <Image
          style={estilos.img}
          source={require('../../../../src/assets/produtores/pogo.png')}
        />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  img: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 24,
    lineHeight: 42,
  },
  legenda: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Topo;
