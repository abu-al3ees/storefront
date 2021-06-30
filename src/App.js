import './App.css';
import {Provider} from 'react-redux';
import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import store from './store/index.js'
import Products from './components/products.js';



function App() {
  return (
    <>
      <Provider store={store()}>
        <Header />
        <main>
          <Products />

        </main>
        <Footer />
      </Provider>
    </>
  );
}

export default App;