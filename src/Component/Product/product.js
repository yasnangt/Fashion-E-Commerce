import { useContext } from "react";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
import Section from "../Lazyload/Section/section";

export default function Products ({product, bask, setBask}){
    const {  setItems,setFav, fav} = useContext(Context);
    const navigate = useNavigate()

    function showItems(x){
        setItems(x)
        navigate("/clothes-item")
    }
    const basket = () => {
        setFav([...fav, product])
        navigate("/favoriler")
    }
    
    return (
        <div className="clothes-product-card">
            <div>
                <div className='fav-container'>
                    <div className='fav-btn'>
                        <button onClick={basket}> Fav</button>
                    </div> 
                </div>
                <a onClick={() => showItems(product.barcode)}>
                    <div>  
                        <Section src={product.photoURL}/>
                    </div>
                </a>
                <div > 
                    <div className="clothes-product-description"> 
                        <div>
                            <p><strong>{product.title}</strong></p>
                        </div>                        
                        <div>
                            <h3 className="clothes-product-price"><strong>{product.pricetype}{product.price}</strong></h3> 
                        </div>                            
                    </div>
                </div>    
            </div>
        </div>
    )
}