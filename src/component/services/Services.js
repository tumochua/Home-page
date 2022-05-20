import "./Services.scss";
import Slider from "react-slick";
var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};
function Services() {
  return (
    <>
      <div className="services-ctn">
        <div className="services-ctn-header">
          <img
            className="services-ctn-header-img"
            src="https://tapita.io/pb/pub/media/spb/usr/19/oti/1628680293576/gUkuc1d7jh1628680345fce5f0b392b91a1644eb588bd756e146.png"
          />
          <div className="services-ctn-header-tile">
            <h1>Magento Marketing Service</h1>
            <p>Promote your store with the help of our marketing experts.</p>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="services-ctn-body">
          <div className="services-ctn-body-card ">
            <Slider {...settings}>
              <div className="services-ctn-body-card-item">
                <h1>Digital Marketing</h1>
                <p>
                  Using digital marketing tools and tactics that already work
                  for many of our clients, we offer a complete set of marketing
                  services including SEO, content marketing, email marketing,
                  PPC ads, and social media.
                </p>
              </div>

              <div className="services-ctn-body-card-item">
                <h1>Digital Marketing</h1>
                <p>
                  Using digital marketing tools and tactics that already work
                  for many of our clients, we offer a complete set of marketing
                  services including SEO, content marketing, email marketing,
                  PPC ads, and social media.
                </p>
              </div>
              <div className="services-ctn-body-card-item">
                <h1>Digital Marketing</h1>
                <p>
                  Using digital marketing tools and tactics that already work
                  for many of our clients, we offer a complete set of marketing
                  services including SEO, content marketing, email marketing,
                  PPC ads, and social media.
                </p>
              </div>
              <div className="services-ctn-body-card-item">
                <h1>Digital Marketing</h1>
                <p>
                  Using digital marketing tools and tactics that already work
                  for many of our clients, we offer a complete set of marketing
                  services including SEO, content marketing, email marketing,
                  PPC ads, and social media.
                </p>
              </div>
              <div className="services-ctn-body-card-item">
                <h1>Digital Marketing</h1>
                <p>
                  Using digital marketing tools and tactics that already work
                  for many of our clients, we offer a complete set of marketing
                  services including SEO, content marketing, email marketing,
                  PPC ads, and social media.
                </p>
              </div>
              <div className="services-ctn-body-card-item">
                <h1>Digital Marketing</h1>
                <p>
                  Using digital marketing tools and tactics that already work
                  for many of our clients, we offer a complete set of marketing
                  services including SEO, content marketing, email marketing,
                  PPC ads, and social media.
                </p>
              </div>
            </Slider>
          </div>
          <div className="search-engines">
            <div>
              <h1>Boost your store rankings on search engines</h1>
              <div>
                Like it or not, your online store relies heavily on search
                engines like Google to get new customers and gain profit.
              </div>
              <p>
                We will increase your store rankings on Google using white-hat
                techniques.
              </p>
            </div>
            <div>
              <img src="https://tapita.io/pb/pub/media/spb/usr/19/oti/1625812623890/rfUwdYyKel16258126871d58e53f6ade7cd4ceda8c7ffcb7a718.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
