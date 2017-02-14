import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
// var Carousel = require('react-responsive-carousel').Carousel;
 
class Hello extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
     const images = [
      '//placehold.it/600/1abc9c',
      '//placehold.it/600/3498db',
      '//placehold.it/600/2ecc71',
      '//placehold.it/600/9b59b6',
      '//placehold.it/600/f1c40f',
      '//placehold.it/600/e74c3c',
      '//placehold.it/600/e67e22',
      '//placehold.it/600/f74c3c',
      '//placehold.it/600/f67e22',
      '//placehold.it/600/a7fc3c',
      '//placehold.it/600/a67ef2',
    ];
    var settings = {
      dots: true,
      infinite: true,
      initialSlide: 0,
      speed: 1000,
      slidesToShow: 5,  
      slidesToScroll: 3,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 3 } },{ breakpoint: 950, settings: { slidesToShow: 4 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }]
    };
 
    return (
      <div>
        { /* <h1>Carousel</h1>
        <div id="carousel-1">
          <Carousel axis="horizontal" showArrows={true}>
                <div>
                    <img src="//placehold.it/600/1abc9c" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="//placehold.it/600/3498db" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="//placehold.it/600/2ecc71" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div> */}
        

            {/*<h1>Slider</h1>
             <Slider images={images} isInfinite delay={10000}>
              {images.map((image, key) => <div key={key}><img src={image} /></div>)}
            </Slider> */}

            <h1>React slick</h1>
            <div id="slick-carousel" className="container">
              <Slider {...settings}>
                {images.map((image,key) => <div key={key}><img className="slick-img" src={image} /></div>)}
              </Slider>
            </div>
            
      </div>
    );
  }
}
 
ReactDOM.render(<Hello/>, document.getElementById('App'));