import './signup.css';
import { register, update } from '../../../Firebase';
import { useContext, useState } from 'react';
import Context from '../../Context/Context';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Signup (props){    
    
    const {setPop,name,setName} = useContext(Context);
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleSubmit = async e => {
        e.preventDefault()
        const user = await register(email, password)
    }

    return (props.sign) ? (
       <div className='signup-popup'>
        <div className='container'>
                <div className='exit'>
                    <button className='exit-btn' onClick={() => setPop(false)}><FontAwesomeIcon icon={faCircleXmark} /> </button>
                </div>
                <div className='head-container'>
                    <h1 className='signup-header'>Signup</h1>
                </div>
                <div className='signup'>
                <form className='form-container' onSubmit={handleSubmit}>
                    <div>
                        <input className='place' type="text" placeholder="Ad Soyad" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <input className='place' type="text" placeholder="E-posta Adresi" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input className='place' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  />
                    </div>
                    <div>
                        <button className='signup-btn' disabled={!email || !password} type='submit' > Kayıt ol</button>
                    </div>
                </form>
                </div>
        </div>
        </div> 
    ): "";


}