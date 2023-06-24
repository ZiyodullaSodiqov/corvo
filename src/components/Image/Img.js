import React from 'react';
import '../../css/styles.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

    function Img() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SampleNextArrow />,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
            ]
          };

          function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
              />
            );
          }
        return(
            <React.Fragment>
                <div className='container'
                    style={
                        {
                            marginTop:"80px",
                        }
                    }>
                    <div className='row'>
                        <div
                            className='col-16' >
                                    <Slider {...settings}>

                                    <div className='slick-One'>
                                        {/* No code */}
                                    </div>

                                    <div className='slick-two'>
                                        {/* No code */}
                                    </div>

                                    <div className='slick-three'>
                                        {/* No code */}
                                    </div>

                                    <div className='slick-for'>
                                        {/* No code */}
                                    </div>

                                    <div className='slick-five'>
                                        {/* No code */}
                                    </div>

                                    <div className='slick-six'>
                                        {/* No code */}
                                    </div>

                                    </Slider>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }

export default Img;