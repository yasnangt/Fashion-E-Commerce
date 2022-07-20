import { useContext } from "react";
import Context from "../../../Component/Context/Context";
import { useSelector } from "react-redux";
import Header from "../../Header/Header";
import './clothesproduct.css'
import Footer from "../../Footer/Footer";
import toast from "react-hot-toast";

export default function ClothesProduct(){
    const {items} = useContext(Context);
    const{todos} = useSelector(state => state.todos)
    function basket(){
        toast.success("Sepete Eklendi")
    }
    
    return(
        <> 

        <Header/>
        <div className="clothes-product-card-container">
            <div>
                {[...todos]
                .filter((item) =>{
                    if(item.barcode === items)
                        return item
                })
                .map((todo,index) =>( 
                    <div className="clothes-product-card-description-container"> 
                        <div className="product-card-photo-container">
                            <img src={todo.photoURL} />
                        </div>
                        <div className="clothes-product-card-description-sell grid-cols" > 
                         
                            <div className="clothes-card-description">
                                <div> 
                                    <span>Ürün Kodu: </span>
                                    <span>#{todo.barcode} </span>
                                </div>
                                <div><span className="clothes-card-description-title">{todo.title} </span>  </div>
                            </div>
                            <div className="clothes-card-price-description"> 
                                <span>Peşin Fiyatı</span>
                                <p>{todo.pricetype} {todo.price} </p> 
                            </div>
                            <div className="card-price-basket">
                                <button onClick={() => basket()} className="card-price-basket-btn"> Sepete Ekle</button>
                            </div>
                        </div>
                    </div>

                    
                ))
                } 
            </div>
            <div>
                
            </div>
        

        </div>
        <Footer/>
        </>
      
         
      
       
    )


}