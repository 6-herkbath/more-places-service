/* eslint-disable */
const mongoose = require('mongoose');
const faker = require('faker');
const { PlaceModel } = require('./db/controllers/place.js');
const { ListingModel } = require('./db/controllers/listing.js');

mongoose.connect('mongodb://localhost/listings');

const pictureURLs = [
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/aaron-huber-oMOx_wV6mLQ-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/arcwind--OKp-rhSWE4-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/greg-rivers-rChFUMwAe7E-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/joseph-albanese-xx0oSB1YxRE-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/kara-eads-L7EwHkq1B2s-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/lindsey-lamont-zOFWHSN3oTQ-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/neonbrand-kdwahpWYfQo-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/outsite-co-R-LK3sqLiBw-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-binyamin-mellish-1396132.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-pixabay-259588.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-pixabay-259685.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-pixabay-262405.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-saviesa-home-2089698.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-sebastian-s%C3%B8rensen-731082.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-tobias-bj%C3%B8rkli-2360673.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/pexels-tom%C3%A1%C5%A1-mal%C3%ADk-2581922.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/randy-fath-csK5XPO87lI-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/roberto-nickson-tleCJiDOri0-unsplash.jpg',
  'https://hrsf131-fec.s3-us-west-1.amazonaws.com/toa-heftiba-FV3GConVSss-unsplash.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/03_OpenHouses.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/05_UpsideDownHouses__TheWorldUpsideDown_5.-Trassenheide_Die_Welt_steht_Kopf.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/1011beverlydr_65.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/104548349-Large_house_suburb.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/10622_kimberly_avenue_25.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/106758801-1603459526384-picture-perfect-beautiful-house-on-the-island-of-coronado-in-sunny-california-beautifully-landscaped_t20_6lJOrv.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/1140-house-inheriting.imgcache.rev68c065601779c5d76b913cf9ec3a977e.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/1200px-Over_and_under_house_type_of_duplex_house..jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/13HOUSEPROUD1-articleLarge.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/1904-Gallery-House-Chicago-John-Ronan-Architects-01.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/191204153142-impossible-architecture-tease-2.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/20053bf5-2c76-4d9c-ae10-cbb3d67b2b29-House_sold.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/20180317_FNP003_0.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/3419-Trimble-Ave1.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/38d75b985d9d08ce0959201f8198f405.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/412785002-0-677x451.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/47b97e62ef6f28ea4ae2861e01def86c.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/6434987f-adfe-4b79-aa04-45fc49bc2abe-worlds-ugliest-houses-ugly-belgian-houses.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/854081161001_6178875221001_6178880081001-vs.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/85feface-ce9e-4628-8e9b-b8d77cafb2d4-12520_Seminole_Beach_Rd_Frt_Nordegren_Lifestyle_Production_Group.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/9dc3245f-65ea-4b01-b2cb-98775d746ee0.hw8.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/a14ba6dccfe66fcd221e399032f5942673-parks-home-01-rendering.2x.h467.w700.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/a1c1a1a36c9e4ff8adcb958c4276f28d-jumbo.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/a480be039a8ad63f53ab53d72abd8955-Header1.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/ADGmqu9khQhqgtbnlwEmJmzWD9Ljds7V2dN4unLh3oQ0s64-c-mo.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/AdobeStock_89298214-min_8421efb06b9d433a6f2f17d886703510_2000.jpeg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/B3-DM067_RIGHTS_IM_20190319162958.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Ball-Paylore-House.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/brewster-mcleod-architects-1486154143.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/c2446d25-e0f8-483a-bfcf-b53c2b0fbe27-31amazing-houses-for-sale-in-surprising-places-caribbean.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/charleston-colonial-house.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Cheap-Old-Houses.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Contemporary-Modern-House-Design-6.1539270983.8601.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/courtyard-living-contemporary-houses-asia-pacific-charmaine-chan_dezeen_2364_hero_4.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/december-holidays-days-2-30-6753651837108830.5-s.png',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/DFE4EE3A-8D2F-45BB-9E3A2A9D782A5C83_source.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/E998B3E58589E688BFE7AB8BE99DA2_E4BD95E782BC.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/fb0dcc759e03b63c1886d78a5ce9e0e8w-c0xd-w750_h994_q80.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/featured_pretty-home.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/file-20190405-180029-1152ig6.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/flooded-houses.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/future-residents-web-768x674-300x263.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/gallery_medium.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/GettyImages-1167399452.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/house-4-1553878169.png',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/house-for-sale-cape-may-restored-beach-block-house-exterior-front-cape-may-mls.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/houses.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/how-size-doesnt-make-you-happier-today-main-190614_b7784729377665100e60a6b2d3a6150e.fit-760w.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/How-to-Buy-a-House-with-Low-Income-This-Year.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/https3A2F2Fspecials-images.forbesimg.com2Fimageserve2F10262053922F0x0.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/image.png',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/images.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/IMG_0385JPG.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/IMG_5577JPG.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/ISm2ws8xojvwbs1000000000.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/kae-brown-house-pictures.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/KnightBritainHouseNaming.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/L1010064_WebRes-3d-printed-house-mighty-buildings.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/lan07.19-hollowtracehouse.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/lan07.19-landlord-houses-featured.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Large-custom-geodesic-house-apr2.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/marquee-08.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/minecraft-house-ideas-1212x682.png',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Minecraft-House-Ideas-Feature.jpeg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/MW-HK104_lillev_20190522122922_ZQ.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/open-house-picks-brooklyn-windsor-terrace-for-sale-226-east-7th-street-1.png',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/open-houses-october.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Orange-Road-e1575059815752.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/palazzo-di-amore.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/photo_camera_grey600_24dp.png',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/pie-house-mc-main1-2008118_2616dcf6f8dc78ccf897abfedbc3c668.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Ranch-Style-Home-at-K.-Hovnanians-Four-Seasons-at-Belle-Terre-1-1024x655.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/shojiwhite-1596738864.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Shotgun-houses-new-Orleans-louisiana.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/si-modern-home.png',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/SJM-L-HOUSES-1027-10-2-1011x675.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/suburban-house-royalty-free-image-1584972559.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Tiny_house2C_Portland.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/tiny-houses-1579284305.png',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Traditional-style-suburban-home-shutterstock_398991412-823eff-1024x546.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/uk-modern-houses-book03.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/we-buy-houses-in-Michigan.jpg',
  'https://ailpupimages.s3-us-west-1.amazonaws.com/SDC+pics/Webp.net-compress-image.jpg'
]

const seedDb = () => {
  const listings = [];
  let i = 0;
  while (i < 100) {
    const newListing = new ListingModel({
      listingID: i,
      listingName: faker.address.streetName(),
      morePlacesID: [],
    });
    let j = 0;
    while (j < 12) {
      const newPlace = new PlaceModel({
        listingID: Math.floor(Math.random() * 100),
        pictureURL: pictureURLs[Math.floor(Math.random() * pictureURLs.length)],
        locationName: faker.address.streetName(),
        liked: false,
        score: parseFloat(((Math.random() * 5) + 1).toFixed(2)),
        reviewCount: Math.floor(Math.random() * 200),
        roomType: faker.commerce.productName(),
        roomName: faker.commerce.productName(),
        bedCount: Math.floor(Math.random() * 2) + 1,
        costPerNight: Math.floor(Math.random() * 200) + 30,
      });
      newListing.morePlacesID.push(newPlace);
      j += 1;
    }
    listings.push(newListing);
    i += 1;
  }
  ListingModel.create(listings, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      mongoose.disconnect();
    }
  });
};

seedDb();
