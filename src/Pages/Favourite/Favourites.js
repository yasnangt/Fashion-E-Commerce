import { useSelector } from "react-redux/es/exports";
import { useContext } from "react";
import Context from "../../Component/Context/Context";
import { useNavigate } from "react-router-dom";

export  default function Favourite () {
    const{todos} = useSelector(state => state.todos)
    const {fav} = useContext(Context);
    const navigate = useNavigate()
    console.log(fav)
    return(
        <div>
            <div>
                {fav
                .map((todo, index) => (
                    <div>
                        <p>{todo.title} </p>
                       
                    </div>
                    
                ))} 
                 <button onClick={ () => navigate("/kiyafet")}>
                        geri dön
                    </button>
            </div>

        </div>


    )

 
}