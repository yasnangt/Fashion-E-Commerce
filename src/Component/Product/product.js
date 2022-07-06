import './product.css'
import { useState, useContext, useEffect, useCallback} from "react"
import { useSelector } from "react-redux"
import FavRounded from '../FavComponent/favRounded'
import FavRoundedActive from '../FavComponent/favRoundedActive'
import Context from '../Context/Context';
import { setTodos } from '../../store/todos'
import { faTrashCan,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteProduct } from '../../Firebase'

export default function Product(){
    const { user} = useSelector(state => state.auth)
    const { isRange, isHigh} = useContext(Context);
    const{todos} = useSelector(state => state.todos)
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
    const handleDelete = async id => {
        await deleteProduct(id)
    }

    if(user.uid ==="r5mhSX6lUFgrh1f7pSAYHhOdtdm2" || user.uid === "gx2fv5NSZHX81Ts0WCbljjwnWrm2" ) {
    return(
        <div>  
            <div className="main-container" >
            { [...todos].sort((a, b) => a.price - b.price).filter((item) => {
        if (item.price <= isRange) {
            return item;
        }
    })
    .map((todo,index) => ( 
 
                    <div  key={index} className="product-container">
                    <div className='fav-container'>
                        <div className='fav-btn'>
                            <FavouriteBtn/>
                        </div> 
                        <div className='barcode'>
                            <p>#{todo.barcode}</p>
                        </div>
                    </div>
                    <a>
                        <div className='imgContainer'>
                            <img className='imgDesign' src={todo.photoURL}/>
                        </div>
                    </a>
                    <div className='cart-container'> 
                        <div className='cardDescription'> 
                            <p><strong>{todo.title}</strong></p>
                            <p><strong>{todo.pricetype}{todo.price}</strong></p>
                            
                        </div>
                    </div>    
                        <div className="trash-cont">
                            <div className="trash-btn">
                            <button onClick={() => handleDelete(todo.id)} > <FontAwesomeIcon icon={faTrashCan} /> </button>
                            </div>
                        </div>
                    </div>
                       
                
            ))}
            </div>  
        </div>  

    )
    }
    else{
        if(user){
            return(
                <div>  
                    <div className="main-container" >
                    { [...todos].sort((a, b) => a.price - b.price).filter((item) => {
                if (item.price <= isRange) {
                    return item;
                }
            })
            .map((todo,index) => ( 
         
                            <div  key={index} className="product-container">
                                <div className='fav-container'>
                                    <div className='fav-btn'>
                                        <FavouriteBtn/>
                                    </div> 
                                    <div className='barcode'>
                                        <p>#{todo.barcode}</p>
                                    </div>
                                </div>
                                <a>
                                    <div className='imgContainer'>
                                        <img className='imgDesign' src={todo.photoURL}/>
                                    </div>
                                </a>
                                <div className='cart-container'> 
                                    <div className='cardDescription'> 
                                        <p><strong>{todo.title}</strong></p>
                                        <p><strong>{todo.pricetype}{todo.price}</strong></p>
                                        
                                    </div>
                                    <div className='cart'>
                                    <button className='cart-btn'>Sepete Ekle</button>
                                    <button className='cart-btn'>Ürünü İncele</button>
                                    </div>
                                </div>
                            </div>
                    ))}
                    </div>  
                </div>  
        
            )
        }
        else{
            return(
                <div>  
                    <div className="main-container" >
                    { [...todos].sort((a, b) => a.price - b.price).filter((item) => {
                if (item.price <= isRange) {
                    return item;
                }
            })
            .map((todo,index) => ( 
         
                            <div  key={index} className="product-container">
                                <div className='fav-container'>
                                    <div className='fav-btn'>
                                        <FavouriteBtn/>
                                    </div> 
                                    <div className='barcode'>
                                        <p>#{todo.barcode}</p>
                                    </div>
                                </div>
                                <a>
                                    <div className='imgContainer'>
                                        <img className='imgDesign' src={todo.photoURL}/>
                                    </div>
                                </a>
                                <div className='cart-container'> 
                                    <div className='cardDescription'> 
                                        <p><strong>{todo.title}</strong></p>
                                        <p><strong>{todo.pricetype}{todo.price}</strong></p>
                                        
                                    </div>
                                    <div className='cart'>
                                    <button className='cart-btn'>Sepete Ekle</button>
                                    <button className='cart-btn'>Ürünü İncele</button>
                                    </div>
                                </div>
                            </div>
                    ))}
                    </div>  
                </div>  
        
            )
        }
    }

}