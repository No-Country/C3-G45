import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../../store/store';
import Footer from '../footer/Footer';
import Navbar from '../nav/Navbar';
import LastEventsModal from '../modals/LastEventsModal';
import NewEvents from '../modals/NewEvents';
import AppRouter from '../../Router/AppRouter';
//import Stars from '../DecorativeStars/Stars';

import './App.css';

function App() {

  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          {/* <Stars /> */}
          <Navbar />
          <AppRouter />
          <LastEventsModal />
          <NewEvents />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
