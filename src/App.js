import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import WorkWithUs from './pages/WorkWithUs';
import Main2 from './component/Main2';
import Bmw from './component/Bmw';
import SignUp from './pages/SignUp';
import Form from './pages/Form';
import Flip from './component/Flip'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/workwithus" element={<WorkWithUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
