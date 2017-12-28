import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import CoursesPage from './courses';

// var Carousel = require('react-responsive-carousel').Carousel;
 
class Hello extends React.Component {
  constructor(props){
    super(props);
  }
  getImageUrls(){
    var imgList = ["imgs/e/i/s/166x194/Drools-Dry-Adult-Only-Chicken-SDL842526757-1-020ab.jpg", "imgs/d/8/h/166x194/Nature-Forever-Black-Seed-Dispenser-SDL870614332-1-2f4f2.jpg", "imgs/e/k/d/166x194/Choostix_ALL_Non_Veg_Chew_SDL194453167_1_4db17-0d18d.jpeg", "imgs/b/9/r/166x194/Pedigree-Adult-Dog-Food-Chicken-SDL336912837-1-f7ea6.jpg", "imgs/b/x/1/166x194/Himalaya-Furglow-Oral-Coat-Conditioner-SDL967853935-1-8a4f0.jpg", "imgs/e/p/s/166x194/71d2f6qus9L__SL1200__dfc20-a2d78.jpg", "imgs/e/d/f/166x194/51_uqPinHqL-5869b.jpg", "imgs/d/m/4/166x194/Choostix-Dry-All-Egg-100-SDL630094801-1-0566a.jpg", "imgs/d/p/d/166x194/Nature-Forever-Muti-color-Wooden-SDL539615424-1-5bafb.jpg", "imgs/a/e/8/166x194/SDL546625279_1382439390_image1-50e9f.jpg", "imgs/d/o/6/166x194/Nature-Forever-Muti-color-Wooden-SDL388724968-1-3f3c9.jpg", "imgs/a/i/8/166x194/Royal-Canin-Dog-Food-Labrador-SDL561585675-1-1f2fd.JPG", "imgs/d/g/2/166x194/Nootie-ALL-Chicken-Snack-Treat-SDL621882746-1-b8a84.jpg", "imgs/b/9/r/166x194/Pedigree-Adult-Dog-Food-Chicken-SDL341488033-1-3e9ea.jpg", "imgs/e/1/f/166x194/mainimage-ded2a.jpg", "imgs/e/o/f/166x194/590_goodies_energy_treats_liver_125_g_store_1716473270-9f362.jpg", "imgs/a/i/8/166x194/Royal-Canin-Dog-Food-Labrador-SDL561114594-1-bad19.JPG", "imgs/a/1/n/166x194/Super-Dog-Multi-Color-Collar-SDL508394865-1-e3c4c.jpg", "imgs/d/g/1/166x194/Nootie-Pink-Shampoo-SDL506843649-1-37232.jpg", "imgs/e/k/d/166x194/vcwj-8f54e.jpg"]
    return imgList;  
}
  
  render() {
     const images1 = [
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
    var images = this.getImageUrls();
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
                {images.map((image,key) => <div key={key}><img className="slick-img" src={"http://n1.sdlcdn.com/" + image} /></div>)}
              </Slider>
            </div>
      </div>
    );
  }
}
 
// ReactDOM.render(<Courses/>, document.getElementById('App'));