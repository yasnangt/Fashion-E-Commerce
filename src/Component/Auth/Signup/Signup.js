import './signup.css';

import { register, update } from '../../../Firebase';
import { useFormik, Formik, Form, Field } from "formik"
import { useContext, useState } from 'react';
import Context from '../../Context/Context';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Login (props){    
    
    const {setPop,name,setName} = useContext(Context);
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    

    const handleSubmit = async e => {
        e.preventDefault()
        const user = await register(email, password)
        console.log(name)
    }

    return (props.sign) ? (
       <div className='signup-popup'>
        <div className='container'>
            <div className="signup">
                <div className='exit'>
                    <button className='exit-btn' onClick={() => setPop(false)}><FontAwesomeIcon icon={faCircleXmark} /> </button>
                </div>
                <h1>Signup</h1>
                <form className='form-container' onSubmit={handleSubmit}>
                    <input className='place' type="text" placeholder="Ad Soyad" value={name} onChange={e => setName(e.target.value)} /> <br/>
                    <input className='place' type="text" placeholder="E-posta Adresi" value={email} onChange={e => setEmail(e.target.value)} /> <br/>
                    <input className='place' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}  /> <br/>
                    <button className='signup-btn' disabled={!email || !password} type='submit' > Kayıt ol</button>
                </form>
            </div>
        </div>
        </div> 
    ): "";


}