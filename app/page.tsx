import Image from "next/image";

const highlights = [
  { number: "01", title: "A day at sea", copy: "Discover the wonders of nature in clear blue waters.", image: "/underwater.jpg", alt: "Cagayan de Oro's blue waters, filled with tropical fish and coral" },
  { number: "02", title: "A day to unwind", copy: "Enjoy a relaxing day of golf, nature and unhurried moments.", image: "/golf-course.jpg", alt: "A Cagayan de Oro golf course surrounded by mountains and forest" },
  { number: "03", title: "A day of adventure", copy: "From whitewater rafting to thrilling ziplines, discover a day of exhilarating new experiences.", image: "/zipline.webp", alt: "An exhilarating zipline in Dahilayan" },
];

type Destination = {
  title: string;
  image: string;
  alt: string;
  copy: string;
  tags: string[];
  credit?: string;
  href?: string;
  imageFit?: "cover" | "contain";
  gallery?: Array<{ src: string; alt: string }>;
};

const destinationGroups: Array<{
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  destinations: Destination[];
}> = [
  {
    number: "02",
    eyebrow: "RIVER & THRILL",
    title: "River & adventure",
    intro: "From rushing river rapids to thrilling adventures across cool highlands, discover the experiences that define Cagayan de Oro.",
    destinations: [
      { title: "Whitewater rafting", image: "/whitewater-rafting-pdf.jpg", alt: "Whitewater rafting on the Cagayan River", copy: "Experience tropical scenery and exciting rapids on the Cagayan River, one of the Philippines' best-known rafting destinations.", tags: ["Rafting", "Team activity", "Half day"] },
      { title: "Dahilayan Adventure Park", image: "/dahilayan-park.jpg", alt: "Ziplining at Dahilayan Adventure Park", copy: "Enjoy ziplines and mountain activities in the refreshing highlands, 1,430 metres above sea level, at this renowned Philippine adventure destination.", tags: ["Zipline", "Highlands", "Family travel"] },
    ],
  },
  {
    number: "03",
    eyebrow: "HIGHLAND & HEALING",
    title: "Highlands & relaxation",
    intro: "Slow down amid green ridgelines, cool highland air and peaceful ranch landscapes, and unwind at nature's pace.",
    destinations: [
      { title: "Communal Ranch", image: "/communal-ranch.jpg", alt: "Rolling green hills at Communal Ranch", copy: "A ranch of green hills and small lakes reminiscent of New Zealand. Ideal for horseback riding, drone photography and relaxing in nature, around two hours by car from the city.", tags: ["Horseback riding", "Photo spot", "Nature experience"] },
      { title: "Claveria", image: "/claveria-highlands.png", alt: "A Claveria highland viewpoint overlooking layers of mountains and valleys", copy: "Pristine highlands at 600–950 metres above sea level. Cool weather, flower gardens and views of the Balatucan mountain range make this a peaceful retreat, around two hours by car from the city.", tags: ["Highlands", "Trekking", "Ecotourism"] },
    ],
  },
  {
    number: "04",
    eyebrow: "CULTURE & LANDMARK",
    title: "Culture & landmarks",
    intro: "Discover local faith and stories alongside city panoramas and night views, adding depth and memorable moments to every itinerary.",
    destinations: [
      { title: "Divine Mercy Shrine", image: "/divine-mercy.jpg", alt: "Divine Mercy Shrine on a hilltop", copy: "A celebrated pilgrimage site featuring a 15-metre statue of Jesus and sweeping sea views. Discover a peaceful atmosphere and distinctive architecture.", tags: ["Pilgrimage", "Landmark", "Scenic views"] },
      { title: "Amaya View", image: "/amaya-view.png", alt: "Amaya View overlooking green forest and the city", copy: "A scenic destination with panoramic views of Cagayan de Oro and its natural surroundings, offering open vistas and plenty of photo opportunities.", tags: ["Panorama", "Viewpoint", "Photo spot"] },
      { title: "High Ridge", image: "/high-ridge.png", alt: "High Ridge restaurant overlooking Cagayan de Oro", copy: "Enjoy dinner with city panoramas, sunset colours and sparkling night views at this hilltop restaurant—a memorable way to end your day.", tags: ["Sunset", "Night views", "Restaurant"] },
      { title: "Shopping & local flavours", image: "/local-food-crab.png", alt: "Crab and a variety of Filipino dishes", copy: "Explore city malls and local restaurants, sampling fresh crab, Filipino lechon and smoky grilled inasal chicken for a colourful taste of the region.", tags: ["Shopping", "Local cuisine", "Food tour"], gallery: [
        { src: "/local-food-crab.png", alt: "A generous spread of local dishes, including crab and lechon" },
        { src: "/inasal-chicken.png", alt: "Charcoal-grilled Filipino inasal chicken" },
        { src: "/local-food-selection.png", alt: "A selection of Filipino dishes" },
      ] },
    ],
  },
  {
    number: "05",
    eyebrow: "PREMIUM GOLF",
    title: "Premium golf",
    intro: "Combine highland scenery and rich golfing traditions at two courses that complete a premium leisure itinerary.",
    destinations: [
      { title: "Pueblo Golf Course", image: "/pueblo-golf.jpg", alt: "Pueblo Golf Course in the mountain highlands", copy: "An 18-hole, par-72 course designed by Robert Trent Jones Jr. Broad fairways and natural ravines offer a dynamic round of golf.", tags: ["18 holes", "Par 72", "Championship course"] },
      { title: "Del Monte Golf Course", image: "/del-monte-golf.jpg", alt: "The nearly century-old Del Monte Golf Course surrounded by mountains and forest", copy: "One of the Philippines' heritage golf courses, with nearly a century of history. Opened in 1928, this 18-hole, par-72 course offers fresh highland air and a classic golfing experience.", tags: ["Nearly a century of golf", "18 holes · Par 72", "Heritage"] },
    ],
  },
];

const extensionDestinations: Array<{ eyebrow: string; title: string; intro: string; destinations: Destination[] }> = [
  {
    eyebrow: "WATERFALL",
    title: "Waterfalls",
    intro: "Discover Northern Mindanao's hidden natural attractions, shaped by lush gorges and refreshing spring waters.",
    destinations: [
      { title: "Tinago Falls", image: "/extension-tinago-falls.jpg", alt: "Tinago Falls surrounded by a lush gorge and emerald waters", copy: "One of Iligan's signature waterfalls, cascading into a deep gorge. Descend the steps to a turquoise natural pool and enjoy a bamboo raft experience. Approximately two hours by car from Cagayan de Oro.", tags: ["Suggested extension", "Waterfalls", "Iligan"], credit: "PHOTO · DEPARTMENT OF TOURISM PHILIPPINES" },
      { title: "Sinulom Falls & Bolao Cold Spring", image: "/extension-sinulom-falls.jpg", alt: "Sinulom Falls and Bolao Cold Spring along green cliffs", copy: "Multiple streams cascade down forested cliffs at this natural retreat. Pair a visit with nearby Bolao Cold Spring for a refreshing break in nature, just 30 minutes from the city.", tags: ["Suggested extension", "Waterfalls & cold springs", "Ecotourism"], credit: "PHOTO · SINULOM FALLS" },
    ] satisfies Destination[],
  },
  {
    eyebrow: "BEACH & ISLAND",
    title: "Beaches",
    intro: "Extend your journey with marine adventures and leisurely island escapes in clear blue waters.",
    destinations: [
      { title: "Duka Bay", image: "/extension-duka-bay.jpg", alt: "Calm, clear waters and shady trees at Duka Bay", copy: "A peaceful coastal retreat in Medina, Misamis Oriental. Spend a leisurely day snorkelling and diving in clear waters, approximately two hours and 30 minutes by car from Cagayan de Oro.", tags: ["Suggested extension", "Beaches", "Snorkelling"], credit: "PHOTO · DUKA BAY, MEDINA" },
      { title: "Camiguin Island", image: "/extension-camiguin.png", alt: "Blue seas and volcanic landscapes on Camiguin Island", copy: "Discover volcanoes, hot springs, waterfalls and a white sandbar on the 'Island Born of Fire'. Ideal for a one- or two-night extension featuring White Island and marine activities. Allow two hours by car to the port from Cagayan de Oro, followed by a two-hour boat journey.", tags: ["Suggested extension", "Island travel", "White Island"], credit: "PHOTO · PHILIPPINES.TRAVEL" },
    ] satisfies Destination[],
  },
];

extensionDestinations.push({
  eyebrow: "ADVENTURE & EXPERIENCE",
  title: "Activities",
  intro: "Add more fun to your journey with adventures in the sky, a shooting range experience and a waterpark visit.",
  destinations: [
    { title: "Seven Seas Waterpark", image: "/extension-seven-seas.jpg", alt: "Waterslides and pools at Seven Seas Waterpark", copy: "Spend a refreshing family day at this pirate-themed waterpark, with thrilling waterslides, a wave pool, a lazy river and a variety of water attractions.", tags: ["Waterpark", "Waterslides", "Family travel"], credit: "PHOTO · SEVEN SEAS WATERPARK & RESORT", href: "https://www.facebook.com/sevenseaswaterpark" },
    { title: "Bukidnon paragliding", image: "/extension-paragliding-landscape.png", imageFit: "cover", alt: "Tandem paragliding above Bukidnon's mountain scenery", copy: "Take a tandem paragliding flight from Mount Anahawon in Valencia, Bukidnon. Soar with a pilot and enjoy sweeping views of the highlands.", tags: ["Bukidnon", "Tandem flight", "Highland views"], credit: "PHOTO · BUKIDNON PARAGLIDING EXPERIENCE", href: "https://www.facebook.com/paraglidingbukidnon/" },
    { title: "Shooting range experience", image: "/extension-nmpsa.png", alt: "An on-site briefing at NMPSA Firing Range in Cagayan de Oro", copy: "Try target shooting at NMPSA Firing Range in Bulua, Cagayan de Oro, following the range's on-site safety instructions.", tags: ["Cagayan de Oro", "Bulua", "Target shooting"], credit: "PHOTO · DOT-10 / NMPSA · VIA METROCDODEV", href: "https://www.facebook.com/pages/NMPSA%20Firing%20Range,%20Bulua%20Cagayan%20De%20Oro/599784120079148/" },
  ],
});

const itinerary = [{"day":"DAY 1","date":"Sep 30 (Wed)","title":"Arrival in Cagayan de Oro","theme":"ARRIVAL","hotel":"Luxe Hotel","periods":[{"label":"Morning","items":["Depart from Incheon Airport"]},{"label":"Afternoon","items":["16:45 Arrive at Laguindingan Airport","17:00 Welcome greeting and transfer to Cagayan de Oro","18:00 Check in at Luxe Hotel"]},{"label":"Evening","items":["18:00 Welcome dinner hosted by the Mayor of Cagayan de Oro"]},{"label":"Night","items":["21:00 Rest at the hotel"]}]},{"day":"DAY 2","date":"Oct 1 (Thu)","title":"Landmarks & the sea","theme":"CITY & SEA","hotel":"Luxe Hotel","periods":[{"label":"Morning","items":["07:00 Breakfast","08:00 Transfer to the shooting range","08:30–09:30 Shooting range experience","09:30 Depart for Divine Mercy Shrine","10:00–10:40 Visit Divine Mercy Shrine","11:00 Arrive at Lohas Airport Hotel"]},{"label":"Lunch","items":["Seafood boodle fight"]},{"label":"Afternoon","items":["12:30 Lohas Aqua Resort","15:00 Return to Luxe Hotel"]},{"label":"Evening","items":["17:00 Depart for High Ridge","17:30 Sunset dinner at High Ridge"]},{"label":"Night","items":["Night market tour (optional)"]}]},{"day":"DAY 3","date":"Oct 2 (Fri)","title":"Golf, Claveria & rafting","theme":"GOLF · CLAVERIA · RAFTING","hotel":"Dream Golftel","periods":[{"label":"Morning","items":["06:00 Breakfast","07:00 Check out of Luxe Hotel","07:30 Group A · Pueblo Golf / Group B · Claveria tour"]},{"label":"Lunch","items":["11:00 Group B · Lunch in Claveria","12:00 Group A · Lunch at Pueblo Clubhouse","12:00 Group B · Depart for Cagayan de Oro"]},{"label":"Afternoon","items":["13:00 Pickup for whitewater rafting","14:00 Begin rafting","16:30 Finish rafting"]},{"label":"Evening","items":["18:00 Governor’s Night"]},{"label":"Night","items":["20:30 Depart for Del Monte","21:30 Check in at Dream Golftel and rest"]}]},{"day":"DAY 4","date":"Oct 3 (Sat)","title":"Golf, adventure & mountain retreats","theme":"GOLF · ADVENTURE · MOUNTAIN","hotel":null,"periods":[{"label":"Morning","items":["06:00 Breakfast at Dream Golftel","07:00–11:00 Group A · Del Monte Golf, shower and hotel checkout","08:00–11:00 Group B · Hotel checkout and Communal Ranch"]},{"label":"Lunch","items":["12:00 Ricardo's Restaurant"]},{"label":"Afternoon","items":["13:00 Dahilayan Adventure Park","15:00 Depart for Laguindingan Airport"]},{"label":"Evening","items":["17:00 Aboitiz meeting"]},{"label":"Night","items":["19:00 Depart for Korea"]}]}];

const restaurants = [
  { name: "High Ridge", copy: "A scenic dining spot for sunset dinners and sparkling city views.", place: "/dining-high-ridge-place-new.png", food: "/dining-high-ridge-food.jpg" },
  { name: "Ricardo's", copy: "A mountain lodge restaurant surrounded by Dahilayan's beautiful peaks.", place: "/dining-ricardos-place-new.png", food: "/dining-ricardos-food.jpg" },
  { name: "Fat Chef", copy: "Traditional Filipino dishes with a fusion twist.", place: "/dining-fat-chef-place.jpg", food: "/dining-fat-chef-food.jpg" },
  { name: "Circa 1850", copy: "An American fusion restaurant regarded as one of Cagayan de Oro's top dining spots.", place: "/dining-circa-place-new.png", food: "/dining-circa-food.jpg" },
  { name: "Panagatan", copy: "A celebrated seafood restaurant on the coast.", place: "/dining-panagatan-place-new.png", food: "/dining-panagatan-food.jpg" },
  { name: "Sentro 1850", copy: "Traditional Filipino cuisine presented with a modern touch.", place: "/dining-sentro-place-new.png", food: "/dining-sentro-food.jpg" },
  { name: "Silver Rain", copy: "A Korean restaurant offering a generous and varied selection of dishes.", type: "KOREAN RESTAURANT", place: "/dining-silver-rain-menu-1.png", food: "/dining-silver-rain-menu-2.png" },
  { name: "Seoul Black", copy: "A Korean restaurant chain serving premium Korean BBQ.", type: "KOREAN RESTAURANT", place: "/dining-seoul-black-place.jpg", food: "/dining-seoul-black-food.jpg" },
  { name: "Cucina Higala", copy: "A signature Filipino restaurant in Cagayan de Oro recognised by Tripadvisor.", place: "/dining-cucina-higala-place.png", food: "/dining-cucina-higala-food.png" },
  { name: "Chop Chop", copy: "The only Korean restaurant near Del Monte Golf Course.", type: "KOREAN RESTAURANT", place: "/dining-chop-chop-place.jpg", food: "/dining-chop-chop-food.png" },
  { name: "Red Shabu-Shabu Taiwan", copy: "Generous, warming Taiwanese shabu-shabu that also appeals to Korean tastes.", type: "TAIWANESE SHABU-SHABU", place: "/dining-red-shabu-place.png", food: "/dining-red-shabu-food.png" },
  { name: "H Proper Cafe", copy: "A stylish dining cafe serving specialty coffee, brunch and a range of Western dishes.", type: "CAFE & BISTRO", place: "/dining-h-proper-place.png", food: "/dining-h-proper-food.png", url: "https://www.hproper.com/" },
];

const hotels = [
  { name: "Limketkai Luxe Hotel", grade: "4-star", rooms: "218 rooms", detail: "A golden landmark hotel that defines the city skyline.", image: "/hotel-limketkai.jpg", url: "https://limketkailuxe.com/" },
  { name: "Seda Centrio Hotel", grade: "4-star", rooms: "147 rooms", detail: "A convenient city hotel connected to Centrio Mall.", image: "/hotel-seda-centrio.jpg", url: "https://www.facebook.com/sedacentriohotel/" },
  { name: "Dream Golftel", grade: "3-star", rooms: "42 rooms", detail: "Golf-focused accommodation around five minutes from Del Monte Golf Course.", image: "/hotel-dream-golftel-new.png", url: "https://dreamgolftel.com/" },
  { name: "Lohas Airport Hotel", grade: "3-star", rooms: "16 rooms", detail: "A convenient airport hotel around five minutes from Laguindingan Airport.", image: "/hotel-lohas-pool.jpg", secondaryImage: "/hotel-lohas-airport-new.png", url: "https://www.facebook.com/LohasHotel/" },
  { name: "Ultra Winds Mountain Resort", grade: "MOUNTAIN RESORT", rooms: "INFINITY POOL", detail: "A highland resort surrounded by mountain scenery, featuring an infinity pool with expansive views.", image: "/hotel-ultra-winds-pool.png", secondaryImage: "/hotel-ultra-winds-room.png", url: "https://www.ultrawindsresort.com/" },
  { name: "Chali Beach Resort", grade: "BEACH RESORT", rooms: "CITY ACCESS", detail: "A beach hotel close to central Cagayan de Oro, combining a relaxed coastal setting with swimming pools.", image: "/hotel-chali-beach.png", secondaryImage: "/hotel-chali-room.png", thirdImage: "/hotel-chali-pool.png", url: "https://www.chaliresort.com/" },
];

export default function EnglishFamTour() {
  return (
    <main className="english-page" lang="en">
      <nav className="nav" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="CDO Fam Tour English home">
          <span className="logo-mark">C</span>
          <span>CAGAYAN DE ORO<br /><small>MISOR TOUR 2026</small></span>
        </a>
        <div className="nav-links">
          <a href="#experience">{"About CDO"}</a>
          <a href="#schedule">{"Destinations"}</a>
          <a href="#itinerary">{"Itinerary"}</a>
          <a href="#contact">{"Contact"}</a>
        </div>
        <a className="nav-cta" href="#contact">{"Invitation enquiries"} <span>↗</span></a>
      </nav>

      <section className="hero hero-ocean" id="top">
        <Image className="hero-ocean-image" src="/rohas-sea.jpeg" alt="A wooden pier at Lohas leading towards blue seas and the beach" fill sizes="100vw" priority />
        <div className="hero-ocean-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">PHILIPPINES · CITY OF GOLDEN FRIENDSHIP</p>
          <h1 className="welcome-title" aria-label="Welcome to Cagayan de Oro">
            <span className="welcome-label">WELCOME TO</span>
            <span className="ocean-city-name">CAGAYAN DE ORO</span>
          </h1>
          <p className="hero-description">{"Discover a new destination in the Philippines."}<br />{"Welcome to Cagayan de Oro."}</p>
          <div className="hero-actions">
            <a className="button primary" href="#schedule">{"Explore Cagayan de Oro"} <span>→</span></a>
            <a className="text-link" href="#itinerary">{"View the Fam Tour itinerary"} <span>↓</span></a>
          </div>
        </div>
      </section>

      <section className="manifesto" id="experience">
        <div className="section-kicker">01 / THE EXPERIENCE</div>
        <figure className="route-map-figure" data-nosnippet>
          <Image
            src="/flight-route-map-en.png"
            alt="Flight routes from Incheon to Cagayan de Oro via Manila or Cebu"
            width={1536}
            height={1024}
            sizes="(max-width: 800px) 100vw, 42vw"
          />
          <figcaption><span>ROUTE GUIDE</span> {"Two routes via Manila or Cebu"}</figcaption>
        </figure>
        <div className="intro-content">
          <div className="city-wordmark" aria-label="Cagayan De Oro">
            {"CAGAYANDEORO".split("").map((letter, index) => <span key={`${letter}-${index}`}>{letter}</span>)}
          </div>
          <h2>{"Discover"}<br /><em>{"Cagayan de Oro"}</em></h2>
          <div className="intro-text">
            <p>{"Cagayan de Oro is a gateway connecting commerce and tourism in Northern Mindanao, Philippines. True to its name, the 'City of Golden Friendship' is warm, welcoming and full of energy, with a wide range of activities to enjoy."}</p>
            <p>{"Home to around 730,000 people, the city recorded a GDP of approximately KRW 7 trillion in 2024 and economic growth of 6.8%. Discover a destination where natural surroundings meet relaxation, golf, scuba diving, whitewater rafting and ziplining."}</p>
          </div>
        </div>
      </section>

      <section className="highlights">
        {highlights.map((item) => (
          <article className="highlight" key={item.number}>
            <span>{item.number}</span>
            <div className="highlight-media">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 33vw" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="destinations" id="schedule">
        <header className="destinations-header">
          <p className="section-kicker">02 / DESTINATION PORTFOLIO</p>
          <h2>{"A city of"}<br /><em>{"endless possibilities"}</em></h2>
          <p>{"Mountains, rivers, seas and highlands lie within easy reach of Cagayan de Oro. Discover a new destination with possibilities for a wide range of travel itineraries."}</p>
        </header>

        <div className="category-heading">
          <span>01</span>
          <div><p>SEA &amp; ADVENTURE</p><h3>{"Sea & adventure"}</h3></div>
          <p>{"From vibrant marine life to quiet sunsets in the mangroves, discover the many moods of the coast in a single day."}</p>
        </div>

        <article className="destination-feature">
          <div className="destination-copy">
            <span>01 — OCEAN ACTIVITY</span>
            <h3>{"Lohas Aqua"}<br />{"Water sports"}</h3>
            <p>{"Get close to an extraordinary underwater world of coral reefs, tropical fish and sea turtles through helmet diving and scuba diving."}</p>
            <div className="product-tags"><span>{"Scuba diving"}</span><span>{"Helmet diving"}</span><span>{"Marine experiences"}</span></div>
          </div>
          <div className="photo-mosaic ocean-mosaic">
            <div className="photo-main"><Image src="/helmet-diving.jpg" alt="Helmet diving at Lohas Aqua" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
            <div><Image src="/sea-turtle.jpg" alt="A sea turtle in clear waters" fill sizes="(max-width: 800px) 50vw, 21vw" /></div>
            <div><Image src="/scuba-diving.jpg" alt="Scuba diving among tropical fish" fill sizes="(max-width: 800px) 50vw, 21vw" /></div>
          </div>
        </article>

        <article className="destination-feature reverse">
          <div className="destination-copy">
            <span>02 — NATURE &amp; SUNSET</span>
            <h3>{"Mangroves &"}<br />{"Sunset"}</h3>
            <p>{"Follow a bamboo boardwalk over the water through the mangroves, then end the day with a peaceful sunset colouring the horizon."}</p>
            <div className="product-tags"><span>{"Mangrove walk"}</span><span>{"Sunset viewing"}</span><span>{"Photo spot"}</span></div>
          </div>
          <div className="photo-mosaic sunset-mosaic">
            <div className="photo-main"><Image src="/rohas-sea.jpeg" alt="The overwater boardwalk at Lohas Aqua" fill sizes="(max-width: 800px) 100vw, 42vw" /></div>
            <div><Image src="/mangrove-forest.jpg" alt="A bamboo path through the mangroves" fill sizes="(max-width: 800px) 50vw, 21vw" /></div>
            <div><Image src="/rohas-sunset.jpg" alt="Sunset over a calm sea" fill sizes="(max-width: 800px) 50vw, 21vw" /></div>
          </div>
        </article>

        {destinationGroups.map((group) => (
          <section className="destination-group" key={group.number}>
            <div className="category-heading">
              <span>{group.number}</span>
              <div><p>{group.eyebrow}</p><h3>{group.title}</h3></div>
              <p>{group.intro}</p>
            </div>
            <div className="destination-grid">
              {group.destinations.map((destination) => (
                <article className="destination-card" key={destination.title}>
                  {destination.gallery ? (
                    <div className="destination-card-image food-gallery">
                      {destination.gallery.map((photo) => <div key={photo.src}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 800px) 50vw, 20vw" /></div>)}
                    </div>
                  ) : (
                    <div className="destination-card-image">
                      <Image src={destination.image} alt={destination.alt} fill sizes="(max-width: 800px) 100vw, 40vw" />
                      {destination.credit && <small className="photo-credit">{destination.credit}</small>}
                    </div>
                  )}
                  <div className="destination-card-copy">
                    <h3>{destination.title}</h3>
                    <p>{destination.copy}</p>
                    <div className="product-tags">{destination.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="destination-group extension-group" id="extensions">
          <div className="category-heading extension-heading">
            <span>06</span>
            <div><p>BEYOND THE FAM TOUR</p><h3>Extension Destinations</h3></div>
            <p>{"Explore destinations and experiences across Northern Mindanao that can be combined with a journey based in Cagayan de Oro."}</p>
          </div>
          {extensionDestinations.map((category) => (
            <div className="extension-category" key={category.title}>
              <header className="extension-category-header">
                <p>{category.eyebrow}</p>
                <h3>{category.title}</h3>
                <span>{category.intro}</span>
              </header>
              <div className="destination-grid extension-grid">
                {category.destinations.map((destination) => (
                  <article className="destination-card" key={destination.title}>
                    <div className="destination-card-image">
                      <Image src={destination.image} alt={destination.alt} fill sizes="(max-width: 800px) 100vw, 40vw" style={{ objectFit: destination.imageFit ?? "cover" }} />
                      <small className="photo-credit">{destination.credit}</small>
                    </div>
                    <div className="destination-card-copy">
                      <h3>{destination.title}</h3>
                      <p>{destination.copy}</p>
                      <div className="product-tags">{destination.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                      {destination.href && <a className="extension-link" href={destination.href} target="_blank" rel="noopener noreferrer">{"Learn more on Facebook ↗"}</a>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>

      <section className="dining-section" id="dining">
        <header className="dining-header">
          <div>
            <p className="section-kicker">03 / CDO DINING GUIDE</p>
            <h2>{"A taste of"}<br /><em>{"Cagayan de Oro"}</em></h2>
          </div>
          <p>{"City views, local flavours and familiar Korean favourites. Discover memorable dining spots around Cagayan de Oro."}</p>
        </header>
        <div className="restaurant-list">
          {restaurants.map((restaurant, index) => (
            <article className="restaurant-item" key={restaurant.name}>
              <span className="restaurant-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="restaurant-name">
                <h3>{restaurant.name}</h3>
                <span>{restaurant.copy}</span>
              </div>
              <div className="restaurant-gallery">
                <div><Image src={restaurant.place} alt={`${restaurant.name} exterior or dining area`} fill sizes="120px" /></div>
                <div><Image src={restaurant.food} alt={`${restaurant.name} signature dish`} fill sizes="120px" /></div>
              </div>
              <span className="restaurant-type">{restaurant.type ?? "CDO DINING"}</span>
              {restaurant.url ? (
                <a className="restaurant-arrow" href={restaurant.url} target="_blank" rel="noopener noreferrer" aria-label={`${restaurant.name} open website`}>↗</a>
              ) : (
                <span className="restaurant-arrow">↗</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="hotel-section" id="hotels">
        <header className="hotel-header">
          <div>
            <p className="section-kicker">04 / STAY IN CDO</p>
            <h2>{"Stays for"}<br /><em>{"every journey"}</em></h2>
          </div>
          <p>{"Discover Cagayan de Oro's key hotels, chosen to suit city sightseeing, premium relaxation, golf itineraries and airport transfers."}</p>
        </header>
        <div className="hotel-grid">
          {hotels.map((hotel, index) => (
            <article className="hotel-card" key={hotel.name}>
              <div className="hotel-image">
                {hotel.secondaryImage ? (
                  <div className={`hotel-image-pair${hotel.thirdImage ? " hotel-image-trio" : ""}`}>
                    <div><Image src={hotel.image} alt={`${hotel.name} ${hotel.thirdImage ? "beachfront dining area" : "swimming pool"}`} fill sizes="(max-width: 800px) 50vw, 25vw" /></div>
                    <div><Image src={hotel.secondaryImage} alt={`${hotel.name} guest room`} fill sizes="(max-width: 800px) 50vw, 25vw" /></div>
                    {hotel.thirdImage && <div><Image src={hotel.thirdImage} alt={`${hotel.name} swimming pool`} fill sizes="(max-width: 800px) 50vw, 25vw" /></div>}
                  </div>
                ) : (
                  <Image src={hotel.image} alt={`${hotel.name} overview`} fill sizes="(max-width: 800px) 100vw, 50vw" />
                )}
                <span>0{index + 1}</span>
              </div>
              <div className="hotel-copy">
                <p>{hotel.grade} <i /> {hotel.rooms}</p>
                <h3>{hotel.name}</h3>
                <span>{hotel.detail}</span>
                <a className="hotel-link" href={hotel.url} target="_blank" rel="noopener noreferrer">{hotel.url.includes("facebook.com") ? "View Facebook" : "Visit website"} <b>↗</b></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="itinerary-section" id="itinerary">
        <header className="itinerary-header">
          <p className="section-kicker">05 / ITINERARY</p>
          <h2>{"3 nights, 4 days"}<br /><em>{"A journey of discovery"}</em></h2>
          <p>{"Explore the schedule from September 30 to October 3. Group A follows the golf itinerary, while Group B enjoys sightseeing."}</p>
        </header>
        <div className="itinerary-summary" aria-label="Itinerary summary">
          <div><strong>3</strong><span>NIGHTS</span></div>
          <div><strong>4</strong><span>DAYS</span></div>
          <div><strong>2</strong><span>GOLF ROUNDS</span></div>
          <div><strong>1</strong><span>NEW DESTINATION</span></div>
        </div>
        <div className="itinerary-grid">
          {itinerary.map((item) => (
            <article className="itinerary-card" key={item.day}>
              <div className="itinerary-card-top">
                <span>{item.date}</span>
                <div><small>{item.theme}</small><h3>{item.title}</h3></div>
              </div>
              <div className="itinerary-periods">
                {item.periods.map((period) => (
                  <section className="itinerary-period" key={period.label} aria-label={`${item.date} ${period.label}`}>
                    <h4>{period.label}</h4>
                    <ul>{period.items.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </section>
                ))}
                {item.hotel && <p className="itinerary-hotel"><strong>{"Hotel"}</strong>{item.hotel}</p>}
              </div>
              <div className="itinerary-day">{item.day}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote">
        <p>{"“The best stories"}<br />{"begin with"} <em>{"moments"}</em>{" you experience.”"}</p>
        <span>— CDO TOURISM COLLECTIVE</span>
      </section>

      <footer id="contact">
        <div>
          <p className="eyebrow"><span /> YOUR STORY STARTS HERE</p>
          <h2>{"Be part of"}<br />{"the next chapter."}</h2>
        </div>
        <div className="contact-card">
          <p>PRESS · CREATOR · BRAND PARTNERSHIP</p>
          <a href="mailto:hellenqueen00@gmail.com">hellenqueen00@gmail.com <span>↗</span></a>
          <a href="tel:+639176245267">+63 917 624 5267 <span>↗</span></a>
          <small>{"For invitations and partnership enquiries, please contact us by email or phone."}</small>
        </div>
        <div className="footer-bottom"><span>© 2026 CDO FAM TOUR</span><span>CAGAYAN DE ORO · PHILIPPINES</span></div>
      </footer>
    </main>
  );
}
