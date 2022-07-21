import './payments.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../../Component/Context/Context'


export default function Payment(){
    const navigate = useNavigate()
    const {setBuy} = useContext(Context);
    const handleSubmit  = () =>{
        toast.success("Ödeme Başarılı")
        navigate("/")
        setBuy([])
    }
    return (
        <div className='payment-container' > 
            <form  onSubmit={handleSubmit}>
            <div className="payment-main-content">
                
                <div>
                    <h1>Alıcı Ödeme Bilgileri</h1>
                </div>
                <div>
                    <div>
                        <label> Ad Soyad</label>
                    </div>
                    <div>
                        <input required className='payment-input-content' type="text" />
                    </div>
                </div>
                <div>
                    <div>
                        <label> Kart Numarası</label>
                    </div>
                    <div>
                        <input maxlength="4" required className='payment-input-content-card' type="text" />
                        <input maxlength="4" required className='payment-input-content-card' type="text" />
                        <input maxlength="4" required className='payment-input-content-card' type="text" />
                        <input maxlength="4" required className='payment-input-content-card' type="text" />
                    </div>
                </div>
                <div>
                    <div>
                    <div>
                        <label> Son Kullanma Tarihi</label>
                    </div>
                    <div>
                        <input maxlength="2" required className='payment-input-content-card' type="text" />
                        <span>/</span>
                        <input maxlength="2" required className='payment-input-content-card' type="text" />
                    </div>
                    
                    </div>
                </div> 
                <div> 
                    <div>
                        <div>
                            <label>CCV </label>
                        </div>
                        <div>
                            <input maxlength="3" required className='payment-input-content-card' type="text" />
                        </div>
                    </div>
                </div>
                <div>
                        <button className="payment-buy-btn" type='submit'> Ödeme Yap</button>
                </div>
              </div>  
            </form>
            
            
        </div>

    )
}