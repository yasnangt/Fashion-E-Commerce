import { deleteProduct } from "../../../../Firebase"
import {useSelector} from "react-redux"
import './delete.css'
export default function DeleteProducts(){
    const{todos} = useSelector(state => state.todos)
    const handleDelete = async id => {
        await deleteProduct(id)
    }
    
    return(
        <>
        <div className="delete-container">
            {[...todos].map((todo, index) => ( 
                <div key={index} className="delete-card-container"> 
                    <div className="delete-card-img"> 
                        <img src={todo.photoURL} /> 
                    </div> 
                    <div className="delete-card-description"> 
                        <strong><a> {todo.title} </a></strong>
                        <strong><a> {todo.barcode}</a></strong>
                        <button className="delete-card-btn" onClick={() => handleDelete(todo.id)}> Sil</button>
                    </div>
                </div>
             ) )}
        </div>
        </>
    )
}
    
