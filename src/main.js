import './style.css';
import gsap from 'gsap';

const heroProducts = [
  {
    catalogueImage: '/images/main_bed.png',
    heroImage: '/images/trans_hero.png',
    catalogueAlt: 'Majesty Bed in a furnished bedroom',
    heroAlt: 'Green Majesty bed by Heaven Furniture Mart',
    productRoute: '/product/majesty-bed',
    category: 'BEDROOM',
    title: 'MAJESTY BED',
    description: 'A statement bedroom piece crafted to bring refined comfort, character and presence to your space.',
    catalogueTitle: 'MAJESTY GLAME',
    catalogueDescription: 'Crafted for restful luxury, this statement bed combines refined detailing, plush comfort, and timeless elegance.',
  },
  {
    catalogueImage: '/images/image3.png',
    heroImage: '/images/image3_trans.png',
    catalogueAlt: 'Luxury cabinet in a furnished interior',
    heroAlt: 'Luxury cabinet by Heaven Furniture Mart',
    productRoute: '/product/luxury-cabinet',
    category: 'LIVING / STORAGE',
    title: 'LUXURY CABINET',
    description: 'A refined storage piece designed to bring character and presence to your living space.',
    catalogueTitle: 'SIGNATURE CABINET',
    catalogueDescription: 'Designed for modern interiors, this statement piece brings refined storage, elegant proportions, and effortless sophistication.',
  },
  {
    catalogueImage: '/images/image5.jpg',
    heroImage: '/images/image5_trans.png',
    catalogueAlt: 'Luxury living furniture in an elegant interior',
    heroAlt: 'Luxury blue and gold living furniture by Heaven Furniture Mart',
    productRoute: '/product/luxury-living',
    category: 'LIVING',
    title: 'LUXURY LIVING SUITE',
    description: 'A statement living collection crafted to bring character and presence to your space.',
    catalogueTitle: 'DINING COLLECTION',
    catalogueDescription: 'Crafted for memorable meals, this refined dining set brings modern form, lasting comfort, and timeless elegance.',
  },
];

const collectionProducts = [
  ...heroProducts,
  {
    catalogueImage: '/images/Image2.jpg',
    catalogueAlt: 'Statement bedroom furniture in a warm interior',
    productRoute: '/product/heritage-bedroom',
    category: 'BEDROOM',
    title: 'HERITAGE BEDROOM',
    description: 'A considered bedroom composition shaped around quiet comfort and enduring character.',
    catalogueTitle: 'HERITAGE BEDROOM',
    catalogueDescription: 'A warm, composed bedroom piece with a timeless presence.',
  },
  {
    catalogueImage: '/images/image4.png',
    catalogueAlt: 'Contemporary dining furniture in an elegant interior',
    productRoute: '/product/contemporary-dining',
    category: 'DINING',
    title: 'CONTEMPORARY DINING',
    description: 'A refined dining setting made for gathering, conversation, and everyday ritual.',
    catalogueTitle: 'CONTEMPORARY DINING',
    catalogueDescription: 'Modern form and generous comfort for memorable gatherings.',
  },
  {
    catalogueImage: '/images/fc938df5-3085-4626-9e62-7818ffbf5b5c.png',
    catalogueAlt: 'Curved accent furniture by Heaven Furniture Mart',
    productRoute: '/product/curved-accent',
    category: 'LIVING',
    title: 'CURVED ACCENT',
    description: 'A sculptural accent piece that brings softness and character to a room.',
    catalogueTitle: 'CURVED ACCENT',
    catalogueDescription: 'A sculptural note for layered, expressive interiors.',
  },
  {
    catalogueImage: '/images/c40014a6-b4ff-45a0-9e83-97098d5ee573.png',
    catalogueAlt: 'Blue lounge furniture by Heaven Furniture Mart',
    productRoute: '/product/blue-lounge',
    category: 'LIVING',
    title: 'BLUE LOUNGE',
    description: 'A relaxed lounge piece designed to bring color, comfort, and quiet confidence.',
    catalogueTitle: 'BLUE LOUNGE',
    catalogueDescription: 'A confident, comfortable anchor for the living space.',
  },
  {
    catalogueImage: '/images/c40014a6-b4ff-45a0-9e83-97098d5ee573.png',
    catalogueAlt: 'Blue lounge furniture by Heaven Furniture Mart',
    productRoute: '/product/refined-detail',
    category: 'LIVING',
    title: 'BLUE LOUNGE',
    description: 'A relaxed lounge piece designed to bring color, comfort, and quiet confidence.',
    catalogueTitle: 'BLUE LOUNGE',
    catalogueDescription: 'A confident, comfortable anchor for the living space.',
  },
];

const premiumShowcaseProducts = [
  {
    image: '/images/main_bed.png',
    alt: 'Majesty Glame bed in a refined bedroom',
    name: 'MAJESTY GLAME',
    category: 'BEDROOM',
    description: 'Refined comfort with timeless detailing for an elegant bedroom.',
    route: '/product/majesty-bed',
  },
  {
    image: '/images/image3.png',
    alt: 'Signature cabinet in a modern interior',
    name: 'SIGNATURE CABINET',
    category: 'LIVING / STORAGE',
    description: 'Elegant storage designed for modern interiors.',
    route: '/product/luxury-cabinet',
  },
  {
    image: '/images/image4.png',
    alt: 'Contemporary dining furniture in an elegant interior',
    name: 'DINING COLLECTION',
    category: 'DINING',
    description: 'A refined dining set for memorable meals and effortless style.',
    route: '/product/contemporary-dining',
  },
  {
    image: '/images/image5.jpg',
    alt: 'Luxury living furniture in an elegant interior',
    name: 'LUXURY LIVING',
    category: 'LIVING',
    description: 'Statement seating crafted for elevated comfort and lasting appeal.',
    route: '/product/luxury-living',
  },
  {
    image: '/images/Image2.jpg',
    alt: 'Statement bedroom furniture in a warm interior',
    name: 'HERITAGE BEDROOM',
    category: 'BEDROOM',
    description: 'A considered bedroom composition shaped around quiet comfort and enduring character.',
    route: '/product/heritage-bedroom',
  },
  {
    image: '/images/fc938df5-3085-4626-9e62-7818ffbf5b5c.png',
    alt: 'Curved accent furniture by Heaven Furniture Mart',
    name: 'CURVED ACCENT',
    category: 'LIVING',
    description: 'A sculptural accent piece that brings softness and character to a room.',
    route: '/product/curved-accent',
  },
  {
    image: '/images/c40014a6-b4ff-45a0-9e83-97098d5ee573.png',
    alt: 'Blue lounge furniture by Heaven Furniture Mart',
    name: 'BLUE LOUNGE',
    category: 'LIVING',
    description: 'A relaxed lounge piece designed to bring color, comfort, and quiet confidence.',
    route: '/product/blue-lounge',
  },
  {
    image: '/images/c40014a6-b4ff-45a0-9e83-97098d5ee573.png',
    alt: 'Refined furniture detail by Heaven Furniture Mart',
    name: 'REFINED DETAIL',
    category: 'COLLECTION',
    description: 'A distinctive furniture detail crafted to complete a considered interior.',
    route: '/product/refined-detail',
  },
];

const customerStories = [
  { initials: 'AR', name: 'Ayesha Rahman', detail: 'Chattogram', quote: 'Beautiful craftsmanship and excellent attention to detail.' },
  { initials: 'TH', name: 'Tanvir Hasan', detail: 'Dhaka', quote: 'Everything felt thoughtfully designed and perfectly finished.' },
  { initials: 'NJ', name: 'Nusrat Jahan', detail: 'Chattogram', quote: 'The selection process felt calm, considered, and effortless.' },
  { initials: 'FA', name: 'Farhan Ahmed', detail: 'Dhaka', quote: 'A refined piece that feels made for the room.' },
];

const renderNavbar = () => `
  <header class="site-navbar">
    <a class="brand-lockup" href="/" aria-label="Heaven Furniture Mart home">
      <span class="brand-word">HEAVEN</span>
      <small>FURNITURE MART</small>
    </a>

    <nav class="nav-links" aria-label="Primary navigation">
      <a href="/#home">HOME</a>
      <a href="/#collections">COLLECTIONS</a>
      <a href="/#bespoke">BESPOKE</a>
      <a href="/#story">OUR STORY</a>
    </nav>

    <div class="utility-actions">
      <button class="utility-button" type="button" aria-label="Search">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m16 16 4.2 4.2"></path></svg>
      </button>
      <button class="utility-button" type="button" aria-label="Account">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.2" r="3.3"></circle><path d="M5.4 20c.7-3.4 3-5.1 6.6-5.1s5.9 1.7 6.6 5.1"></path></svg>
      </button>
    </div>

    <button class="mobile-menu-trigger" type="button" aria-label="Open menu">
      <span></span><span></span>
    </button>
  </header>
`;

const heroMarkup = `
  <div class="page-shell">
    ${renderNavbar()}
    <main class="hero-main">
      <section class="hero-stage">
        <div class="hero-wordmark" aria-hidden="true">HEAVEN</div>

        <a class="hero-card" href="${heroProducts[0].productRoute}" aria-label="View ${heroProducts[0].title} product details">
          <div class="card-image-wrap">
            <img class="catalogue-image" src="${heroProducts[0].catalogueImage}" alt="${heroProducts[0].catalogueAlt}" />
          </div>
          <div class="card-copy">
            <span>NEW COLLECTION</span>
          </div>
        </a>

        <div class="catalogue-caption" aria-live="polite">
          <h2>${heroProducts[0].catalogueTitle}</h2>
          <p>${heroProducts[0].catalogueDescription}</p>
        </div>

        <div class="hero-art" aria-label="Luxury furniture hero composition">
          <div class="hero-bed-wrap" data-product="0">
            <img class="hero-product-image" src="${heroProducts[0].heroImage}" alt="${heroProducts[0].heroAlt}" />
          </div>
        </div>

        <div class="hero-copy">
          <p class="eyebrow">BESPOKE FURNITURE</p>
          <h2 class="hero-copy-title">Furniture made to fit your space, your taste, your life.</h2>
          <p class="supporting-copy">From custom sofas and beds to dining and office pieces, Heaven Furniture Mart creates furniture around your space, your taste, and the way you live.</p>
        </div>

        <div class="hero-controls" aria-label="Furniture control buttons">
              <button type="button" aria-label="Previous product" class="control-button control-back">←</button>
              <button type="button" aria-label="Next product" class="control-button control-next">→</button>
        </div>
      </section>
    </main>

    <section class="collection-section" id="collections" aria-labelledby="collection-title">
      <div class="collection-heading">
        <div>
          <p class="collection-kicker">HEAVEN FURNITURE MART</p>
          <h1 id="collection-title">Explore Latest Collection</h1>
        </div>
        <p class="collection-intro">Furniture that blends with your personal style</p>
      </div>

      <div class="collection-viewport">
        <div class="collection-track">
        ${[...collectionProducts, ...collectionProducts].map((product) => `
          <a class="collection-product" href="${product.productRoute}" aria-label="View ${product.title} details">
            <div class="collection-image-wrap">
              <img src="${product.catalogueImage}" alt="${product.catalogueAlt}" loading="lazy" />
            </div>
            <div class="collection-product-meta">
              <div>
                <p class="collection-category">${product.category}</p>
                <h2>${product.catalogueTitle}</h2>
              </div>
            </div>
            <p class="collection-description">${product.catalogueDescription}</p>
          </a>
        `).join('')}
        </div>
      </div>
    </section>

    <section class="premium-section" aria-labelledby="premium-title">
      <div class="premium-feature">
        <div class="premium-panel">
          <div class="premium-heading">
            <p class="premium-kicker">EXCELLENCE QUALITY</p>
            <h1 id="premium-title">Luxury Living,<br />Crafted to Last</h1>
          </div>
          <div class="premium-image-wrap">
            <img src="/images/image4_trans.png" alt="Luxury sofa by Heaven Furniture Mart" loading="lazy" />
          </div>
          <div class="premium-copy">
            <p>Designed for refined interiors, this statement sofa combines exceptional comfort, elegant form, and lasting craftsmanship.</p>
          </div>
        </div>
        <a class="premium-primary" href="/collections">EXPLORE MORE <span>→</span></a>
      </div>
    </section>

    <section class="premium-showcase-section" aria-labelledby="premium-showcase-title">
      <div class="premium-showcase-heading">
        <p class="premium-showcase-kicker">HEAVEN FURNITURE MART</p>
        <h1 id="premium-showcase-title">OUR PREMIUM COLLECTION</h1>
      </div>
      <div class="premium-showcase-viewport">
        <div class="premium-showcase-grid">
          ${[...premiumShowcaseProducts, ...premiumShowcaseProducts].map((product, index) => `
            <a class="premium-showcase-card" href="${product.route}" aria-label="View ${product.name} details"${index >= premiumShowcaseProducts.length ? ' aria-hidden="true" tabindex="-1"' : ''}>
              <div class="premium-showcase-image">
                <img src="${product.image}" alt="${product.alt}" loading="lazy" />
              </div>
              <p class="premium-showcase-category">${product.category}</p>
              <h2>${product.name}</h2>
              <p class="premium-showcase-description">${product.description}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="stories-section" aria-labelledby="stories-title">
      <div class="stories-heading">
        <p class="stories-kicker">TESTIMONIALS</p>
        <h1 id="stories-title">Hear from happy customers</h1>
      </div>
      <div class="stories-layout">
        <div class="story-list">
          ${customerStories.map((story) => `
            <article class="story-item">
              <div class="story-avatar" aria-hidden="true">${story.initials}</div>
              <div class="story-content">
                <h2>${story.name}</h2>
                <p class="story-detail">${story.detail}</p>
                <p class="story-quote">“${story.quote}”</p>
              </div>
            </article>
          `).join('')}
        </div>
        <div class="stories-feature">
          <img src="/images/image5.jpg" alt="Luxury living furniture in an elegant interior" loading="lazy" />
          <div class="stories-feature-card">
            <p class="stories-feature-kicker">LUXURY COLLECTION</p>
            <p>Refined furniture for elevated interiors.</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer" aria-labelledby="footer-brand-title">
      <div class="footer-art" aria-hidden="true">H</div>
      <div class="footer-inner">
        <div class="footer-brand">
          <p class="footer-signature">DESIGNED. CRAFTED. CUSTOMIZED.</p>
          <h1 id="footer-brand-title">HEAVEN<span class="footer-mark">.</span></h1>
          <p class="footer-subbrand">FURNITURE MART</p>
        </div>

        <div class="footer-grid">
          <div class="footer-column">
            <h2>EXPLORE</h2>
            <a href="/#home">HOME</a>
            <a href="/#collections">COLLECTIONS</a>
            <a href="/#bespoke">BESPOKE</a>
            <a href="/#story">OUR STORY</a>
            <a href="mailto:heavenfurnituremart@gmail.com">CONTACT</a>
          </div>
          <div class="footer-column">
            <h2>COLLECTIONS</h2>
            <a href="/#collections">LIVING</a>
            <a href="/#collections">BEDROOM</a>
            <a href="/#collections">DINING</a>
            <a href="/#collections">OFFICE &amp; STUDY</a>
          </div>
          <div class="footer-column footer-contact-column">
            <h2>CONTACT</h2>
            <a href="https://wa.me/8801960481983" target="_blank" rel="noopener noreferrer" aria-label="Chat with Heaven Furniture Mart on WhatsApp" title="Chat with Heaven Furniture Mart on WhatsApp">+880 1960-481983</a>
            <a href="mailto:heavenfurnituremart@gmail.com">heavenfurnituremart@gmail.com</a>
            <p class="footer-visit-label">VISIT US</p>
            <address>Agrabad Access Road,<br />Chattogram, Bangladesh</address>
          </div>
          <div class="footer-column">
            <h2>FOLLOW</h2>
            <a href="#" aria-label="Heaven Furniture Mart on Facebook">FACEBOOK</a>
            <a href="#" aria-label="Heaven Furniture Mart on Instagram">INSTAGRAM</a>
            <a href="#" aria-label="Heaven Furniture Mart on YouTube">YOUTUBE</a>
          </div>
        </div>

        <div class="footer-cta">
          <p>Ready to shape your space?</p>
        </div>

        <div class="footer-bottom">
          <p>© 2026 HEAVEN FURNITURE MART</p>
          <p>AGRABAD <span aria-hidden="true">·</span> CHATTOGRAM <span aria-hidden="true">·</span> BANGLADESH</p>
        </div>
      </div>
    </footer>
  </div>
`;

const productPageMarkup = (product) => `
  <div class="product-page">
    ${renderNavbar()}
    <main class="product-main">
      <a class="product-back-link" href="/">← BACK TO COLLECTION</a>
      <section class="product-detail" aria-labelledby="product-title">
        <div class="product-visual">
          <img src="${product.catalogueImage}" alt="${product.catalogueAlt}" />
        </div>
        <div class="product-information">
          <p class="product-category">${product.category}</p>
          <h1 id="product-title">${product.title}</h1>
          <p class="product-description">${product.description}</p>
          <div class="product-contact">
            <p>+880 1960-481983</p>
            <a href="mailto:heavenfurnituremart@gmail.com">heavenfurnituremart@gmail.com</a>
            <p>Agrabad Access Road,<br />Chattogram, Bangladesh</p>
          </div>
        </div>
      </section>
    </main>
  </div>
`;

const productPage = collectionProducts.find((product) => product.productRoute === window.location.pathname);
const isProductPage = Boolean(productPage);
document.querySelector('#app').innerHTML = isProductPage ? productPageMarkup(productPage) : heroMarkup;

if (isProductPage) {
  gsap.from('.product-page', { autoAlpha: 0, y: 10, duration: 0.55, ease: 'power2.out' });
} else {

const stage = document.querySelector('.hero-stage');
const wordmark = document.querySelector('.hero-wordmark');
const bed = document.querySelector('.hero-bed-wrap');
const card = document.querySelector('.hero-card');
const copy = document.querySelector('.hero-copy');
const controls = document.querySelector('.hero-controls');
const catalogueImage = document.querySelector('.catalogue-image');
const heroProductImage = document.querySelector('.hero-product-image');
const catalogueCaption = document.querySelector('.catalogue-caption');
const previousProductButton = document.querySelector('.control-back');
const nextProductButton = document.querySelector('.control-next');

gsap.set(stage, { autoAlpha: 0, scale: 0.985 });
gsap.set([wordmark, bed, card, copy, controls], { autoAlpha: 0 });
gsap.set(wordmark, { y: 36 });
gsap.set(bed, { y: 54, scale: 0.96 });
gsap.set(card, { x: -18, y: 18, opacity: 0 });
gsap.set(copy, { y: 18, opacity: 0 });
gsap.set(controls, { opacity: 0 });

gsap.timeline({ defaults: { ease: 'power3.out' } })
  .to(stage, { autoAlpha: 1, scale: 1, duration: 0.75 })
  .to(wordmark, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.08)
  .to(bed, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 }, 0.16)
  .to(card, { autoAlpha: 1, x: 0, y: 0, duration: 0.6 }, 0.28)
  .to(copy, { autoAlpha: 1, y: 0, duration: 0.55 }, 0.38)
  .to(controls, { autoAlpha: 1, duration: 0.45 }, 0.45);

heroProducts.forEach((product) => {
  [product.catalogueImage, product.heroImage].forEach((source) => {
    const image = new Image();
    image.src = source;
  });
});

collectionProducts.forEach((product) => {
  const image = new Image();
  image.src = product.catalogueImage;
});

let activeProductIndex = 0;
let productTransitioning = false;

const switchProduct = (direction) => {
  if (productTransitioning) return;

  productTransitioning = true;
  activeProductIndex = (activeProductIndex + direction + heroProducts.length) % heroProducts.length;
  const nextProduct = heroProducts[activeProductIndex];
  const exitX = direction > 0 ? -18 : 18;
  const enterX = direction > 0 ? 18 : -18;

  gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    onComplete: () => {
      productTransitioning = false;
    },
  })
    .to([catalogueImage, heroProductImage], { autoAlpha: 0, x: exitX, duration: 0.28 })
    .add(() => {
      catalogueImage.src = nextProduct.catalogueImage;
      catalogueImage.alt = nextProduct.catalogueAlt;
      heroProductImage.src = nextProduct.heroImage;
      heroProductImage.alt = nextProduct.heroAlt;
      card.href = nextProduct.productRoute;
      card.setAttribute('aria-label', `View ${nextProduct.title} product details`);
      catalogueCaption.querySelector('h2').textContent = nextProduct.catalogueTitle;
      catalogueCaption.querySelector('p').textContent = nextProduct.catalogueDescription;
      bed.dataset.product = String(activeProductIndex);
      gsap.set([catalogueImage, heroProductImage], { autoAlpha: 0, x: enterX });
    })
    .to([catalogueImage, heroProductImage], { autoAlpha: 1, x: 0, duration: 0.42 });
};

previousProductButton.addEventListener('click', () => switchProduct(-1));
nextProductButton.addEventListener('click', () => switchProduct(1));

const moveBedX = gsap.quickTo(bed, 'x', { duration: 0.9, ease: 'power3.out' });
const moveBedY = gsap.quickTo(bed, 'y', { duration: 0.9, ease: 'power3.out' });

const handleBedPointerMove = (event) => {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const bounds = stage.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 6;

  moveBedX(x);
  moveBedY(y);
};

const resetBedPosition = () => {
  moveBedX(0);
  moveBedY(0);
};

stage.addEventListener('pointermove', handleBedPointerMove);
stage.addEventListener('pointerleave', resetBedPosition);

  const collectionSection = document.querySelector('.collection-section');
  const collectionProductCards = document.querySelectorAll('.collection-product');

  if (collectionSection && collectionProductCards.length) {
    const revealCollection = () => {
      gsap.to(collectionSection, { autoAlpha: 1, duration: 0.5, ease: 'power2.out' });
      gsap.to(collectionProductCards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
    };

    gsap.set(collectionSection, { autoAlpha: 0 });
  gsap.set(collectionProductCards, { autoAlpha: 0, y: 28 });

    const collectionObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      revealCollection();
      observer.disconnect();
    }, { threshold: 0.18 });

    collectionObserver.observe(collectionSection);
  }

  const premiumSection = document.querySelector('.premium-section');
  if (premiumSection) {
    const premiumImage = premiumSection.querySelector('.premium-image-wrap');
    const premiumCopy = premiumSection.querySelector('.premium-copy');

    gsap.set([premiumSection, premiumImage, premiumCopy], { autoAlpha: 0 });
    gsap.set(premiumImage, { y: 26, scale: 0.985 });
    gsap.set(premiumCopy, { y: 18 });

    const premiumObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      gsap.to(premiumSection, { autoAlpha: 1, duration: 0.45, ease: 'power2.out' });
      gsap.to(premiumImage, { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' });
      gsap.to(premiumCopy, { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.12, ease: 'power3.out' });
      observer.disconnect();
    }, { threshold: 0.2 });

    premiumObserver.observe(premiumSection);
  }

  const premiumShowcaseSection = document.querySelector('.premium-showcase-section');
  const premiumShowcaseCards = document.querySelectorAll('.premium-showcase-card');
  const premiumShowcaseViewport = document.querySelector('.premium-showcase-viewport');
  const premiumShowcaseTrack = document.querySelector('.premium-showcase-grid');
  if (premiumShowcaseSection && premiumShowcaseCards.length) {
    gsap.set([premiumShowcaseSection, ...premiumShowcaseCards], { autoAlpha: 0 });
    gsap.set(premiumShowcaseCards, { y: 24 });

    const carouselCards = [...premiumShowcaseCards];
    const carouselSpeed = 45;
    let carouselOffset = 0;
    let carouselLastTimestamp = null;
    let carouselFrame;
    let carouselVisible = true;
    let showcaseRevealed = false;

    const renderPremiumCarousel = (timestamp) => {
      if (!premiumShowcaseViewport || !premiumShowcaseTrack) return;

      const firstCard = carouselCards[0];
      const viewportBounds = premiumShowcaseViewport.getBoundingClientRect();
      const cardStyle = getComputedStyle(firstCard);
      const trackStyle = getComputedStyle(premiumShowcaseTrack);
      const gap = parseFloat(trackStyle.columnGap) || parseFloat(trackStyle.gap) || parseFloat(cardStyle.marginRight) || 0;
      const slotCount = viewportBounds.width <= 560 ? 1.65 : viewportBounds.width <= 900 ? 3 : 5;
      const cardWidth = (viewportBounds.width - gap * (slotCount - 1)) / slotCount;
      carouselCards.forEach((card) => {
        card.style.flexBasis = `${cardWidth}px`;
      });
      const stride = cardWidth + gap;
      const loopWidth = stride * (carouselCards.length / 2);
      const baseOffset = viewportBounds.width / 2 - (cardWidth / 2 + stride * 2);

      if (carouselVisible) {
        if (carouselLastTimestamp !== null) {
          carouselOffset = (carouselOffset + (timestamp - carouselLastTimestamp) * (carouselSpeed / 1000)) % loopWidth;
        }
        carouselLastTimestamp = timestamp;
      } else {
        carouselLastTimestamp = null;
      }

      premiumShowcaseTrack.style.transform = `translate3d(${baseOffset - carouselOffset}px, 0, 0)`;

      const trackBounds = premiumShowcaseTrack.getBoundingClientRect();
      const viewportCenter = viewportBounds.left + viewportBounds.width / 2;
      carouselCards.forEach((card) => {
        const cardCenter = trackBounds.left + card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter) / stride;
        const normalizedDistance = Math.min(distance / 2.15, 1);
        const easedDistance = normalizedDistance * normalizedDistance * (3 - 2 * normalizedDistance);
        const scale = 1 - easedDistance * 0.22;
        const opacity = 0.66 + (1 - easedDistance) * 0.34;

        card.style.transform = `scale(${scale})`;
        card.style.opacity = String(opacity);
        card.dataset.focused = distance < 0.22 ? 'true' : 'false';
      });

      carouselFrame = requestAnimationFrame(renderPremiumCarousel);
    };

    const revealPremiumShowcase = () => {
      if (showcaseRevealed) return;
      showcaseRevealed = true;
      gsap.to(premiumShowcaseSection, { autoAlpha: 1, duration: 0.45, ease: 'power2.out' });
      gsap.to(premiumShowcaseCards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
      });
    };

    carouselFrame = requestAnimationFrame(renderPremiumCarousel);
    revealPremiumShowcase();

    const showcaseObserver = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      carouselVisible = Boolean(entry?.isIntersecting);
      if (carouselVisible) revealPremiumShowcase();
    }, { threshold: 0.16 });

    showcaseObserver.observe(premiumShowcaseSection);
  }

  const storiesSection = document.querySelector('.stories-section');
  const storyItems = document.querySelectorAll('.story-item');
  const storiesFeature = document.querySelector('.stories-feature');
  if (storiesSection && storyItems.length && storiesFeature) {
    gsap.set([storiesSection, storiesFeature, ...storyItems], { autoAlpha: 0 });
    gsap.set(storyItems, { y: 20 });
    gsap.set(storiesFeature, { y: 24, scale: 0.985 });

    const storiesObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      gsap.to(storiesSection, { autoAlpha: 1, duration: 0.45, ease: 'power2.out' });
      gsap.to(storyItems, { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out' });
      gsap.to(storiesFeature, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, delay: 0.15, ease: 'power3.out' });
      observer.disconnect();
    }, { threshold: 0.14 });

    storiesObserver.observe(storiesSection);
  }

  const footer = document.querySelector('.site-footer');
  const footerBrand = footer?.querySelector('.footer-brand');
  const footerColumns = footer?.querySelectorAll('.footer-column');
  const footerCta = footer?.querySelector('.footer-cta');
  if (footer && footerBrand && footerColumns?.length && footerCta) {
    gsap.set([footerBrand, ...footerColumns, footerCta], { autoAlpha: 0 });
    gsap.set(footerBrand, { y: 24 });
    gsap.set(footerColumns, { y: 18 });
    gsap.set(footerCta, { y: 16 });

    const footerObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      gsap.to(footerBrand, { autoAlpha: 1, y: 0, duration: 0.85, ease: 'power3.out' });
      gsap.to(footerColumns, { autoAlpha: 1, y: 0, duration: 0.6, delay: 0.16, stagger: 0.08, ease: 'power3.out' });
      gsap.to(footerCta, { autoAlpha: 1, y: 0, duration: 0.6, delay: 0.48, ease: 'power3.out' });
      observer.disconnect();
    }, { threshold: 0.12 });

    footerObserver.observe(footer);
  }
}
