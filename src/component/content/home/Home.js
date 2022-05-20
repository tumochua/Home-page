import Button from "../../button/Button";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import "./Home.scss";
function Home() {
  return (
    <>
      <div className="home-page">
        <div className="home-ctn">
          <div className="home-ctn-div">
            <div className="home-ctn-left">
              <h1 className="home-ctn-left-title">
                The Complete eCommerce Solutions for Magento
              </h1>
              <p className="home-ctn-left-des">
                We've been digital transforming businesses and helping store
                owners to become successful since 2011.
              </p>
              <Button />
            </div>
            <div className="home-ctn-right">
              <img src="https://tapita.io/pb/pub/media/spb/usr/19/oti/1641372325222/Home-hero.png" />
            </div>
          </div>
          <WhoWeAre />
        </div>
      </div>
    </>
  );
}

export default Home;
