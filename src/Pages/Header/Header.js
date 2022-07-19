import './header.css';
//Context 
import { useContext  } from 'react'
import Context from '../../Component/Context/Context';
//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faSliders, faTags, faUser,faUserPlus, faRightFromBracket,faCartShopping,faHeart}  from '@fortawesome/free-solid-svg-icons';
//Component
import Language from '../../Component/Language/Language';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { logout } from '../../Firebase';
import { logout as logoutHandle } from '../../store/auth';
import { useNavigate} from 'react-router-dom'

export default function Header(){
    
    const { setLogin, setPop, setSearch,login} = useContext(Context);
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
           <div className='header-container'>
                    <header>
                        <div className='header-top'>
                            <div className='header-top-left'>
                                <a className='header-logo'>LOGO</a>
                            </div>
                            <div className='header-top-center'>
                                <form autoComplete='off' className='search-container'>
                                    <div className='search-form'>
                                        <div className='search-form_input-field--first-wrap search-form__input-field'>
                                            <input type="text" placeholder='Ürün,kategori veya marka ara' className='search-form-input'/>
                                        </div>
                                        <div className='search-form__input-field search-form_input-field--second-wrap '>
                                            <button className='search-form-btn-search'>ARA</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className='header-top-right'>
                                <div className='header-section'>
                                    <span>
                                        <div className='top-right'>
                                        <FontAwesomeIcon icon={faUser}/><a className='right-text'> <span>{user.displayName}</span></a>
                                        </div>
                                    </span>
                                    <div className='top-right'>
                                        <FontAwesomeIcon icon={faRightFromBracket}/> <a className='right-text' onClick={handleLogout}><span> Logout</span></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='header-category'>
                            <nav className='menu-nav'>
                                <ul className='menu-nav-lists '>
                                    <a href='admin'><li className='menu-item '>Dashboard</li></a>
                                    <a href='admin-add-product'><li className='menu-item'> Ürünler</li></a>
                                    <a><li className='menu-item'> Sayfa Yönetimi</li></a>
                                    <a><li className='menu-item'> Gelir Takibi</li></a>
                                    <a><li className='menu-item'>Yönetim </li></a>
                                    <a><li className='menu-item'>Destek</li></a>
                                </ul>
                            </nav>

                        </div>
                    </header>
                </div>
         
        </>
        ) 
    }
    else{
    if(user){
        return(
            <>
                <div className='header-container'>
                    <header>
                        <div className='header-top'>
                            <div className='header-top-left'>
                                <a className='header-logo'>LOGO</a>
                            </div>
                            <div className='header-top-center'>
                                <form autoComplete='off' className='search-container'>
                                    <div className='search-form'>
                                        <div className='search-form_input-field--first-wrap search-form__input-field'>
                                            <input type="text" placeholder='Ürün,kategori veya marka ara' className='search-form-input'/>
                                        </div>
                                        <div className='search-form__input-field search-form_input-field--second-wrap '>
                                            <button className='search-form-btn-search'>ARA</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className='header-top-right'>
                                <div className='header-section'>
                                    <span>
                                        <div className='top-right'>
                                        <FontAwesomeIcon icon={faUser}/><a className='right-text'> <span>{user.displayName}</span></a>
                                        </div>
                                    </span>
                                    <div className='top-right'> 
                                        <FontAwesomeIcon icon={faHeart}/> <a href='/favoriler' className='right-text'> <span > Favoriler</span></a>
                                    </div>
                                    <div className='top-right'>
                                       <a><FontAwesomeIcon icon={faCartShopping}/></a>  <a className='right-text'><span> Sepetim</span></a>
                                    </div>
                                    <div className='top-right'>
                                        <FontAwesomeIcon icon={faRightFromBracket}/> <a className='right-text' onClick={handleLogout}><span> Logout</span></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='header-category'>
                            <nav className='menu-nav'>
                                <ul className='menu-nav-lists '>
                                    <li onClick={() => navigate("/kiyafet")} className='menu-item '>Kıyafet</li>
                                    <li className='menu-item'>Ayakkabı</li>
                                    <li className='menu-item'>Aksesuar</li>
                                    <li className='menu-item'>Çanta</li>
                                    <li className='menu-item'>Tablo</li>
                                    <li className='menu-item'>Gözlük</li>
                                </ul>
                            </nav>

                        </div>
                    </header>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className='header-container'>
                    <header>
                        <div className='header-top'>
                            <div className='header-top-left'>
                                <a className='header-logo'>LOGO</a>
                            </div>
                            <div className='header-top-center'>
                                <form autoComplete='off' className='search-container'>
                                    <div className='search-form'>
                                        <div className='search-form_input-field--first-wrap search-form__input-field'>
                                            <input type="text" placeholder='Ürün,kategori veya marka ara' className='search-form-input' onChange={e => setSearch(e.target.value)}/>
                                        </div>
                                        <div className='search-form__input-field search-form_input-field--second-wrap '>
                                            <button className='search-form-btn-search'>ARA</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className='header-top-right'>
                                <div className='header-section'>
                                    <div className='top-right'>
                                        <FontAwesomeIcon  icon={ faUser }/><a className='right-text' onClick={() => setLogin(true)}> <span>Giriş Yap</span></a>
                                    </div>
                                    <div className='top-right'>
                                        <FontAwesomeIcon  icon={ faUser }/><a className='right-text' onClick={() => setPop(true)}> <span>Kayıt Ol</span></a>
                                    </div>
                                    <div className='top-right'> 
                                        <FontAwesomeIcon icon={faHeart}/> <a href='/favoriler' className='right-text'> <span > Favoriler</span></a>
                                    </div>
                                    <div className='top-right'>
                                        <FontAwesomeIcon icon={faCartShopping}/> <a className='right-text'><span> Sepetim</span></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='header-category'>
                            <nav className='menu-nav'>
                                <ul className='menu-nav-lists '>
                                    <li onClick={() => navigate("/kiyafet")} className='menu-item '>Kıyafet</li>
                                    <li className='menu-item'>Ayakkabı</li>
                                    <li className='menu-item'>Aksesuar</li>
                                    <li className='menu-item'>Çanta</li>
                                    <li className='menu-item'>Tablo</li>
                                    <li className='menu-item'>Gözlük</li>
                                </ul>
                            </nav>

                        </div>
                    </header>
                </div>
            </>
        )
    }
}


}