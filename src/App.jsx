import React from 'react';
import './App.scss';

import Layout from './hoc/Layout/Layout';
import AppRoutes from './AppRoutes';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <AppRoutes />
      </Layout>
    );
  }
}

export default App;
