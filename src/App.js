import './App.css';
import Context from './Component/Context/Context'
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Modal from './Component/Auth/Re-auth/Modal';
import { useSelector } from 'react-redux';
import AddProduct from './Pages/Admin/addProduct/AddProduct';
import Admin from './Pages/Admin/Admin';

//Pages& Component


function App() {

  const [isRange, setisRange] = useState("100")
  const [isHigh, setisHigh] = useState("low")
  const [login, setLogin] = useState(false)
  const [pop, setPop] = useState(false)
  const [isRight, setisRight] =useState(false)
  const [ok, setOk] = useState("")
  const [Remove, setRemove] = useState("") 
  const [search, setSearch] = useState("")
  const [name , setName] = useState("")

  const datas = {
    isRange,    isHigh,
    setisRange, setisHigh,
    login,      isRight,
    setLogin,   setisRight,
    Remove,     ok,
    setRemove,  setOk,
    pop,        search,
    setPop,     setSearch,
    name,
    setName
  }
  const {open, data} = useSelector(state => state.modal)
  console.log(search);
  return (
    <>
    <Context.Provider value={datas}>
      <Toaster/>
      <Modal name={open} data={data}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/admin-add-product' element={<AddProduct/>} />
      </Routes>
      

    </Context.Provider>
    </>
    
      
  );
}

export default App;
