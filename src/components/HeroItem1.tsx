export const HeroItem1 = () => {
  return (
    <div
      className="hero-item has-image theme-dark glide__slide active glide__slide--active"
      style={{ width: 989, marginRight: 0 }}
    >
      <div className="hero-item-background">
        <picture>
          <source
            data-srcset="/siteassets/gear/collections/2023-artist-collection/newbelgium_2023_globe_glasses_hand_2880x1660_v1.jpg"
            media="(min-width: 768px) and (orientation:landscape)"
            srcSet="/siteassets/gear/collections/2023-artist-collection/newbelgium_2023_globe_glasses_hand_2880x1660_v1.jpg"
          />
          <source
            data-srcset="/siteassets/gear/collections/2023-artist-collection/newbelgium_2023_globe_glasses_hand_1440x2160_v1.jpg"
            media="(min-width: 768px)"
            srcSet="/siteassets/gear/collections/2023-artist-collection/newbelgium_2023_globe_glasses_hand_1440x2160_v1.jpg"
          />
          <img
            src="/siteassets/gear/collections/2023-artist-collection/newbelgium_2023_globe_glasses_hand_960x1440_v1.jpg"
            data-src="/siteassets/gear/collections/2023-artist-collection/newbelgium_2023_globe_glasses_hand_960x1440_v1.jpg"
            alt="newbelgium_2023_globe_glasses_hand_960x1440_v1.jpg"
            className=" lazyloaded"
            data-expand={100}
          />
        </picture>
      </div>
      <div className="hero-item-content  focus-image-foreground ">
        <span className="t3 hero-item-subtitle-top">
          Featuring AJ from Access Gallery
        </span>{" "}
        <h3>
          <span>2023 Artist</span>
        </h3>{" "}
        <h3>Capsule Collection</h3>{" "}
        <span className="t3 hero-item-subtitle-bottom">
          Featuring AJ from Access Gallery
        </span>{" "}
        <div className="hero-item-ctas ">
          <a
            className="pill-btn a6 theme-red text-color-blue icon"
            target=""
            href="/shop/2023-artist-collection/"
            title="Shop Now"
            aria-label="Shop Now"
          >
            Shop Now
            <svg>
              <use
                xlinkHref="#icon-long-arrow-right"
                href="#icon-long-arrow-right"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
