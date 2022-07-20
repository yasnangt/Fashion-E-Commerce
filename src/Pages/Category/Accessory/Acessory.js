import Header from "../../Header/Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import '../Clothes/clothes.css'
import Sidebar from "../../../Component/Sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import Login from "../../../Component/Auth/Login/Login";
import Context from "../../../Component/Context/Context";
import Section from "../../../Component/Lazyload/Section/section";
import FavouriteBtn  from "../../Favourite/FavouriteBtn";

export default function Accessory(){
    const{todos} = useSelector(state => state.todos)
    const { login,setGenders, genders,isHigh} = useContext(Context);
    useEffect(() =>{
        setGenders("kadin")
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
                   
                    <div className="clothes-product-card" key={index} >
                    <div>
                        <div className='fav-container'>
                            <div className='fav-btn'>
                                <FavouriteBtn />
                            </div> 
                        </div>
                    <a href="#t">
                        <div>  
                            <Section src={todo.photoURL}/>
                        </div>
                    </a>
                    <div > 
                        <div className="clothes-product-description"> 
                            <div>
                                <p><strong>{todo.title}</strong></p>
                            </div>                        
                            <div>
                                <h3 className="clothes-product-price"><strong>{todo.pricetype}{todo.price}</strong></h3> 
                            </div>                            
                        </div>
                    </div>    
                    </div>
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
                   
                    <div className="clothes-product-card" key={index} >
                    <div>
                        <div className='fav-container'>
                            <div className='fav-btn'>
                                <FavouriteBtn />
                            </div> 
                        </div>
                    <a href="#t">
                        <div>  
                            <Section src={todo.photoURL}/>
                        </div>
                    </a>
                    <div > 
                        <div className="clothes-product-description"> 
                            <div>
                                <p><strong>{todo.title}</strong></p>
                            </div>                        
                            <div>
                                <h3 className="clothes-product-price"><strong>{todo.pricetype}{todo.price}</strong></h3> 
                            </div>                            
                        </div>
                    </div>    
                    </div>

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