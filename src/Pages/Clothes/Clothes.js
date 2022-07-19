import Header from "../Header/Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import './clothes.css'
import Sidebar from "../../Component/Sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import Login from "../../Component/Auth/Login/Login";
import Context from "../../Component/Context/Context";
import Section from "../../Component/Lazyload/Section/section";
import FavouriteBtn  from "../Favourite/FavouriteBtn";
import { infinite } from "../../Firebase";

export default function Clothes(){
    const{todos} = useSelector(state => state.todos)
    const { login} = useContext(Context);
    const[loading, setLoading] = useState(12)
    useEffect(()=>{
        infinite(loading)
    },[])
    function loadmore(x){
        infinite(loading+4)
        setLoading(loading+4)
    }
    if(loading <= todos.length  ){   
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
                { [...todos].map((todo,index) => ( 
                   
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
                    <button onClick={() => loadmore(5) }>load more</button>
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
                { [...todos].map((todo,index) => ( 
                   
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
                     <button disabled onClick={() => loadmore(5) }>Tüm Ürünler Listelenmiştir</button>
                </div>
            </div>
        </div>
        
        </>
        )
}
}