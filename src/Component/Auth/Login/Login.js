import './login.css';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { login } from '../../../Firebase';
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import Context from '../../Context/Context';


export default function Login (props){    
    
    const {setLogin} = useContext(Context);
    const navigate = useNavigate()
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    
    const handleSubmit = async e => {
        e.preventDefault()
        const user = await login(email, password)
        
        if(user){
            setLogin(false)
        }
       

    }

    return (props.trigger) ? (
       <div className='popup'>
        <div className='login-container'>
            <div className='login-exit'>
                <button className='lgn-exit-btn' onClick={() => setLogin(false)}> <FontAwesomeIcon icon={faCircleXmark} /> </button>
            </div>
            <div className='head-container'>
            <h1 className='login-header'>Login</h1>
            </div>
            <div className="login">
            <form className='form-container' onSubmit={handleSubmit}>
                <div>
                    <input className='place' type="text" placeholder="E-posta Adresi" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <input className='place' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  /> <br/>
                </div>
                <div>
                    <button className='login-btn' disabled={!email || !password} type='submit' > Giriş Yap</button>
                </div>
                

            </form>
            </div>
        </div>
        </div> 
    ): "";


}