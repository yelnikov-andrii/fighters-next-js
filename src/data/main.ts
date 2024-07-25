import boxingGloves from '@/images/boxingGloves.png';
import bjjGis from '@/images/bjjGi.png';
import punchBags from '@/images/punchbags.png';
import mmaProtection from '@/images/mmaprotection.png';
import noGi from '@/images/nogi.png';
import dumbells from '@/images/dumells.png';

export const firstBlockElements = [
  {
    translation_key: 'boxing_gloves',
    img: boxingGloves,
    imgAlt: 'boxing gloves',
    linkUrl: '/products?subcategory=1'
  },
  {
    translation_key: 'gis',
    img: bjjGis,
    imgAlt: 'bjj gi',
    linkUrl: 'products?subcategory=7'
  },
  {
    translation_key: 'mma_protection',
    img: mmaProtection,
    imgAlt: 'mma protection',
    linkUrl: 'products?subcategory=11'
  }
];

export const secondBlockElements = [
  {
    translation_key: "no_gi",
    img: noGi,
    imgAlt: 'no gi',
    linkUrl: 'products?subcategory=8'
  },
  {
    translation_key: "punch_bags",
    img: punchBags,
    imgAlt: 'punch bags',
    linkUrl: 'products?subcategory=3'
  },
  {
    translation_key: "dumbells_kettlebells",
    img: dumbells,
    imgAlt: 'dumbells',
    linkUrl: 'products?subcategory=15'
  }
];

export const reviews = [
  {
    id: 1,
    user: 'Denis',
    rating: 5,
    body: 'Great price and speedy delivery',
    date: '1 month ago'
  },
  {
    id: 2,
    user: 'Patrick C',
    rating: 5,
    body: 'Gloves are of very good quality and a great price',
    date: '1 month ago'
  },
  {
    id: 3,
    user: 'Anonymous',
    rating: 5,
    body: 'Excellent service. Product came on time no issues with delivery. A genuine bank holiday offer code as well. Genuine product. Thank you.',
    date: '1 month ago'
  },
  {
    id: 4,
    user: 'Islam A',
    rating: 4.5,
    body: 'Great selection of gear for all disciplines, high quality and fast delivery',
    date: '1 month ago'
  },
  {
    id: 5,
    user: 'Jez W',
    rating: 4,
    body: 'Service was good item arrived swiftly ',
    date: '4 weeks ago'
  },
  {
    id: 6,
    user: 'Mark A',
    rating: 3.5,
    body: 'This item was fine, however: Ordered two rash guards, and waited over a week before sending a message. The auto response system used wasn’t very useful. After another few days, I received and email to say that one of the items wasn’t in stock and it hadn’t been alerted to anyone. The single item was shipped after a representative finally found out. Not great but not the end of the world.',
    date: '1 month ago'
  },
  {
    id: 7,
    user: 'Jon W',
    rating: 5,
    body: 'Extremely comfortable shorts with a beautiful design',
    date: '1 month ago'
  }
];

export const averageRating = (reviews.reduce((init, rev) => init + rev.rating, 0) / reviews.length).toFixed(1);