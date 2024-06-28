import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from'react-router-dom';
import Nav from './component/navbar.jsx';
import SignUp from './component/sign.jsx';
import Login from './component/login.jsx';
import About from './component/aboutus.jsx';
import ContactDetails from './component/contact.jsx';
import Forgot from './component/forgot.jsx';
import Error from './component/error.jsx';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/SignUp'element={<SignUp/>}></Route>
     <Route path='/'element={<Nav/>}></Route>
     <Route path='/Login'element={<Login/>}></Route>
     <Route path='/About'element={<About/>}></Route>
     <Route path='/ContactDetails'element={<ContactDetails/>}></Route>
     <Route path='/Forgot'element={<Forgot/>}></Route>
     <Route path='/*'element={<Error/>}></Route>
     </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
