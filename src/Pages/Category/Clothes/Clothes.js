import Header from "../../Header/Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import './clothes.css'
import Sidebar from "../../../Component/Sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import Login from "../../../Component/Auth/Login/Login";
import Context from "../../../Component/Context/Context";
import Section from "../../../Component/Lazyload/Section/section";
import FavouriteBtn  from "../../Favourite/FavouriteBtn";
import { useNavigate} from 'react-router-dom'   
import Products from "../../../Component/Product/product";
    
export default function Clothes(){
    const{todos} = useSelector(state => state.todos)
    const { login, setGenders,genders,isHigh, setItems, items, search,setisHigh,setFav,fav} = useContext(Context);
    const navigate = useNavigate()
    const [baskets, setBaskets] = useState([])
  
    useEffect(() => {
        console.log(fav)
      },[fav])

    useEffect(() =>{
        setGenders("kadin")
        setisHigh("low")
    },[])
    function showItems(x){
        setItems(x)
        navigate("/clothes-item")
    }
    const basket = () => {
        setFav([...fav], todos)
    }
    
   

    if( isHigh === "low"  ){   

    return (
        <>
        <Login trigger={login} />
        <Header/>
        <div className="clothes-container">
            <div>
                <Sidebar/>
            </div>
            <div className="clothes-product-content">
            <div className="clothes-product-container">     
                { [...todos]
                .sort((a, b) => a.price - b.price)
                .filter((item) =>{
                    if(search != ""){
                        if(item.category === "kiyafet" && item.gender === genders && item.title === search )
                        return item 
                       }
                    else{
                        if(item.category === "kiyafet" && item.gender === genders )
                        return item 
                    }   
                })
                .map((todo,index) => ( 
                    <div key={index}>
                        <Products product={todo} bask={baskets} setBask={setBaskets} />
                    </div>
                   
                    
                ))}
            </div>
                <div className="loadmore-content">
                    
                </div>
            </div>
        </div>
        </>
    )
}else{
    return (
        <>
        <Login trigger={login} />
        <Header/>
        <div className="clothes-container">
            <div>
                <Sidebar/>
            </div>
            <div className="clothes-product-content">
            <div className="clothes-product-container">     
                { [...todos]
                .sort((a, b) => b.price - a.price)
                .filter((item) =>{
                    if(search != ""){
                        if(item.category === "kiyafet" && item.gender === genders && item.title === search )
                        return item 
                       }
                    else{
                        if(item.category === "kiyafet" && item.gender === genders )
                        return item 
                    }   
                    }
                     )
                .map((todo,index) => ( 
                    <div>
                      <Products product={todo} bask={baskets} setBask={setBaskets} /> 
                    </div>
                    
                ))}
            </div>
                <div className="loadmore-content">
                    
                </div>
            </div>
        </div>
        
        </>
        )
}
}