import Slider from 'react-slick';   

export default function Slide(){
    
    const settings = {
        dots: true,
        infinite: true,
        lazyLoad:true,
        slidesToShow: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000
      };
      const photo= "https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/070722-plaj.jpg"

    return(
    <>
        <div className='mt-5'>
        
        <Slider {...settings}>
            <div >
                <img className='w-[100%] h-[700px] object-cover' src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/070722-bayramsikligi.jpg"  />
            </div>
            <div>
                <img className='w-[100%] h-[700px] object-cover' src={photo} />
            </div>
           <div>
                <img className='w-[100%] h-[700px] object-cover' src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/070722-plaj-aks-ayk.jpg" />
           </div>
         
        </Slider>
      </div>
    </>
    )
    

}