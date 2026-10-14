import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <section aria-label="Giới thiệu" className="hero" id="home">
      <Carousel interval={5000} pause="hover">
        <Carousel.Item>
          <div className="hero-slide hero-slide-one">
            <div className="hero-copy">
              <h1>Good Afternoon</h1>
              <p>Spaces and Cybers.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-slide hero-slide-two">
            <div className="hero-copy">
              <h1>Welcome to My App</h1>
              <p>Discover something new.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-slide hero-slide-three">
            <div className="hero-copy">
              <h1>Stay Connected</h1>
              <p>Your space, your community.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Banner;
