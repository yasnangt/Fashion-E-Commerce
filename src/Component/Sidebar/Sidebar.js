import { useContext } from "react";
import Context from "../Context/Context";

import './sidebar.css';

export default function Sidebar(){
    const { setGenders,setisHigh} = useContext(Context);
    
return(
    <>
    <div className="sidebar-container">
        <div className="sidebar-filter-container">            
            <div className={"filterHeader"}>
                <h2 className="filterHeader-header">Filtreleme</h2>
            </div>
            <div className="filter-content-container">
                <div className="filter-gender">
                    <div className="filter-gender-header">
                        <h2> Cinsiyet</h2>
                    </div>
                    <div>
                        <select className="filter-gender-selection" id="sort" name="sort" onClick={(event) => setGenders(event.target.value)}>
                            <option value="kadin">Kadın</option>
                            <option value="erkek">Erkek</option>
                        </select>
                    </div>            
                </div>  
                <div>
                    <div className="filter-gender-header">
                        <h2> Ürün Tip</h2>
                    </div>
                    <div>
                        <select className="filter-gender-selection">
                            <option>Gömlek</option>
                            <option>Tshirt</option>
                            <option>Pantolon</option>
                        </select>
                    </div>
                </div>     
                <div>
                    <div className="filter-gender-header">
                        <h2> Fiyat Filtreleme</h2>
                    </div>
                    <div>
                        <select className="filter-gender-selection" onChange={(event) => setisHigh(event.target.value)}>
                            <option value="low">En Düşük Fiyat</option>
                            <option value="high">En Yüksek Fiyat</option>
                        </select>
                    </div>
                </div>     
            </div>   
        </div>
    </div>
   </>
)

}