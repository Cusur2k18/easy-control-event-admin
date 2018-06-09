import React from 'react';
import './App.scss';

import Layout from './hoc/Layout/Layout';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Hola</h1>
      </Layout>
    );
  }
}

export default App;
