import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/carousel/1.png'
import img2 from '../../../assets/carousel/2.png'
import img3 from '../../../assets/carousel/3.png'
import img4 from '../../../assets/carousel/4.png'
import img5 from '../../../assets/carousel/5.png'
const Banner = () => {
    return (
        <div>
     <Carousel showArrows={true} showStatus={false} showThumbs={false} swipeable={true} autoPlay={true}>
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                  
                </div>
                <div>
                    <img src={img4} />
                   
                </div>
                <div>
                    <img src={img5} />
               
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;