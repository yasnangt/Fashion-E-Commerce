
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Component/Context/Context";
import Header from "../Header/Header";
import './cart.css'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import FavouriteBtn from "../Favourite/FavouriteBtn";
import Footer from "../Footer/Footer";
import Login from "../../Component/Auth/Login/Login";
import Signup from "../../Component/Auth/Signup/Signup";
export default function Cart(){
    const navigate = useNavigate()
    const {buy,login,pop} = useContext(Context);
    function deleteCart(index){
        buy.splice(index,1)
        navigate("/sepetim")
    }
    if(buy.length !== 0){

    
        return(
        <>
            <Login trigger={login} />
            <Signup sign ={pop}/>
            <Header/>
            <div className="cart-main-container" >
                <div className="cart-main-container-left"> 
                <h1>Sepetim</h1>
                {buy.map((item, index) =>(
                    <div key={index} className="cart-container" > 
                        <div className="cart-container-left"> 
                            <div> 
                                <img width={102} src={item.photoURL}/>
                            </div>
                            <div className="cart-container-left-sub-right"> 
                                <h5>{item.title} </h5>
                                <span>Ürün kodu: {item.barcode}</span>
                            </div>
                        </div>
                        <div className="cart-container-right">
                           <div className="cart-container-right-sub-left">
                                <button onClick={() => deleteCart(index)}> <FontAwesomeIcon icon={faTrashCan } /></button>
                                <div className="cart-fav-btn"> 
                                    <FavouriteBtn id={item}/>
                                </div>
                                
                           </div>
                           <div className="cart-container-right-sub">
                            <h5>{item.pricetype}{item.price} </h5>
                           </div>
                            
                        </div>
                    </div>
                ))}
                    <button className="cart-container-right-shop-btn" onClick={() => navigate("/kiyafet")}> Alışverişe Devam Et</button>
                </div>
                <div className="cart-main-container-right">
                    <div className="cart-main-container-right-content">
                        <div>
                            <h1> Sipariş Özeti</h1>
                        </div>
                        <div className="cart-main-container-right-content-item">
                            <div>
                                <p> Ürün Toplam </p>
                            </div>
                            <div>
                                <p> $80</p>
                            </div>
                        </div>
                        <div className="cart-main-container-right-content-item">
                            <div>
                                <p> Kargo Ücreti </p>
                            </div>
                            <div>
                                <p> $10</p>
                            </div>
                        </div>
                        <div className="cart-main-container-right-content-item">
                            <div>
                                <p> Toplam Ücret</p>
                            </div>
                            <div>
                                <p> $90</p>
                            </div>
                        </div>
                        <div className="cart-main-container-right-content-item-btn-content">
                            <button onClick={() => navigate("/odeme")} className="cart-main-container-right-content-item-btn"> Ödeme Adımına Geç</button>
                        </div>

                    </div>
                    
                </div>
                
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
            <div className="cart-main-container-empty" >
                <h2> Henüz Sepete Ürün Eklemediniz</h2>
                <button className="cart-container-right-shop-btn" onClick={() => navigate("/kiyafet")}> Alışverişe Devam Et</button>
            </div>
            <Footer/>
        </>
        )
    }
}