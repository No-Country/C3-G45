import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'store/store';
import Footer from 'components/footer/Footer';
import Navbar from 'components/nav/Navbar';
import NewProducts from 'components/modals/NewProducts';
import NewEvents from 'components/modals/NewEvents';
import AppRouter from 'Router/AppRouter';
//import Stars from 'components/DecorativeStars/Stars';

import './App.css';

function App() {

  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          {/* <Stars /> */}
          <Navbar />
          <AppRouter />
          <NewProducts />
          <NewEvents />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
