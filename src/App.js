import './App.css';
import Context from './Component/Context/Context'
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Modal from './Component/Auth/Re-auth/Modal';
import { useSelector } from 'react-redux';
import AddProduct from './Pages/Admin/Products/addProducts/AddProduct';
import Admin from './Pages/Admin/Admin';
import Clothes from './Pages/Category/Clothes/Clothes';
import Cart from './Pages/ShoppingCart/Cart';
import Favourite from './Pages/Favourite/Favourites';
import Shoes from './Pages/Category/Shoes/Shoes'
import Bag from './Pages/Category/Bag/Bag';
import Accessory from './Pages/Category/Accessory/Acessory';
import Table from './Pages/Category/Table/Table';
import Glasses from './Pages/Category/Glasses/Glasses';
import ClothesProduct from './Pages/Category/Clothes/clothesProduct';

//Pages& Component


function App() {

  const [items, setItems] = useState("")
  const [isHigh, setisHigh] = useState("")
  const [login, setLogin] = useState(false)
  const [pop, setPop] = useState(false)
  const [isRight, setisRight] =useState(false)
  const [ok, setOk] = useState("")
  const [Remove, setRemove] = useState("") 
  const [search, setSearch] = useState("")
  const [name , setName] = useState("")
  const [load , setLoad] = useState("")
  const [genders , setGenders] = useState("kadin")
  const [fav , setFav] = useState([])

  const datas = {
    items,      isHigh,
    setItems,   setisHigh,
    login,      isRight,
    setLogin,   setisRight,
    Remove,     ok,
    setRemove,  setOk,
    pop,        search,
    setPop,     setSearch,
    name,       load,
    setName,    setLoad,
    genders,    fav,
    setGenders, setFav      
  }
  const {open, data} = useSelector(state => state.modal)
 
  
  return (
    <>
    <Context.Provider value={datas}>
      <Toaster/>
      <Modal name={open} data={data}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/admin-add-product' element={<AddProduct/>} />
        <Route path='/kiyafet' element={<Clothes/>} />
        <Route path='/sepetim' element={<Cart/>} />
        <Route path='/favoriler' element={<Favourite/>} />
        <Route path='/canta' element={<Bag/>} />
        <Route path='/aksesuar' element={<Accessory/>} />
        <Route path='/tablo' element={<Table/>} />
        <Route path='/ayakkabi' element={<Shoes/>} />
        <Route path='/gozluk' element={<Glasses/>} />
        <Route path='/clothes-item' element={<ClothesProduct/>} />
      </Routes>
      

    </Context.Provider>
    </>
    
      
  );
}

export default App;
