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
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Component/Footer';

AOS.init();

function App() {
  return (
    <>
      <Animation />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<DataNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
