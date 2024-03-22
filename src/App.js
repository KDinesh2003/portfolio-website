import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element = {<Home />} />
        <Route path='about' element = {<About />} />
        <Route path='contact' element = {<Contact />} />

        </Route>
        
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;