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
import Footer from "../../Footer/Footer";
import Signup from "../../../Component/Auth/Signup/Signup";
    
export default function Clothes(){
    const{todos} = useSelector(state => state.todos)
    const { login, setGenders,genders,isHigh, pop, search,setisHigh} = useContext(Context);
    const navigate = useNavigate()
    const [baskets, setBaskets] = useState([])
  
    useEffect(() =>{
        setGenders("kadin")
        setisHigh("low")
    },[])
   
    if( isHigh === "low"  ){   

    return (
        <>
        <Login trigger={login} />
        <Signup sign ={pop}/>
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
        <Footer/>
        </>
    )
}else{
    return (
        <>
       <Login trigger={login} />
        <Signup sign ={pop}/>
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
        <Footer/>
        </>
        )
}
}