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
             navigate('/', {
            replace: true
            })
        }
       

    }

    return (props.trigger) ? (
       <div className='popup'>
        <div className='login-container'>
            <div className="login">
            <div className='login-exit'>
                <button className='lgn-exit-btn' onClick={() => setLogin(false)}> <FontAwesomeIcon icon={faCircleXmark} /> </button>
            </div>
            <h1>Login</h1>
            <form className='form-container' onSubmit={handleSubmit}>
                <input className='place' type="text" placeholder="E-posta Adresi" value={email} onChange={e => setEmail(e.target.value)} /> <br/>
                <input className='place' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  /> <br/>
                <button className='signup-btn' disabled={!email || !password} type='submit' > Giriş Yap</button>
            </form>
            </div>
        </div>
        </div> 
    ): "";


}