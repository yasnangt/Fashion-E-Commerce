import { useSelector } from "react-redux/es/exports";
import { useContext } from "react";
import Context from "../../Component/Context/Context";
import { useNavigate } from "react-router-dom";
import Section from "../../Component/Lazyload/Section/section";
import Header from "../Header/Header";
import './favori.css'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Login from "../../Component/Auth/Login/Login";
import Signup from "../../Component/Auth/Signup/Signup";
import Footer from "../Footer/Footer";

export  default function Favourite () {
    const{todos} = useSelector(state => state.todos)
    const {fav,setItems,setFav,login,pop} = useContext(Context);
 
    const navigate = useNavigate()
    function showItems(x){
        setItems(x)
        navigate("/clothes-item")
    }
    function alldeleteFav(){
        setFav([])
        toast("Eklenen Tüm Favori Ürünlerinizi Sildiniz")
    }
    function itemdeleteFav(product){
        fav.splice(product,1)
        navigate("/favoriler")
    }
    function backshop(){
        navigate("/kiyafet")
    }
    if(fav.length !== 0) {
        
    return(
        <>
        <Login trigger={login} />
        <Signup sign ={pop}/>
        <Header/>
        <div>
            <h1>Favorilerim</h1>
            <div className="favourites-container">
                {fav
                .map((product, index) => (
                    <div key={index} className="clothes-product-card">
                    <div>
                        <div className="fav-container"> 
                            <div className="fav-btn">
                                <button onClick={()=> itemdeleteFav(index, product.barcode)}> <FontAwesomeIcon icon={faTrashCan} /></button>
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
                        <div className="add-cart-content">
                            <button className="add-cart-btn"> Sepete Ekle</button>
                        </div>  
                    </div>
                </div>
                ))} 
                  
            </div>
            <button className="favourites-back-btn main-back-btn" onClick={ () => backshop()}>
                            Alışverişe Devam Et
            </button>   
            <button className="favourites-back-btn main-back-btn" onClick={ () => alldeleteFav() }>
                            Tüm Favori Ürünleri Sil
            </button>         
        </div>
        <Footer/>
        </>
    ) 


}

              
    else{
        return(
            <>
            <Login trigger={login} />
            <Signup sign ={pop}/>
            <Header/>
            <div className="favourites-empty">
                <h1>Favorilerim</h1>
                <div>
                    <h2>Favori Ürün Eklemediniz</h2>
                    <h4>Favorilerinize ürün eklemek için tek yapmanız gereken ürün görsellerinin üzerindeki kalp ikonuna tıklamak.</h4>
                     <button className="favourites-back-btn" onClick={ () => backshop() }>
                            Alışverişe Başla
                    </button>
                </div>
    
            </div>
            <Footer/>
    
            </>
        )
    }

 
}