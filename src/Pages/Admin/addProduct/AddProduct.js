import './addproduct.css'
import { useState } from "react";
import { addTodo } from "../../../Firebase";
import { useSelector } from 'react-redux/es/exports';
import Header from '../../Header/Header';
import Product from '../../../Component/Product/product';


export default function AddProduct (){
    const { user} = useSelector(state => state.auth)
    const [ title, setTitle ] = useState('')
    const [ barcode, setBarcode ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ pricetype, setPricetype ] = useState('')
    const photoURL = "https://firebasestorage.googleapis.com/v0/b/project102-f8faf.appspot.com/o/964428.jpg?alt=media&token=67725975-6442-45bd-a08c-a4dade4ae2f0"

    const submitHandle = async e => {
        e.preventDefault()
        await addTodo({
            title,
            barcode,
            price,
            pricetype,
            photoURL,
            uid:user.uid

        })
       

    }
    if(user.uid ==="r5mhSX6lUFgrh1f7pSAYHhOdtdm2" || user.uid === "gx2fv5NSZHX81Ts0WCbljjwnWrm2" ) {
    return(
         <>
         <Header/>
         <div className='product-container' >
            <div>
                <form onSubmit={submitHandle}>
                    <div className='form-grid'>
                        <input className='place-product' placeholder='Title' onChange={e => setTitle(e.target.value)} /><br/>
                        <input className='place-product' placeholder='Barcode Number' onChange={e => setBarcode(e.target.value)} /><br/>
                        <input type="number" className='place-product' placeholder='Price ' onChange={e => setPrice(e.target.valueAsNumber)} /><br/>
                        <input className='place-product' placeholder='Price Type ' onChange={e => setPricetype(e.target.value)} /><br/>
                    </div>
                    <div className='btn-grid'>
                        <button disabled={!title} className='add-btn'> Product Ekle</button>
                    </div>
                    
                </form>
            </div>
            <div className='prod-cont' >
                <div className='product'>
                    <Product/>
                </div>
                
            </div>
         </div>
        
    </>
    )
}   else{
    return(
        <h1> 404 Not Found</h1>
        )
        
}
   
}