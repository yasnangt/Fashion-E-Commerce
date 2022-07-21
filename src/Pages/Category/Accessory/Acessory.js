import Header from "../../Header/Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import '../Clothes/clothes.css'
import Sidebar from "../../../Component/Sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import Login from "../../../Component/Auth/Login/Login";
import Context from "../../../Component/Context/Context";
import Products from "../../../Component/Product/product";

export default function Accessory(){
    const{todos} = useSelector(state => state.todos)
    const { login,setGenders, genders,isHigh,setisHigh} = useContext(Context);
    const [baskets, setBaskets] = useState([])
    useEffect(() =>{
        setGenders("kadin")
        setisHigh("low")
    },[])

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
                    if(item.category === "aksesuar" && item.gender === genders ) 
                        return item
                })
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
                    if(item.category === "aksesuar" && item.gender === genders )
                        return item 
                       } )
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