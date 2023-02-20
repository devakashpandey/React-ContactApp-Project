import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import AddEditPage from './pages/AddEditPage';
import ViewDetail from './pages/ViewDetail';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <>
     <div className='contact-app'>
       <ToastContainer position='top-center'/>
       
     <Routes>

      <Route path="/" element={ <Home/>}/>
      <Route path="/add" element={ <AddEditPage/>}/>
      <Route path="/update/:id" element={ <AddEditPage/>}/>
      <Route path="/detail/:id" element={ <ViewDetail/>}/>
      <Route path="/about" element={ <About/>}/>

     </Routes>

     </div>
   </>
  );
}

export default App;
