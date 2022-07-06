
import Product from "../../Component/Product/product";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useSelector } from "react-redux/es/exports";

export default function Admin(){
    const { user} = useSelector(state => state.auth)
    if(user.uid ==="r5mhSX6lUFgrh1f7pSAYHhOdtdm2" || user.uid === "gx2fv5NSZHX81Ts0WCbljjwnWrm2" ) {
    return (
        <>
           <Header/>
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
    )
    }
    else{
        return(
            <h1>404 Not Found</h1>
        )
    }
}