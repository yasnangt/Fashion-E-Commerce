import { useState,useContext } from "react";
import { update, auth, resetPassword, } from "../../../Firebase";
import Context from '../../Context/Context';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Firebase";


export default function UpdateProfile(props){
    
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const [displayName , setDisplayName] = useState(user.displayName || '')
    const [avatar, setAvatar] = useState(user.photoURL||'')
    const [password, setPassword] = useState('')

    const {setPop} = useContext(Context);
    const handleSubmit = async e => {
        await update({
            displayName,
            photoURL:avatar
        })
        dispatch(login({  
            displayName: auth.currentUser.displayName,
            email:auth.currentUser.email,
            emailVerified: auth.currentUser.emailVerified,
            photoURL: auth.currentUser.photoURL,
            uid: auth.currentUser.uid}))
    }
    const handleResetSubmit = async e => {
        e.preventDefault()
        const result = await resetPassword(password)
        if(result){
            setPassword('')
        } 
        
    }
   
    return (props.pop) ? (
        <div className='signup-popup'>
        <div className='container'>
            <div className="signup">
                <div className='exit'>
                    <button className='exit-btn' onClick={() => setPop(false)}><FontAwesomeIcon icon={faCircleXmark} /> </button>
                </div>
                <h1>Profili Güncelle</h1>
                <form className='form-container' onSubmit={handleSubmit} >
                    <input className='place' type="text" placeholder="Ad Soyad" value={displayName} onChange={e => setDisplayName(e.target.value)} /> <br/>
                    <input className='place' type="text" placeholder="Profil Resmi" value={avatar} onChange={e => setAvatar(e.target.value)} /> <br/>
                    <button className='signup-btn' type='submit' > Güncelle</button>
                </form>
                <h1>Şifre Güncelleme</h1>
                <form onSubmit={handleResetSubmit}>
                    <input className='place' type="password" placeholder="Şire Değiştirme" value={password} onChange={e => setPassword(e.target.value)} /> <br/>
                    <button disabled={!password} className='signup-btn' type='submit' > Güncelle</button>
                </form>
               

            </div>
        </div>
        </div> 

    ): "";

}