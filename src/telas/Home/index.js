import React from 'react';

import Topo from './components/Topo';
import Produtores from './components/Produtores';
function Home() {
  return <Produtores topo={Topo} />;
}

export default Home;
