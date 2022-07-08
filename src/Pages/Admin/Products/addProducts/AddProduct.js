import './addproduct.css'
import { useState } from "react";
import { useSelector } from 'react-redux/es/exports';
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';
import { addTodo } from '../../../../Firebase';
import DeleteProducts from '../deleteProducts/DeleteProducts';
import ListProduct from '../listProducts/ListProducts';



export default function AddProduct (){
    const { user} = useSelector(state => state.auth)
    const [ title, setTitle ] = useState('')
    const [ barcode, setBarcode ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ pricetype, setPricetype ] = useState('')
    const [ photoURL, setPhotoURL] = useState('')
    const [ stock, setStock] = useState('')
   

    function dropdwn(){
        if(document.getElementById('admin-product').style.display === "none")
            document.getElementById('admin-product').style.display ="block"
        else{
            document.getElementById('admin-product').style.display ="none"
        }
    }
    function addProduct(){
        if(document.getElementById('product-dropdown').style.display === "none")
            {
            document.getElementById('product-dropdown').style.display ="block"
            document.getElementById('delete').style.display ="none"
            document.getElementById('list').style.display = "none" 
        }
        else{
        document.getElementById('product-dropdown').style.display ="none"
        }
    }
    function deleteProduct(){
        if(document.getElementById('delete').style.display === "none"){
            document.getElementById('product-dropdown').style.display ="none"
            document.getElementById('delete').style.display ="block"
            document.getElementById('list').style.display = "none" 
        }
            
        else{
            document.getElementById('delete').style.display ="none"
        }
    } 
    function listProduct(){
        if(document.getElementById('list').style.display === "none" ){
            document.getElementById('product-dropdown').style.display="none"
            document.getElementById('delete').style.display ="none"
            document.getElementById('list').style.display = "block"
        }
        else{
            document.getElementById('list').style.display ="none"
        }
        
    }
    const submitHandle = async e => {
        e.preventDefault()
        await addTodo({
            title,
            barcode,
            price,
            pricetype,
            photoURL,
            stock,
            uid:user.uid

        })
    }
    
    if(user.uid ==="r5mhSX6lUFgrh1f7pSAYHhOdtdm2" || user.uid === "gx2fv5NSZHX81Ts0WCbljjwnWrm2" ) {
    return(
         <>
         <Header/>
         <div  >
            <div className='prod-container'>
                <div className='admin-sidebar'>
                    <div >
                        <button className='admin-sidebar-main-btn' onClick={dropdwn} >Ürünler</button>
                        <div id='admin-product'>
                            
                            <div>
                                <button className='admin-sidebar-bot-btn' onClick={addProduct} >Ürün Ekleme</button> 
                            </div>
                            <div>
                                <button className='admin-sidebar-bot-btn' onClick={deleteProduct} >Ürün Silme</button>
                            </div> 
                            <div>
                                <button className='admin-sidebar-bot-btn' onClick={listProduct} >Ürün İnceleme</button>
                            </div> 
                        </div>
                    </div>
                    
                </div>
                <div className='product-wrapper'>
                    
                    <div id='product-dropdown'>
                        <form className='form-grid' onSubmit={submitHandle}>
                            <div >
                                <input className='place-product' placeholder='Title' onChange={e => setTitle(e.target.value)} /><br/>
                                <input className='place-product' placeholder='Barcode Number' onChange={e => setBarcode(e.target.value)} /><br/>
                                <input type="number" className='place-product' placeholder='Price ' onChange={e => setPrice(e.target.valueAsNumber)} /><br/>
                                <input className='place-product' placeholder='Price Type ' onChange={e => setPricetype(e.target.value)} /><br/>
                                <input className='place-product' placeholder='Photo URL ' onChange={e => setPhotoURL(e.target.value)} /><br/>
                                <input className='place-product' placeholder='Stok ' onChange={e => setStock(e.target.value)} /><br/>
                            </div>
                            <div className='btn-grid'>
                                <button disabled={!title || !price || !pricetype || !barcode} className='add-btn'> Product Ekle</button>
                            </div>
                            
                        </form>
                    </div>
                    <div id="delete">
                        <DeleteProducts/>
                    </div>
                    <div id='list'>
                        <ListProduct/>
                    </div>

                </div>

            </div>
         </div>
        <Footer/>
    </>
    )
}  
        

   
}