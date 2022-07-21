import FavRoundedActive from "../../Component/FavComponent/favRoundedActive";
import FavRounded from "../../Component/FavComponent/favRounded";
import toast from "react-hot-toast";
import React ,{ useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import Context from "../../Component/Context/Context";
import { useNavigate} from 'react-router-dom'

export default function FavouriteBtn  ({value=false, id}) {
    const [isFavourite, setIsFavourite] = useState(value)
    const{todos} = useSelector(state => state.todos)
    const { setFav,fav} = useContext(Context);
    const navigate = useNavigate()
  
    const invertFav = (event) => {
        if(isFavourite === false){
            setFav([...fav,id])
            setIsFavourite(true)
            toast('Favorilere eklendi')
        }
        else{
            setIsFavourite(false)
            toast('Favorilerden çıkardınız')      
        }
    }
    
    return (
        <>
        <button className='btn' type="button" onClick={invertFav }>
            {  
            (isFavourite) ? <FavRoundedActive/> : <FavRounded/>   
            }
        </button>
        </>
    )
}
 