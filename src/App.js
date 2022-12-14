import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import News from './Pages/News';
import Contact from './Pages/Contact';
import DataNotFound from './Pages/DataNotFound';
import NavBar from './Component/NavBar';
import Animation from './Component/Animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

AOS.init();

function App() {
  return (
    <>
      <Animation />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<DataNotFound />} />
      </Routes>
    </>
  );
}

export default App;
