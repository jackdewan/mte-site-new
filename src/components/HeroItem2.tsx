export const HeroItem2 = () => {
  return (
    <div
      className="hero-item has-image theme-light glide__slide"
      style={{ width: 989, marginLeft: 0, marginRight: 0 }}
    >
      <div className="hero-item-background">
        <picture>
          <source
            data-srcset="/siteassets/beer/fat-tire/desktop-beerdetail-hero.jpg"
            media="(min-width: 768px) and (orientation:landscape)"
            srcSet="/siteassets/beer/fat-tire/desktop-beerdetail-hero.jpg"
          />
          <source
            data-srcset="/siteassets/beer/fat-tire/tablet-beerdetail-hero.jpg"
            media="(min-width: 768px)"
            srcSet="/siteassets/beer/fat-tire/tablet-beerdetail-hero.jpg"
          />
          <img
            src="/siteassets/beer/fat-tire/mobile-beerdetail-hero.jpg"
            data-src="/siteassets/beer/fat-tire/mobile-beerdetail-hero.jpg"
            alt="Mobile-BeerDetail-Hero.jpg"
            className=" lazyloaded"
            data-expand={100}
          />
        </picture>
      </div>
      <div className="hero-item-foreground">
        <img
          data-src="/siteassets/beer/fat-tire/product-imagedesktop.png"
          alt="Product-ImageDesktop.png"
          width={0}
          height={0}
          className="fit-image contain lazyloaded"
          data-expand={100}
          src="/siteassets/beer/fat-tire/product-imagedesktop.png"
        />
      </div>
      <div className="hero-item-content  focus-image-foreground ">
        <span className="t3 hero-item-subtitle-top">Classic Ale </span>{" "}
        <h1>
          <span>Fat Tire</span>
        </h1>{" "}
        <span className="t3 hero-item-subtitle-bottom">Classic Ale </span>{" "}
        <p className="italic">Crisp. Bright. Easy-drinking. </p>{" "}
        <div className="hero-item-ctas ">
          <a
            className="pill-btn a6 theme-red text-color- filled icon"
            target=""
            href="/beer/fat-tire/"
            title="LEARN MORE"
            aria-label="LEARN MORE"
          >
            LEARN MORE
            <svg>
              <use
                xlinkHref="#icon-long-arrow-right"
                href="#icon-long-arrow-right"
              />
            </svg>
          </a>
          <a
            className="pill-btn a6 theme-red text-color- filled icon"
            target=""
            href="/beer/buy-online/?beer_flavor_number=1"
            title="BUY NOW ONLINE"
            aria-label="BUY NOW ONLINE"
          >
            BUY NOW ONLINE
            <svg>
              <use xlinkHref="#icon-cart" href="#icon-cart" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
