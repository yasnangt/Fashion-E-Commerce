import { useContext } from "react";
import Context from "../Context/Context";

import './sidebar.css';

export default function Sidebar(){
    const { isRange, setisRange ,setisHigh, Theme} = useContext(Context);
    
return(
    <>
        <div className={"filterHeader"}>
           <span className='header'>REFINE BY</span>
        </div> 
        <div className='range'>
            <span>Price</span>
            <input type="range" className='rangeSlider' min="10" max="1000" value={isRange}  onChange={(event) => setisRange(event.target.value)} ></input>
            <span>$10</span>
            <span>$1000</span> 
        </div>  
        <div className='range'>
            <span>Price Sort</span>
            <select id="sort" name="sort" onChange={(event) => setisHigh(event.target.value)}>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
            </select>
        </div>   
   </>
)

}