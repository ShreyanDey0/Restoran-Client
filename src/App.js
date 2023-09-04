import Header from './components/header';
import Footer from './components/footer';
import Home from './components/body/home';
import AboutUs from './components/body/aboutUs';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Menu from './components/body/menu';
import Services from './components/body/services';
import ContactUs from './components/body/contactUs';

function App() {
  return (
    <div className='container-xxl bg-white p-0'>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
