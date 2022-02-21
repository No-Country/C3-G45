import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../Router/AppRouter';
import Footer from '../footer/Footer';
import Navbar from '../nav/Navbar';
import LastEventsModal from '../modals/LastEventsModal';
import './App.css';
import NewEvents from '../modals/NewEvents';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRouter />
        <LastEventsModal />
        <NewEvents />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
