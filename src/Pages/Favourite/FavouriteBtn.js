import FavRoundedActive from "../../Component/FavComponent/favRoundedActive";
import FavRounded from "../../Component/FavComponent/favRounded";
import toast from "react-hot-toast";
import React ,{ useState } from "react";
import { addFav } from "../../Firebase";
import { useSelector } from "react-redux";


function FavouriteBtn  ({value=false, id}) {
    const [isFavourite, setIsFavourite] = useState(value)
    const{todos} = useSelector(state => state.todos)
    const submitHandle = async e => {
        e.preventDefault()
        await addFav({
           

        })
    }
    const invertFav = (event) => {
        
        console.log(isFavourite)
        if(isFavourite=== false){
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
        
        
        <button className='btn' type="button" onClick={invertFav}>
            {  
            
                (isFavourite) ? <FavRoundedActive/> : <FavRounded/>   
            }
        </button>
        </>
    )
}
export default React.memo(FavouriteBtn)