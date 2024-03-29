import "./main.scss";
import Hero from "./../../assets/images/image-web-3-desktop.jpg";
import HeroMobile from "./../../assets/images/image-web-3-mobile.jpg";
import Retro from "./../../assets/images/image-retro-pcs.jpg";
import Laptops from "./../../assets/images/image-top-laptops.jpg";
import Growth from "./../../assets/images/image-gaming-growth.jpg";
const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="hero">
          <div className="main-hero">
            <div className="main-hero__img">
              <picture>
                <source
                  media="(max-width: 720px)"
                  srcSet={HeroMobile}
                  className="img"
                />
                <source
                  media="(min-width: 721px)"
                  srcSet={Hero}
                  className="img"
                />
                <img src={HeroMobile} alt="Hero" />
              </picture>
            </div>
            <div className="main-hero__content">
              <h1 className="main-title">The Bright Future of Web 3.0?</h1>
              <div className="sub-hero">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <a href="#!" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="aside-hero">
            <h2 className="aside-hero__title">New</h2>
            <div className="aside-card">
              <a className="aside-card__title">Hydrogen VS Electric Cars</a>
              <p className="aside-card__text">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="aside-card">
              <a className="aside-card__title">The Downsides of AI Artistry</a>
              <p className="aside-card__text">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className="aside-card">
              <a className="aside-card__title">Is VC Funding Drying Up?</a>
              <p className="aside-card__text">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
        {/* other articles */}
        <article>
          <div className="article-card">
            <div className="article-card__img">
              <img src={Retro} alt="Retro PC" />
            </div>
            <div className="article-card__description">
              <h2>01</h2>
              <h3>Reviving Retro PCs</h3>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="article-card">
            <div className="article-card__img">
              <img src={Laptops} alt="Retro PC" />
            </div>
            <div className="article-card__description">
              <h2>02</h2>
              <h3>Top 10 Laptops of 2022</h3>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="article-card">
            <div className="article-card__img">
              <img src={Growth} alt="Retro PC" />
            </div>
            <div className="article-card__description">
              <h2>03</h2>
              <h3>The Growth of Gaming</h3>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Main;
