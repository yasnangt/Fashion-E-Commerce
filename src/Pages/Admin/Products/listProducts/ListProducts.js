import { deleteProduct } from "../../../../Firebase"
import {useSelector} from "react-redux"
import { useState } from "react"
import React from "react"
import './list.css'


export default function ListProduct(){
    const{todos} = useSelector(state => state.todos)
    const [list , setList] = useState("")
    const handleDelete = async id => {
        await deleteProduct(id)
    }   
    
    function x(list){
        
        setList(list)
        console.log(list)
    }
    return(
        <>
        <div className="list-container">
            <div className="list-table-container">
               <table>
                <tr>
                    <th className="list-table-row">Barkod Numarası</th>
                    <th className="list-table-row">Title</th>
                    <th className="list-table-row">Stok</th>
                    <th className="list-table-row">Price</th>
                </tr>
                {[...todos].map((todo, index) => ( 
                    <tr  >
                        <td className="list-table-row row"><a onClick={() => x(todo.barcode)} >{todo.barcode}</a></td>
                        <td className="list-table-row row"><a onClick={() => x(todo.barcode)} >{todo.title}</a> </td>
                        <td className="list-table-row row"><a onClick={() => x(todo.barcode)}>{todo.stock}</a></td>
                        <td className="list-table-row row"><a onClick={() => x(todo.barcode)}>{todo.pricetype}{todo.price}</a></td>
                    </tr>
                ) )}
                
               </table>
            </div>
            
            <div id="show-list">
            <div>
                <h1>
                    Ürün Profil Önizlemesi
                </h1>
            
           { [...todos].filter(item => {
                if(item.barcode===list)
                return item 
                 }).map((todo ,index) => (
                    <>
                    <div >
                        <div className="list-card">
                        <div className="list-img"> 
                            <img src={todo.photoURL} />
                        </div>
                        <div className="list-description">
                            <strong><a>Barkod Numarası: {todo.barcode}</a></strong>
                            <strong><a>Title: {todo.title}</a></strong>
                            <strong><a>Stok : {todo.stock}</a></strong>
                            <strong><a>Fiyatı: {todo.pricetype}{todo.price} </a></strong>
                        </div>
                        </div>
                    </div>
                    </>  
                 ))
                 }
                </div>
            </div>
          
        </div>
        </>
    )

}