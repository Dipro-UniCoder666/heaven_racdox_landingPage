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
    catalogueDescription: 'Refined detailing, plush comfort, timeless elegance.',
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
    catalogueDescription: 'Refined storage, elegant proportions, modern interiors.',
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
    catalogueDescription: 'Modern form, lasting comfort, timeless elegance.',
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
    catalogueImage: '/images/image7.png',
    catalogueAlt: 'Curved accent furniture by Heaven Furniture Mart',
    productRoute: '/product/curved-accent',
    category: 'LIVING',
    title: 'CURVED ACCENT',
    description: 'A sculptural accent piece that brings softness and character to a room.',
    catalogueTitle: 'CURVED ACCENT',
    catalogueDescription: 'A sculptural note for layered, expressive interiors.',
  },
  {
    catalogueImage: '/images/image6.png',
    catalogueAlt: 'Blue lounge furniture by Heaven Furniture Mart',
    productRoute: '/product/blue-lounge',
    category: 'LIVING',
    title: 'BLUE LOUNGE',
    description: 'A relaxed lounge piece designed to bring color, comfort, and quiet confidence.',
    catalogueTitle: 'BLUE LOUNGE',
    catalogueDescription: 'A confident, comfortable anchor for the living space.',
  },
  {
    catalogueImage: '/images/Image2.jpg',
    catalogueAlt: 'Refined furniture detail in a warm interior by Heaven Furniture Mart',
    productRoute: '/product/refined-detail',
    category: 'COLLECTION',
    title: 'REFINED DETAIL',
    description: 'A distinctive furniture detail crafted to complete a considered interior.',
    catalogueTitle: 'REFINED DETAIL',
    catalogueDescription: 'A distinctive detail for considered interiors.',
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
    image: '/images/image6.png',
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
    image: '/images/image7.png',
    alt: 'Curved accent furniture by Heaven Furniture Mart',
    name: 'CURVED ACCENT',
    category: 'LIVING',
    description: 'A sculptural accent piece that brings softness and character to a room.',
    route: '/product/curved-accent',
  },
  {
    image: '/images/image6.png',
    alt: 'Blue lounge furniture by Heaven Furniture Mart',
    name: 'BLUE LOUNGE',
    category: 'LIVING',
    description: 'A relaxed lounge piece designed to bring color, comfort, and quiet confidence.',
    route: '/product/blue-lounge',
  },
  {
    image: '/images/image3.png',
    alt: 'Refined furniture detail by Heaven Furniture Mart',
    name: 'REFINED DETAIL',
    category: 'COLLECTION',
    description: 'A distinctive furniture detail crafted to complete a considered interior.',
    route: '/product/refined-detail',
  },
];

// Placeholder catalogue pricing is intentionally kept in the product data for easy replacement.
const catalogueProducts = [
  {
    image: '/images/main_bed.png',
    imageAlt: 'Majesty Glame bed in a refined bedroom',
    name: 'Majesty Glame',
    category: 'Bedroom',
    description: 'Refined comfort with timeless detailing for an elegant bedroom.',
    price: '৳85,000',
    route: '/product/majesty-bed',
  },
  {
    image: '/images/image3.png',
    imageAlt: 'Signature cabinet in a modern interior',
    name: 'Signature Cabinet',
    category: 'Living Room',
    description: 'Elegant storage designed for modern interiors.',
    price: '৳120,000',
    route: '/product/signature-cabinet',
  },
  {
    image: '/images/image5.jpg',
    imageAlt: 'Luxury living furniture in an elegant interior',
    name: 'Luxury Living',
    category: 'Living Room',
    description: 'Statement seating crafted for elevated comfort and lasting appeal.',
    price: '৳145,000',
    route: '/product/luxury-living',
  },
  {
    image: '/images/image4.png',
    imageAlt: 'Dining furniture in an elegant interior',
    name: 'Dining Collection',
    category: 'Dining',
    description: 'A refined dining set for memorable meals and effortless style.',
    price: '৳95,000',
    route: '/product/dining-collection',
  },
  {
    image: '/images/Image2.jpg',
    imageAlt: 'Heritage bedroom furniture in a warm interior',
    name: 'Heritage Bedroom',
    category: 'Bedroom',
    description: 'A considered bedroom composition shaped around quiet comfort.',
    price: '৳110,000',
    route: '/product/heritage-bedroom',
  },
  {
    image: '/images/fc938df5-3085-4626-9e62-7818ffbf5b5c.png',
    imageAlt: 'Curved accent furniture in a considered interior',
    name: 'Curved Accent',
    category: 'Living Room',
    description: 'A sculptural accent piece that brings softness to a room.',
    price: '৳65,000',
    route: '/product/curved-accent',
  },
  {
    image: '/images/c40014a6-b4ff-45a0-9e83-97098d5ee573.png',
    imageAlt: 'Blue lounge furniture in a refined interior',
    name: 'Blue Lounge',
    category: 'Living Room',
    description: 'A relaxed lounge piece with color, comfort, and quiet confidence.',
    price: '৳78,000',
    route: '/product/blue-lounge',
  },
  {
    image: '/images/image4.png',
    imageAlt: 'Office dining set in a warm contemporary interior',
    name: 'Office Dining Set',
    category: 'Office & Study',
    description: 'A composed table setting for focused work and shared ideas.',
    price: '৳115,000',
    route: '/product/office-dining-set',
  },
  {
    image: '/images/image3.png',
    imageAlt: 'Modern console cabinet in a contemporary interior',
    name: 'Modern Console',
    category: 'Living Room',
    description: 'A measured storage piece for an uncluttered entrance or living room.',
    price: '৳72,000',
    route: '/product/modern-console',
  },
  {
    image: '/images/Image2.jpg',
    imageAlt: 'Quiet bedroom furniture in a warm interior',
    name: 'Quiet Bedroom',
    category: 'Bedroom',
    description: 'Softly tailored furniture for a calm, considered retreat.',
    price: '৳98,000',
    route: '/product/quiet-bedroom',
  },
  {
    image: '/images/image4.png',
    imageAlt: 'Gathering table and dining chairs in an elegant room',
    name: 'Gathering Table',
    category: 'Dining',
    description: 'Generous proportions made for long meals and everyday rituals.',
    price: '৳130,000',
    route: '/product/gathering-table',
  },
  {
    image: '/images/image5.jpg',
    imageAlt: 'Refined lounge furniture in an elegant interior',
    name: 'Refined Lounge',
    category: 'Living Room',
    description: 'A generous lounge composition with a quietly expressive presence.',
    price: '৳155,000',
    route: '/product/refined-lounge',
  },
];

// Dedicated detail page for the featured premium-section sofa; kept out of catalogueProducts so the /collections grid and its "OF 12" count stay unchanged.
const luxuryLivingSofaProduct = {
  image: '/images/image4.png',
  imageAlt: 'Ornate luxury sofa set with carved wooden detailing in an elegant interior',
  name: 'Luxury Living Sofa',
  category: 'Living Room',
  description: 'Designed for refined interiors, this statement sofa combines exceptional comfort, elegant form, and lasting craftsmanship.',
  price: '৳ 10,200',
  route: '/product/luxury-living-sofa',
};

const customerStories = [
  { initials: 'AR', name: 'Ayesha Rahman', detail: 'Chattogram', quote: 'Beautiful craftsmanship and excellent attention to detail.' },
  { initials: 'TH', name: 'Tanvir Hasan', detail: 'Dhaka', quote: 'Everything felt thoughtfully designed and perfectly finished.' },
  { initials: 'NJ', name: 'Nusrat Jahan', detail: 'Chattogram', quote: 'The selection process felt calm, considered, and effortless.' },
  { initials: 'FA', name: 'Farhan Ahmed', detail: 'Dhaka', quote: 'A refined piece that feels made for the room.' },
];

const renderNavbar = () => `
  <header class="site-navbar">
    <a class="brand-lockup" href="/" aria-label="Heaven Furniture Mart home">
      <span class="brand-word">HE<img class="brand-letter-image" src="/images/A_trans.png" alt="A" />VEN</span>
      <small>FURNITURE MART</small>
    </a>

    <nav class="nav-links" aria-label="Primary navigation">
      <a href="/#home">HOME</a>
      <a href="/collections">COLLECTIONS</a>
      <a href="/bespoke">BESPOKE</a>
      <a href="/our-story">OUR STORY</a>
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
    <div class="mobile-menu-panel" aria-hidden="true">
      <nav aria-label="Mobile navigation">
        <a href="/#home">HOME</a>
        <a href="/collections">COLLECTIONS</a>
        <a href="/bespoke">BESPOKE</a>
        <a href="/our-story">OUR STORY</a>
      </nav>
    </div>
  </header>
`;

const heroMarkup = `
  <div class="page-shell">
    ${renderNavbar()}
    <main class="hero-main">
      <section class="hero-stage">
        <div class="hero-wordmark" aria-hidden="true"><span class="hero-wordmark-main">HEAVEN</span><span class="hero-wordmark-sub">furniture mart</span></div>

        <a class="hero-card" href="${heroProducts[0].productRoute}" aria-label="View ${heroProducts[0].title} product details">
          <div class="card-image-wrap">
            <img class="catalogue-image" src="${heroProducts[0].catalogueImage}" alt="${heroProducts[0].catalogueAlt}" />
            <img class="catalogue-image catalogue-image-incoming" src="${heroProducts[1].catalogueImage}" alt="" aria-hidden="true" />
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
            <img class="hero-product-image hero-product-image-incoming" src="${heroProducts[1].heroImage}" alt="" aria-hidden="true" />
          </div>
        </div>

        <div class="hero-copy">
          <p class="eyebrow">BESPOKE FURNITURE</p>
          <h2 class="hero-copy-title">Furniture made to fit your space, your taste, your life.</h2>
          <p class="supporting-copy">From custom sofas and beds to dining and office pieces, Heaven Furniture Mart creates furniture around your space, your taste, and the way you live.</p>
        </div>

        <div class="hero-controls" aria-label="Furniture control buttons">
              <button type="button" aria-label="Previous product" class="control-button control-back">&lt;</button>
              <button type="button" aria-label="Next product" class="control-button control-next">&gt;</button>
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

    <section class="category-section" aria-labelledby="category-title">
      <div class="category-grid">
        <a class="category-tile" href="/collections">
          <img src="/images/cate1.png" alt="Bedroom furniture by Heaven Furniture Mart" loading="lazy" />
          <span class="category-tile-label"><strong>Bedroom</strong><small>Designed for deeper comfort</small></span>
        </a>
        <a class="category-tile" href="/collections">
          <img src="/images/cate2.png" alt="Office and study furniture by Heaven Furniture Mart" loading="lazy" />
          <span class="category-tile-label"><strong>Office &amp; Study</strong><small>Where focus meets refinement</small></span>
        </a>
        <a class="category-tile" href="/collections">
          <img src="/images/cate3.png" alt="Living room furniture by Heaven Furniture Mart" loading="lazy" />
          <span class="category-tile-label"><strong>Living Room</strong><small>Built around the way you live</small></span>
        </a>
        <header class="category-heading">
          <h2 id="category-title">CHOOSE BY CATEGORY</h2>
          <p>Explore furniture for every part of your space</p>
        </header>
        <a class="category-tile" href="/collections">
          <img src="/images/cate4.png" alt="Dining furniture by Heaven Furniture Mart" loading="lazy" />
          <span class="category-tile-label"><strong>Dining</strong><small>Made for moments together</small></span>
        </a>
        <a class="category-tile" href="/collections">
          <img src="/images/cate5.png" alt="Bespoke crafted furniture by Heaven Furniture Mart" loading="lazy" />
          <span class="category-tile-label"><strong>Bespoke / Craft</strong><small>Made to fit your space</small></span>
        </a>
        <a class="category-tile" href="/collections">
          <img src="/images/cate6.png" alt="Kitchen furniture by Heaven Furniture Mart" loading="lazy" />
          <span class="category-tile-label"><strong>Kitchen</strong><small>Function, beautifully considered</small></span>
        </a>
      </div>
      <div class="category-lamp">
        <span class="category-lamp-cord" aria-hidden="true"></span>
        <span class="category-lamp-fitting" aria-hidden="true"></span>
        <span class="category-lamp-shade" aria-hidden="true"></span>
        <button type="button" class="category-lamp-bulb is-blinking" aria-label="Spotlight the next category"></button>
      </div>
    </section>
    <section class="story-slider-section" aria-label="Heaven Furniture story gallery">
      <div class="story-slider-track">
        <div class="story-slide">
          <img src="/images/first_slide.png" alt="Heaven Furniture Mart interior scene" />
          <div class="story-slide-copy">
            <h2 class="story-slide-title">Crafted for the way you live</h2>
            <span class="story-slide-divider" aria-hidden="true"></span>
            <p class="story-slide-sub">Comfort, character, and beautiful everyday moments</p>
          </div>
        </div>
        <div class="story-slide">
          <img src="/images/slide_2.png" alt="Heaven Furniture Mart furniture scene" />
          <div class="story-slide-copy">
            <h2 class="story-slide-title">Made with lasting character</h2>
            <span class="story-slide-divider" aria-hidden="true"></span>
            <p class="story-slide-sub">Refined materials, thoughtful details, timeless comfort</p>
          </div>
        </div>
        <div class="story-slide">
          <img src="/images/slide_3.png" alt="Heaven Furniture Mart styled room" />
          <div class="story-slide-copy story-slide-copy-shift">
            <h2 class="story-slide-title">Designed around you</h2>
            <span class="story-slide-divider" aria-hidden="true"></span>
            <p class="story-slide-sub">Bespoke furniture shaped to your space, taste, and life</p>
          </div>
        </div>
        <div class="story-slide" aria-hidden="true">
          <img src="/images/first_slide.png" alt="" />
          <div class="story-slide-copy">
            <h2 class="story-slide-title">Crafted for the way you live</h2>
            <span class="story-slide-divider" aria-hidden="true"></span>
            <p class="story-slide-sub">Comfort, character, and beautiful everyday moments</p>
          </div>
        </div>
      </div>
      <div class="story-slider-dots" aria-hidden="true">
        <span class="story-dot is-active"></span>
        <span class="story-dot"></span>
        <span class="story-dot"></span>
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
            <a class="premium-sofa-link" href="/product/luxury-living-sofa" aria-label="View Luxury Living Sofa details">
              <img src="/images/image4_trans.png" alt="Luxury sofa by Heaven Furniture Mart" loading="lazy" />
              <span class="premium-sofa-price">${luxuryLivingSofaProduct.price}</span>
            </a>
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

    <section class="editorial-discovery-section" aria-labelledby="editorial-discovery-title">
      <div class="editorial-discovery-grid">
        <div class="editorial-discovery-image editorial-discovery-image-primary">
          <img src="/images/image7.png" alt="Refined lounge table setting by Heaven Furniture Mart" loading="lazy" />
        </div>
        <div class="editorial-discovery-copy">
          <h1 id="editorial-discovery-title">ELEVATE YOUR SPACE</h1>
          <p>Discover furniture that brings refined character to every corner of your home. From timeless silhouettes to distinctive details, find pieces designed around the way you live.</p>
          <a href="/collections">EXPLORE COLLECTION</a>
        </div>
        <div class="editorial-discovery-image editorial-discovery-image-top">
          <img src="/images/image3.png" alt="Signature cabinet in a refined interior" loading="lazy" />
        </div>
        <div class="editorial-discovery-image editorial-discovery-image-bottom">
          <img src="/images/image4.png" alt="Luxury living room sofa by Heaven Furniture Mart" loading="lazy" />
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
          <p class="footer-signature">QUALITY. CRAFT. CHARACTER.</p>
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
            <div class="footer-contact-group">
              <h2>CONTACT</h2>
              <a href="https://wa.me/8801960481983" target="_blank" rel="noopener noreferrer" aria-label="Chat with Heaven Furniture Mart on WhatsApp" title="Chat with Heaven Furniture Mart on WhatsApp">+880 1960-481983</a>
              <a href="mailto:heavenfurnituremart@gmail.com">heavenfurnituremart@gmail.com</a>
            </div>
            <div class="footer-visit-group">
              <p class="footer-visit-label">VISIT US</p>
              <address>Agrabad Access Road,<br />Chattogram, Bangladesh</address>
            </div>
          </div>
          <div class="footer-column">
            <h2>FOLLOW</h2>
            <a href="https://www.facebook.com/HeavenFurnitureMart/" target="_blank" rel="noopener noreferrer" aria-label="Heaven Furniture Mart on Facebook">FACEBOOK</a>
            <a href="https://www.instagram.com/heaven_furniture_ltd" target="_blank" rel="noopener noreferrer" aria-label="Heaven Furniture Mart on Instagram">INSTAGRAM</a>
            <a href="https://www.youtube.com/@HeavenFurnitureMart" target="_blank" rel="noopener noreferrer" aria-label="Heaven Furniture Mart on YouTube">YOUTUBE</a>
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

const collectionsPageMarkup = `
  <div class="collections-page">
    ${renderNavbar()}
    <main class="catalogue-main">
      <header class="catalogue-heading">
        <p class="catalogue-eyebrow">HEAVEN FURNITURE MART</p>
        <h1>OUR COLLECTIONS</h1>
        <p class="catalogue-intro">Explore thoughtfully crafted furniture for every space.</p>
      </header>

      <section class="catalogue-browser" aria-labelledby="catalogue-title">
        <div class="catalogue-toolbar">
          <p class="catalogue-count" id="catalogue-title">SHOWING <span>12</span> OF 12 PRODUCTS</p>
          <div class="catalogue-controls">
            <label class="catalogue-control">
              <span>SORT BY</span>
              <select data-catalogue-sort aria-label="Sort products">
                <option value="featured">Featured</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="price-asc">Price Low to High</option>
                <option value="price-desc">Price High to Low</option>
              </select>
            </label>
            <label class="catalogue-control">
              <span>CATEGORY</span>
              <select data-catalogue-category aria-label="Filter products by category">
                <option value="All">All</option>
                <option value="Living Room">Living Room</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Dining">Dining</option>
                <option value="Office & Study">Office &amp; Study</option>
                <option value="Bespoke">Bespoke</option>
              </select>
            </label>
            <label class="catalogue-control catalogue-search-control">
              <span>SEARCH</span>
              <span class="catalogue-search-field">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m16 16 4.2 4.2"></path></svg>
                <input type="search" data-catalogue-search placeholder="Search furniture" aria-label="Search furniture" />
              </span>
            </label>
            <label class="catalogue-control catalogue-items-control">
              <span>SHOW</span>
              <select aria-label="Items per page" disabled>
                <option>12 Items per Page</option>
              </select>
            </label>
            <div class="catalogue-view-toggle" aria-label="Product view">
              <button class="catalogue-view-button is-active" type="button" data-catalogue-view="grid" aria-label="Grid view" aria-pressed="true">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6"></rect><rect x="14" y="4" width="6" height="6"></rect><rect x="4" y="14" width="6" height="6"></rect><rect x="14" y="14" width="6" height="6"></rect></svg>
              </button>
              <button class="catalogue-view-button" type="button" data-catalogue-view="list" aria-label="List view" aria-pressed="false">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M5 12h14M5 17h14"></path></svg>
              </button>
            </div>
          </div>
        </div>
        <div class="catalogue-grid" data-catalogue-grid>
          ${catalogueProducts.map((product) => `
            <a class="catalogue-card" href="${product.route}" data-name="${product.name.toLowerCase()}" data-category="${product.category}" data-price="${product.price.replace(/[^0-9]/g, '')}">
              <div class="catalogue-card-image">
                <img src="${product.image}" alt="${product.imageAlt}" loading="lazy" />
              </div>
              <div class="catalogue-card-copy">
                <p class="catalogue-card-category">${product.category}</p>
                <div class="catalogue-card-title-row">
                  <h2>${product.name}</h2>
                  <span>${product.price}</span>
                </div>
                <p class="catalogue-card-description">${product.description}</p>
              </div>
            </a>
          `).join('')}
        </div>
        <p class="catalogue-empty" data-catalogue-empty hidden>No pieces matched your search.</p>
      </section>
    </main>
  </div>
`;

const ourStoryPageMarkup = `
  <div class="our-story-page">
    ${renderNavbar()}
    <main>
      <header class="story-hero story-reveal">
        <p class="story-eyebrow">HEAVEN FURNITURE MART</p>
        <h1>OUR STORY</h1>
        <p class="story-tagline">QUALITY. CRAFT. CHARACTER.</p>
        <p class="story-lede">Founded in 2020, Heaven Furniture Mart creates thoughtfully designed furniture for living rooms, bedrooms, dining spaces, offices and the individual spaces of our customers.</p>
      </header>

      <section class="story-origin story-section story-reveal">
        <div class="story-origin-image story-image-frame">
          <img src="/images/image5.jpg" alt="Luxury living furniture in an elegant interior" loading="lazy" />
        </div>
        <div class="story-origin-copy">
          <p class="story-eyebrow">THE BEGINNING</p>
          <h2>BUILT AROUND THE WAY YOU LIVE.</h2>
          <p>Heaven Furniture Mart believes furniture should be more than functional. It should be a reflection of lifestyle, taste and comfort, shaped with care for the way a home is truly lived in.</p>
          <p>Founded in 2020 by Managing Director Abul Kalam Bhuiyan, Heaven brings refined design, practical comfort and considered craftsmanship together under one roof.</p>
        </div>
      </section>

      <section class="story-approach story-section story-reveal" aria-labelledby="approach-title">
        <div class="story-section-heading">
          <p class="story-eyebrow">THE HEAVEN APPROACH</p>
          <h2 id="approach-title">QUALITY. CRAFT. CHARACTER.</h2>
        </div>
        <div class="story-principles">
          <article><span>01</span><h3>DESIGNED</h3><p>Thoughtfully designed furniture for modern spaces.</p></article>
          <article><span>02</span><h3>CRAFTED</h3><p>Premium materials and in-house craftsmanship.</p></article>
          <article><span>03</span><h3>CUSTOMIZED</h3><p>Furniture created around your space, size, taste and lifestyle.</p></article>
        </div>
      </section>

      <section class="story-create story-section story-reveal" aria-labelledby="create-title">
        <div class="story-section-heading">
          <p class="story-eyebrow">WHAT WE CREATE</p>
          <h2 id="create-title">FURNITURE FOR EVERY ROOM.</h2>
        </div>
        <div class="story-category-grid">
          <article><span>LIVING ROOM</span><p>Sofas, coffee tables, TV units and consoles.</p></article>
          <article><span>BEDROOM</span><p>Beds, wardrobes, dressing tables and bedside tables.</p></article>
          <article><span>DINING</span><p>Dining tables, chairs and cabinets.</p></article>
          <article><span>OFFICE &amp; STUDY</span><p>Executive tables, bookshelves and workstations.</p></article>
          <article><span>BESPOKE</span><p>Furniture built specifically around your space and requirements.</p></article>
        </div>
      </section>

      <section class="story-bespoke story-section story-reveal">
        <div class="story-bespoke-image story-image-frame">
          <img src="/images/main_bed.png" alt="Refined bedroom furniture by Heaven Furniture Mart" loading="lazy" />
        </div>
        <div class="story-bespoke-copy">
          <p class="story-eyebrow">BESPOKE PHILOSOPHY</p>
          <h2>MADE FOR YOUR SPACE.</h2>
          <p>Furniture can be created around your space, your taste and the way you live. Our bespoke service gives each room the attention it deserves, while our considered collections remain ready for everyday inspiration.</p>
        </div>
      </section>

      <section class="story-trust story-section story-reveal" aria-labelledby="trust-title">
        <div class="story-section-heading">
          <p class="story-eyebrow">THE EXPERIENCE</p>
          <h2 id="trust-title">A CONSIDERED WAY TO FURNISH.</h2>
        </div>
        <div class="story-trust-list">
          <p><span>01</span>FREE DESIGN CONSULTATION</p>
          <p><span>02</span>PREMIUM MATERIALS</p>
          <p><span>03</span>IN-HOUSE CRAFTSMANSHIP</p>
          <p><span>04</span>DELIVERY &amp; INSTALLATION</p>
          <p><span>05</span>EASY PAYMENT OPTIONS</p>
          <p><span>06</span>AGRABAD SHOWROOM</p>
        </div>
        <p class="story-trust-note">Trusted by hundreds of happy homeowners, with a large physical showroom at Agrabad where furniture can be experienced in person.</p>
      </section>

      <section class="story-director story-section story-reveal">
        <div class="story-quote-mark">“</div>
        <blockquote>At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.</blockquote>
        <div class="story-attribution"><strong>Abul Kalam Bhuiyan</strong><span>Managing Director</span></div>
      </section>

      <section class="story-journey story-section story-reveal" aria-labelledby="journey-title">
        <div class="story-section-heading"><p class="story-eyebrow">OUR JOURNEY</p><h2 id="journey-title">A GROWING STORY, ROOTED IN CARE.</h2></div>
        <div class="story-milestones">
          <article><strong>2020</strong><span>Founded</span></article>
          <article><strong>2021</strong><span>Agrabad showroom established</span></article>
          <article><strong>2024–2025</strong><span>International Furniture Fair, Chattogram</span></article>
          <article><strong>2025</strong><span>Chamber of Commerce</span></article>
          <article><strong>2026</strong><span>Nationwide BFIOA recognition</span></article>
        </div>
      </section>

      <section class="story-showroom story-section story-reveal">
        <div class="story-showroom-copy"><p class="story-eyebrow">VISIT HEAVEN</p><h2>EXPERIENCE THE FURNITURE IN PERSON.</h2><p>Visit our showroom at Agrabad Access Road, Chattogram, Bangladesh, and experience the materials, proportions and comfort of Heaven furniture for yourself.</p></div>
        <div class="story-showroom-image story-image-frame"><img src="/images/image3.png" alt="Luxury cabinet in a furnished interior" loading="lazy" /></div>
      </section>

      <section class="story-closing story-reveal">
        <p class="story-eyebrow">HEAVEN FURNITURE MART</p>
        <h2>DESIGNED.<br />CRAFTED.<br />CUSTOMIZED.</h2>
        <p>Furniture that brings lasting elegance, comfort and character into the home.</p>
        <a href="/collections" class="story-closing-link">EXPLORE COLLECTIONS <span>→</span></a>
      </section>
    </main>

    <footer class="site-footer" aria-labelledby="footer-brand-title">
      <div class="footer-art" aria-hidden="true">H</div>
      <div class="footer-inner">
        <div class="footer-brand"><p class="footer-signature">QUALITY. CRAFT. CHARACTER.</p><h1 id="footer-brand-title">HEAVEN<span class="footer-mark">.</span></h1><p class="footer-subbrand">FURNITURE MART</p></div>
        <div class="footer-grid">
          <div class="footer-column"><h2>EXPLORE</h2><a href="/#home">HOME</a><a href="/#collections">COLLECTIONS</a><a href="/#bespoke">BESPOKE</a><a href="/#story">OUR STORY</a><a href="mailto:heavenfurnituremart@gmail.com">CONTACT</a></div>
          <div class="footer-column"><h2>COLLECTIONS</h2><a href="/#collections">LIVING</a><a href="/#collections">BEDROOM</a><a href="/#collections">DINING</a><a href="/#collections">OFFICE &amp; STUDY</a></div>
          <div class="footer-column footer-contact-column"><div class="footer-contact-group"><h2>CONTACT</h2><a href="https://wa.me/8801960481983" target="_blank" rel="noopener noreferrer" aria-label="Chat with Heaven Furniture Mart on WhatsApp" title="Chat with Heaven Furniture Mart on WhatsApp">+880 1960-481983</a><a href="mailto:heavenfurnituremart@gmail.com">heavenfurnituremart@gmail.com</a></div><div class="footer-visit-group"><p class="footer-visit-label">VISIT US</p><address>Agrabad Access Road,<br />Chattogram, Bangladesh</address></div></div>
          <div class="footer-column"><h2>FOLLOW</h2><a href="https://www.facebook.com/HeavenFurnitureMart/" target="_blank" rel="noopener noreferrer" aria-label="Heaven Furniture Mart on Facebook">FACEBOOK</a><a href="https://www.instagram.com/heaven_furniture_ltd" target="_blank" rel="noopener noreferrer" aria-label="Heaven Furniture Mart on Instagram">INSTAGRAM</a><a href="https://www.youtube.com/@HeavenFurnitureMart" target="_blank" rel="noopener noreferrer" aria-label="Heaven Furniture Mart on YouTube">YOUTUBE</a></div>
        </div>
        <div class="footer-cta"><p>Ready to shape your space?</p></div>
        <div class="footer-bottom"><p>© 2026 HEAVEN FURNITURE MART</p><p>AGRABAD <span aria-hidden="true">·</span> CHATTOGRAM <span aria-hidden="true">·</span> BANGLADESH</p></div>
      </div>
    </footer>
  </div>
`;

const bespokePageMarkup = `
  <div class="bespoke-page">
    ${renderNavbar()}
    <main>
      <section class="bespoke-hero">
        <div class="bespoke-hero-copy"><p class="story-eyebrow">HEAVEN FURNITURE MART</p><h1>MADE FOR YOUR SPACE.</h1><p>Furniture created around your space, your size, your taste and the way you live.</p><a href="/collections" class="story-closing-link">EXPLORE COLLECTIONS <span>→</span></a></div>
        <div class="bespoke-hero-image"><img src="/images/image4.png" alt="Dining furniture in an elegant interior" /></div>
      </section>
      <section class="bespoke-process"><p class="story-eyebrow">THE BESPOKE PROCESS</p><h2>A MORE PERSONAL WAY TO FURNISH.</h2><div class="bespoke-process-grid"><article><span>01</span><h3>LISTEN</h3><p>We begin with your room, your rhythm and the details that make the space yours.</p></article><article><span>02</span><h3>SHAPE</h3><p>Thoughtful proportions and materials are considered around your requirements.</p></article><article><span>03</span><h3>CRAFT</h3><p>In-house craftsmanship brings the final piece together with care.</p></article></div></section>
      <section class="bespoke-callout"><p class="story-eyebrow">QUALITY. CRAFT. CHARACTER.</p><h2>FURNITURE THAT FITS THE WAY YOU LIVE.</h2><p>Explore our collections for ready inspiration, then visit the Agrabad showroom to experience Heaven in person.</p><a href="/our-story" class="story-closing-link">OUR STORY <span>→</span></a></section>
    </main>
  </div>
`;

const productPageMarkup = (product) => `
  <div class="product-page">
    ${renderNavbar()}
    <main class="product-main">
      <a class="product-back-link" href="/collections">← BACK TO COLLECTIONS</a>
      <section class="product-detail" aria-labelledby="product-title">
        <div class="product-visual">
          <img src="${product.image}" alt="${product.imageAlt}" />
        </div>
        <div class="product-information">
          <p class="product-category">${product.category}</p>
          <h1 id="product-title">${product.name}</h1>
          <p class="product-description">${product.description}</p>
          <p class="product-price">${product.price}</p>
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

const productPage = [...catalogueProducts, luxuryLivingSofaProduct].find((product) => product.route === window.location.pathname);
const isProductPage = Boolean(productPage);
const isCollectionsPage = window.location.pathname === '/collections';
const isOurStoryPage = window.location.pathname === '/our-story';
const isBespokePage = window.location.pathname === '/bespoke';
document.querySelector('#app').innerHTML = isProductPage ? productPageMarkup(productPage) : isCollectionsPage ? collectionsPageMarkup : isOurStoryPage ? ourStoryPageMarkup : isBespokePage ? bespokePageMarkup : heroMarkup;

const mobileMenuTrigger = document.querySelector('.mobile-menu-trigger');
const mobileMenuPanel = document.querySelector('.mobile-menu-panel');
if (mobileMenuTrigger && mobileMenuPanel) {
  mobileMenuTrigger.addEventListener('click', () => {
    const isOpen = mobileMenuPanel.classList.toggle('is-open');
    mobileMenuTrigger.setAttribute('aria-expanded', String(isOpen));
    mobileMenuTrigger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    mobileMenuPanel.setAttribute('aria-hidden', String(!isOpen));
  });
  mobileMenuPanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenuPanel.classList.remove('is-open');
      mobileMenuTrigger.setAttribute('aria-expanded', 'false');
      mobileMenuPanel.setAttribute('aria-hidden', 'true');
    });
  });
}

if (isProductPage) {
  gsap.from('.product-page', { autoAlpha: 0, y: 10, duration: 0.55, ease: 'power2.out' });
} else if (isCollectionsPage) {
  gsap.from('.collections-page', { autoAlpha: 0, y: 10, duration: 0.55, ease: 'power2.out' });
  const catalogueGrid = document.querySelector('[data-catalogue-grid]');
  const catalogueSearch = document.querySelector('[data-catalogue-search]');
  const catalogueSort = document.querySelector('[data-catalogue-sort]');
  const catalogueCategory = document.querySelector('[data-catalogue-category]');
  const catalogueCount = document.querySelector('.catalogue-count');
  const catalogueEmpty = document.querySelector('[data-catalogue-empty]');
  const catalogueCards = [...document.querySelectorAll('.catalogue-card')];
  const catalogueViewButtons = [...document.querySelectorAll('[data-catalogue-view]')];

  const renderCatalogue = () => {
    const query = catalogueSearch.value.trim().toLowerCase();
    const category = catalogueCategory.value;
    const sort = catalogueSort.value;
    const filteredProducts = catalogueProducts
      .filter((product) => {
        const searchableText = `${product.name} ${product.category}`.toLowerCase();
        return (!query || searchableText.includes(query)) && (category === 'All' || product.category === category);
      })
      .sort((firstProduct, secondProduct) => {
        if (sort === 'price-asc') return Number(firstProduct.price.replace(/[^0-9]/g, '')) - Number(secondProduct.price.replace(/[^0-9]/g, ''));
        if (sort === 'price-desc') return Number(secondProduct.price.replace(/[^0-9]/g, '')) - Number(firstProduct.price.replace(/[^0-9]/g, ''));
        if (sort === 'name-asc') return firstProduct.name.localeCompare(secondProduct.name);
        if (sort === 'name-desc') return secondProduct.name.localeCompare(firstProduct.name);
        return catalogueProducts.indexOf(firstProduct) - catalogueProducts.indexOf(secondProduct);
      });

    filteredProducts.forEach((product) => {
      const card = catalogueCards.find((catalogueCard) => catalogueCard.href.endsWith(product.route));
      if (card) catalogueGrid.append(card);
    });
    catalogueCount.innerHTML = `SHOWING <span>${filteredProducts.length}</span> OF 12 PRODUCTS`;
    catalogueEmpty.hidden = filteredProducts.length > 0;
  };

  [catalogueSearch, catalogueSort, catalogueCategory].forEach((control) => {
    control.addEventListener('input', renderCatalogue);
    control.addEventListener('change', renderCatalogue);
  });

  catalogueViewButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isList = button.dataset.catalogueView === 'list';
      catalogueGrid.classList.toggle('is-list', isList);
      catalogueViewButtons.forEach((viewButton) => {
        const isActive = viewButton === button;
        viewButton.classList.toggle('is-active', isActive);
        viewButton.setAttribute('aria-pressed', String(isActive));
      });
    });
  });
} else if (isOurStoryPage) {
  gsap.from('.our-story-page', { autoAlpha: 0, y: 10, duration: 0.55, ease: 'power2.out' });
  const storyReveals = [...document.querySelectorAll('.story-reveal')];

  storyReveals.forEach((section) => {
    gsap.set(section, { autoAlpha: 0, y: 24 });
  });

  const revealStorySection = (section) => {
    gsap.to(section, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' });
  };

  const storyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealStorySection(entry.target);
        storyObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  storyReveals.forEach((section) => storyObserver.observe(section));
} else if (isBespokePage) {
  gsap.from('.bespoke-page', { autoAlpha: 0, y: 10, duration: 0.55, ease: 'power2.out' });
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
const heroLayerPairs = {
  hero: [document.querySelector('.hero-bed-wrap .hero-product-image'), document.querySelector('.hero-bed-wrap .hero-product-image-incoming')],
  card: [document.querySelector('.card-image-wrap .catalogue-image'), document.querySelector('.card-image-wrap .catalogue-image-incoming')],
};
let heroActiveLayer = 0;
gsap.set([heroLayerPairs.hero[1], heroLayerPairs.card[1]], { autoAlpha: 0 });

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
  const outgoingHero = heroLayerPairs.hero[heroActiveLayer];
  const outgoingCard = heroLayerPairs.card[heroActiveLayer];
  const incomingHero = heroLayerPairs.hero[1 - heroActiveLayer];
  const incomingCard = heroLayerPairs.card[1 - heroActiveLayer];
  const exitX = direction > 0 ? -24 : 24;
  const enterX = direction > 0 ? 24 : -24;

  incomingHero.src = nextProduct.heroImage;
  incomingCard.src = nextProduct.catalogueImage;
  bed.dataset.product = String(activeProductIndex);
  card.href = nextProduct.productRoute;
  card.setAttribute('aria-label', `View ${nextProduct.title} product details`);
  catalogueCaption.querySelector('h2').textContent = nextProduct.catalogueTitle;
  catalogueCaption.querySelector('p').textContent = nextProduct.catalogueDescription;

  gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    onComplete: () => {
      gsap.set([outgoingHero, outgoingCard], { autoAlpha: 0, x: 0 });
      incomingHero.alt = nextProduct.heroAlt;
      incomingCard.alt = nextProduct.catalogueAlt;
      heroActiveLayer = 1 - heroActiveLayer;
      productTransitioning = false;
    },
  })
    .to([outgoingHero, outgoingCard], { autoAlpha: 0, x: exitX, duration: 0.42 }, 0)
    .fromTo([incomingHero, incomingCard], { autoAlpha: 0, x: enterX }, { autoAlpha: 1, x: 0, duration: 0.7 }, 0.08);
};

const heroAutoplayMs = 4000;
let heroAutoplayTimer = null;

const startHeroAutoplay = () => {
  if (heroAutoplayTimer !== null) return;
  heroAutoplayTimer = setInterval(() => switchProduct(1), heroAutoplayMs);
};

const restartHeroAutoplay = () => {
  clearInterval(heroAutoplayTimer);
  heroAutoplayTimer = null;
  startHeroAutoplay();
};

previousProductButton.addEventListener('click', () => {
  switchProduct(-1);
  restartHeroAutoplay();
});
nextProductButton.addEventListener('click', () => {
  switchProduct(1);
  restartHeroAutoplay();
});

startHeroAutoplay();

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

  const storySliderSection = document.querySelector('.story-slider-section');
  const storySliderTrack = document.querySelector('.story-slider-track');
  const storyDots = document.querySelectorAll('.story-dot');
  if (storySliderSection && storySliderTrack && storyDots.length) {
    const storySlideCount = 3;
    const storyIntervalMs = 4500;
    let storyIndex = 0;
    let storyTimer = null;
    let storySliderRevealed = false;

    const advanceStorySlide = () => {
      const isWrappingToStart = storyIndex + 1 === storySlideCount;
      gsap.to(storySliderTrack, {
        xPercent: -(storyIndex + 1) * 100,
        duration: 0.9,
        ease: 'power2.inOut',
        onComplete: () => {
          if (isWrappingToStart) {
            gsap.set(storySliderTrack, { xPercent: 0 });
          }
        },
      });
      storyIndex = (storyIndex + 1) % storySlideCount;
      storyDots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === storyIndex));
    };

    const startStoryInterval = () => {
      if (storyTimer) return;
      storyTimer = setInterval(advanceStorySlide, storyIntervalMs);
    };

    const stopStoryInterval = () => {
      if (!storyTimer) return;
      clearInterval(storyTimer);
      storyTimer = null;
    };

    gsap.set(storySliderSection, { autoAlpha: 0 });

    const storySliderObserver = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) {
        stopStoryInterval();
        return;
      }
      if (!storySliderRevealed) {
        storySliderRevealed = true;
        gsap.to(storySliderSection, { autoAlpha: 1, duration: 0.45, ease: 'power2.out' });
      }
      startStoryInterval();
    }, { threshold: 0.2 });

    storySliderObserver.observe(storySliderSection);
  }
  const categorySection = document.querySelector('.category-section');
  const categoryTiles = document.querySelectorAll('.category-tile');
  const categoryHeading = categorySection ? categorySection.querySelector('.category-heading') : null;
  if (categorySection && categoryTiles.length) {
    gsap.set(categoryTiles, { autoAlpha: 0, y: 30 });
    if (categoryHeading) gsap.set(categoryHeading, { autoAlpha: 0, y: 18 });
    const categoryObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      gsap.to(categoryTiles, { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out' });
      if (categoryHeading) gsap.to(categoryHeading, { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
      observer.disconnect();
    }, { threshold: 0.12 });
    categoryObserver.observe(categorySection);
  }

  const categoryLampBulb = document.querySelector('.category-lamp-bulb');
  if (categoryLampBulb && categoryTiles.length) {
    const categoryLampIdle = 'is-blinking';
    let categoryLampStep = -1;
    const setActiveCategory = (index) => {
      categoryTiles.forEach((tile, tileIndex) => tile.classList.toggle('is-lamp-active', tileIndex === index));
    };
    categoryLampBulb.addEventListener('click', () => {
      categoryLampStep += 1;
      if (categoryLampStep >= categoryTiles.length) {
        setActiveCategory(-1);
        categoryLampStep = -1;
        categoryLampBulb.classList.add(categoryLampIdle);
        return;
      }
      categoryLampBulb.classList.remove(categoryLampIdle);
      setActiveCategory(categoryLampStep);
    });
  }

  const categoryLamp = document.querySelector(".category-lamp");
  const categoryHeadingText = categorySection ? categorySection.querySelector(".category-heading h2") : null;
  if (categoryLamp && categorySection && categoryHeadingText) {
    const positionCategoryLamp = () => {
      const sectionRect = categorySection.getBoundingClientRect();
      const headingRange = document.createRange();
      headingRange.selectNodeContents(categoryHeadingText);
      const headingRect = headingRange.getBoundingClientRect();
      categoryLamp.style.left = headingRect.right - sectionRect.left + 7 + "px";
      categoryLamp.style.right = "auto";
    };
    positionCategoryLamp();
    window.addEventListener("resize", positionCategoryLamp);
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
      const cardWidth = firstCard.offsetWidth;
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

  const editorialDiscoverySection = document.querySelector('.editorial-discovery-section');
  const editorialDiscoveryImages = document.querySelectorAll('.editorial-discovery-image');
  const editorialDiscoveryCopy = document.querySelector('.editorial-discovery-copy');
  if (editorialDiscoverySection && editorialDiscoveryImages.length && editorialDiscoveryCopy) {
    gsap.set(editorialDiscoverySection, { autoAlpha: 0 });
    gsap.set(editorialDiscoveryImages, {
      autoAlpha: 0,
      y: 28,
      clipPath: 'inset(0 0 18% 0)',
    });
    gsap.set(editorialDiscoveryCopy, { autoAlpha: 0, y: 22 });

    const editorialDiscoveryObserver = new IntersectionObserver((entries, observer) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      gsap.to(editorialDiscoverySection, { autoAlpha: 1, duration: 0.45, ease: 'power2.out' });
      gsap.to(editorialDiscoveryImages, {
        autoAlpha: 1,
        y: 0,
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.05,
        stagger: 0.14,
        ease: 'power3.out',
      });
      gsap.to(editorialDiscoveryCopy, { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.24, ease: 'power3.out' });
      observer.disconnect();
    }, { threshold: 0.16 });

    editorialDiscoveryObserver.observe(editorialDiscoverySection);
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
