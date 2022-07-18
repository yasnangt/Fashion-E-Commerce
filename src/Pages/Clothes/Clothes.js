import Header from "../Header/Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import './clothes.css'
import Sidebar from "../../Component/Sidebar/Sidebar";
import FavRoundedActive from "../../Component/FavComponent/favRoundedActive";
import FavRounded from "../../Component/FavComponent/favRounded";
import { useContext, useState } from "react";
import Login from "../../Component/Auth/Login/Login";
import Context from "../../Component/Context/Context";
import Section from "../../Component/Lazyload/Section/section";

export default function Clothes(){
    const{todos} = useSelector(state => state.todos)
    const { login, pop, setPop} = useContext(Context);
    const FavouriteBtn = ({value=false,}) => {
        const [isFavourite, setIsFavourite] = useState(value)
        const invertFav = (event) => {
            setIsFavourite( !isFavourite )
        }
    
        return (
            <button className='btn' type="button" onClick={invertFav}> {/* Çöp */}
                {
                    (isFavourite) ? <FavRoundedActive/> : <FavRounded/>   
                }
            </button>
        )
    }

       
    return (
        <>
        <Login trigger={login} />
        <Header/>
        <div className="clothes-container">
            <div>
                <Sidebar/>
            </div>
            
            <div className="clothes-product-container">     
                { [...todos].map((todo,index) => ( 
                   
                    <div className="clothes-product-card" key={index} >
                    <div>
                        <div className='fav-container'>
                            <div className='fav-btn'>
                                <FavouriteBtn/>
                            </div> 
                        </div>
                    <a>
                        <div>  
                            <Section src={todo.photoURL} styleClass/>
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

        </div>
        
        </>
    )
}