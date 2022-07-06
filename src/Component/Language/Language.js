import './language.css';
//Icon
import { faGlobe }  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Language(){
    return(
        <div className='language'>
        <div> 
            <div className="dropdown">
                <button className="dropbtn"> <FontAwesomeIcon icon={ faGlobe }/> Dil </button>
                <div className="dropdown-content">
                <button className='lang-btn' > <img alt='tr' className='flag-icon' src='https://flagicons.lipis.dev/flags/4x3/tr.svg'  ></img> Türkçe</button> 
                <button className='lang-btn' > <img alt='tr' className='flag-icon' src='https://flagicons.lipis.dev/flags/4x3/gb.svg'></img> İngilizce</button>
                </div>
            </div>
        </div>  
    </div>
    )
}