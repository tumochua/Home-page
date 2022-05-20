import "./WhoWeAre.scss";
import Button from "../../../button/Button";
import MagentoServices from "../MagentoServices/MagentoServices";
function WhoWeAre() {
  return (
    <>
      <div className="who-we-are">
        <div>
          <h1>Who we are</h1>
          <p>
            With over 10 years working in the eCommerce industry, we understand
            the difficulties <br /> customers and merchants are facing in buying
            and selling products online. <br /> We work hard every day with no
            purpose other than perfecting customer experience in online <br />{" "}
            shopping and at the same time increase store owners' revenue.
          </p>
          <div className="advertisement">
            <div>
              <h2>10+</h2>
              <p>
                Years of experience in Magento <br /> eCommerce development
              </p>
            </div>
            <div>
              <h2>10+</h2>
              <p>
                Years of experience in Magento <br /> eCommerce development
              </p>
            </div>
            <div>
              <h2>10+</h2>
              <p>
                Years of experience in Magento <br /> eCommerce development
              </p>
            </div>
          </div>
        </div>
        {/* What we do */}
        <div className="what-we-do-ctn">
          <h1 className="what-we-do-title">What we do</h1>
          <div className="what-we-do">
            <div className="what-we-do-left">
              <h1>Free Magento PWA Theme</h1>
              <p className="what-we-do-left-des">
                Based on PWA Studio, our open-source PWA theme for <br />
                Magento 2 is an easy way to transform your store into a headless
                storefront that is fast, engaging, and mobile-friendly.
              </p>
              <div>
                <Button />
              </div>
            </div>
            <div className="what-we-do-img">
              <img src="https://tapita.io/pb/pub/media/spb/usr/19/oti/1640680526209/siminia.png" />
            </div>
          </div>
        </div>
        <div className="page-builder">
          <div className="page-builder-left">
            <img src="https://tapita.io/pb/pub/media/spb/usr/19/oti/1633687840675/uxdesigntools.png" />
          </div>
          <div className="page-builder-right">
            <h1 className="page-builder-title">Page Builder</h1>
            <div className="page-builder-des">
              <p>
                Tapita.io is a better page builder solution for Magento. We work
                hard to make sure the tool is easy to use for everyone.
              </p>
              <p>
                This tool supports both Magento 2 normal storefront and headless
                storefront.
              </p>
            </div>
            <div className="page-builder-link">
              <a href="#">➔ Magento 2 Page Builder</a>
              <a href="#"> ➔ Magento PWA Studio Page Builder</a>
              <a href="#">➔ ScandiPWA Page Builder</a>
              <a href="#">➔ Vue Storefront Page Builder</a>
              <button>Explore Tapita Page Builder</button>
            </div>
          </div>
        </div>
        <div className="magento-mobile-app">
          <div className="magento-mobile-app-left">
            <h1 className="magento-mobile-app-left-tite">Magento Mobile App</h1>
            <p className="magento-mobile-app-left-dess">
              Mobile apps power the best shopping channel for on-the-go shoppers
              on their most personal devices. Fully integrated with Magento, our
              mobileapps deliver rich and engaging shopping experience to boost
              customer loyalty and retention.
            </p>
            <Button />
          </div>
          <div className="magento-mobile-app-right">
            <img src="https://tapita.io/pb/pub/media/spb/usr/19/oti/1627268830235/magento-mobile-app.png" />
          </div>
        </div>
        <div>
          <MagentoServices />
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
