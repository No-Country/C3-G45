import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../Router/AppRouter';
import Footer from '../footer/Footer';
import Navbar from '../nav/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
