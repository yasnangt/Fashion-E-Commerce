import './home.css'
import Header from '../Header/Header';
import Login from  '../../Component/Auth/Login/Login';
import {  useContext } from 'react';
import Context from '../../Component/Context/Context';
import { useSelector} from 'react-redux';
import UpdateProfile from '../../Component/Auth/Updateprofile/UpdateProfile';
import Product from '../../Component/Product/product';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Admin from '../Admin/Admin';

export default function Home(){
    const { login, pop, setPop} = useContext(Context);
    const { user} = useSelector(state => state.auth)

    if(user.uid ==="r5mhSX6lUFgrh1f7pSAYHhOdtdm2" || user.uid === "gx2fv5NSZHX81Ts0WCbljjwnWrm2" ) {
        return (
            <>
                <Admin/>
            </>
        ) 
    }
    else{
        if(user.displayName === null ) { 
            return(
                <>
                <h1>Hoşgeldin</h1>
                <button onClick={() => setPop(true)}> UpdateProfile</button> 
                <UpdateProfile pop={pop} />
            </>
            )
        } 
        else{
            return(
                <> 
                <Login trigger={login} />
                <UpdateProfile pop={pop} />
                <Header id={user.displayName} />
                <div className='ContentWrapper'>
                    <div className='contentSidebar'>
                        <Sidebar/>
                    </div>
                    <div className='Content' id='App'>
                        <Product/>
                    </div>
                    <footer className='footer'>
                        <Footer/>
                    </footer>
                </div>
                </>  
                );         
            }
    }
}