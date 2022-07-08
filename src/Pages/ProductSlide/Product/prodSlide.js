import Slider from 'react-slick';   
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import Context from '../../../Component/Context/Context';
import './prod.css'


export default function ProdSlide(){
    const{todos} = useSelector(state => state.todos)
    const { isRange} = useContext(Context);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000
      };
      const photo= "https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/070722-plaj.jpg"

    return(
    <>
        <div>
        
        <Slider {...settings}>
  
            { [...todos].map((todo,index) => ( 
 
                    <div  key={index} >
                        <div className="home-slider">
                        <a>
                            <div className='imgContainer-slider'>
                                <img className='imgDesign' src={todo.photoURL}/>
                            </div>
                        </a>
                        <div className='card-slider'> 
                            <div className='cardDescription '> 
                                <p><strong>{todo.title}</strong></p>
                                <p><strong>{todo.pricetype}{todo.price}</strong></p>
                                
                            </div>
                        </div>    
                        </div>
                       
                    </div>
                       
                
            ))}
     
         
        </Slider>
      </div>
    </>
    )}
