import './header.css';
//Context 
import { useContext  } from 'react'
import Context from '../../Component/Context/Context';
//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faSliders, faUserGear, faUser,faUserPlus, faRightFromBracket,faCartShopping,faHeart}  from '@fortawesome/free-solid-svg-icons';
//Component
import Language from '../../Component/Language/Language';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { logout } from '../../Firebase';
import { logout as logoutHandle } from '../../store/auth';
import { useNavigate} from 'react-router-dom'

export default function Header(){
    
    const { setLogin, setPop, setSearch} = useContext(Context);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user} = useSelector(state => state.auth)
    const handleLogout = async () => {
        await logout()
        dispatch(logoutHandle())
        navigate('/', {
            replace: true
        })

    }
    if(user.uid ==="r5mhSX6lUFgrh1f7pSAYHhOdtdm2" || user.uid === "gx2fv5NSZHX81Ts0WCbljjwnWrm2" ) {
        return (
        <>  
            <div className="Nav-Container" >
                <div className='col-left-logo' > <a href='/admin'> <h1> LOGO </h1></a> </div> {/* logo will be put here*/}
                <div className='col-center-search'>
                    <input className='search-box' placeholder='Search' type="text" onChange={e => setSearch(e.target.value)}></input>
                    <button className='search-btn'><span><FontAwesomeIcon icon={ faSearch } /> </span>  </button>
                
                </div>
            
                <div className='col-right-bar'>
                    <Language/>
                    <a className='a-decoration' href='/admin-add-product' > <FontAwesomeIcon  icon={ faSliders } /> Ürün Ekleme </a>
                    <a className='a-decoration' href='/admin' > <FontAwesomeIcon  icon={ faUserGear }  />{user.displayName} </a>
                    <a className='a-decoration' href='#' onClick={handleLogout} > <FontAwesomeIcon  icon={ faRightFromBracket } /> Çıkış Yap</a>
                </div>
            </div>
        </>
        ) 
    }
    else{
    if(user){
        return(
            <div className="Nav-Container" >
                <div className='col-left-logo' > <a href='/'> <h1> LOGO </h1></a> </div> {/* logo will be put here*/}
                <div className='col-center-search'>
                    <input className='search-box' placeholder='Search' type="text" onChange={e => setSearch(e.target.value)}></input>
                    <button className='search-btn'><span> <FontAwesomeIcon icon={ faSearch } /> </span>  </button>
                
                </div>
            
                <div className='col-right-bar'>
                    <Language/>
                    <a className='a-decoration' href='#'> <FontAwesomeIcon  icon={ faHeart }  />Favoriler </a>
                    <a className='a-decoration' href='#'> <FontAwesomeIcon  icon={ faCartShopping }  />0 </a>
                    <a className='a-decoration' href='#' onClick={() => setPop(true)} > <FontAwesomeIcon  icon={ faUser }  /> {user.displayName} </a>
                    <a className='a-decoration' href='#' onClick={handleLogout} > <FontAwesomeIcon  icon={ faRightFromBracket } /> Çıkış Yap</a>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="Nav-Container" >
                <div className='col-left-logo' > <a href='/'> <h1> LOGO </h1></a> </div> {/* logo will be put here*/}
                <div className='col-center-search'>
                    <input className='search-box' placeholder='Search' type="text" onChange={e => setSearch(e.target.value)}></input>
                    <button className='search-btn'><span><FontAwesomeIcon icon={ faSearch } /> </span>  </button>
                
                </div>
            
                <div className='col-right-bar'>
                    <Language/>
                    <a className='a-decoration' href='#' onClick={() => setLogin(true)} > <FontAwesomeIcon  icon={ faUser }  /> Giriş Yap </a>
                    <a className='a-decoration' href='#' onClick={() => setPop(true) } > <FontAwesomeIcon  icon={ faUserPlus } /> Kayıt Ol</a>
                </div>
            </div>
        )
    }
}


}