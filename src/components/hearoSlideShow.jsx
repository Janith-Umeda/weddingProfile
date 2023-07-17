import Carousel from 'react-bootstrap/Carousel';

export default function SlideShow({Images}) {
  return (
    <Carousel fade>
        {Images?.map((src,i)=>{
            return(
                <Carousel.Item key={i} interval={5000}>
                    <img
                        className="d-block w-100 slide-image"
                        src={`/images/${src}`}
                        alt={src}
                    />
                    <div class="hero-slide-overlay"></div>
                </Carousel.Item>
            );
        })}
    </Carousel>
  );
}