// Asset categorization. Each image is classified so we never assign a
// wrong photo to a dish. If a dish doesn't have a confident match, it
// gets `null` and the UI renders a typographic placeholder instead.

const IMG = (name) => `/assets/images/${name}`;

export const LOGO_SRC = '/assets/logo/pescao-logo.jpg';

// Confident, dish-specific matches based on visual identification of the
// supplied photoset. Anything not listed here renders a placeholder.
export const dishImage = {
  // ENTRADAS
  'chicharrones-pescao': IMG('IMG_3992.jpg'),
  'chicharrones-cerdo': IMG('IMG_3993.jpg'),
  'tostones-playeros': IMG('IMG_3994.jpg'),
  'degustacion': IMG('IMG_3995.jpg'),
  'trio-ceviche': IMG('IMG_3996.jpg'),
  'nuggets-papas': IMG('IMG_3998.jpg'),
  'tequenos': IMG('IMG_3999.jpg'),

  // PRINCIPALES
  'pargo': IMG('IMG_4001.jpg'),
  'mojarra': IMG('IMG_4002.jpg'),
  'lebranche': IMG('IMG_4003.jpg'),
  'rueda-carite': IMG('IMG_4004.jpg'),
  'camarones-ajillo': IMG('IMG_4005.jpg'),
  'filet-pescao-ajillo': IMG('IMG_4006.jpg'),
  'filet-marinero': IMG('IMG_4007.jpg'),
  'filet-crema-camarones': IMG('IMG_4008.jpg'),
  'arroz-mariscos': IMG('IMG_4009.jpg'),
  'duo-picana-camarones': IMG('IMG_4010.jpg'),
  'pasta-marinera': IMG('IMG_4011.jpg'),
  'chivo-coco': IMG('IMG_4012.jpg'),
  'mojito': IMG('IMG_4013.jpg'),

  // PARRILLAS
  'parrilla-mar-tierra': IMG('IMG_4014.jpg'),
  'parrilla-super-especial': IMG('IMG_4015.jpg'),

  // SOPAS
  'cazuela-mariscos': IMG('IMG_4016.jpg'),
  'media-cazuela': IMG('IMG_4017.jpg'),
  'sopa-dia': IMG('IMG_4018.jpg'),

  // CONTORNOS
  'patacones': IMG('IMG_4019.jpg'),
  'maduritos': IMG('IMG_4020.jpg'),
  'queso-frito': IMG('IMG_4021.jpg'),
  'queso-fresco': IMG('IMG_4022.jpg'),
  'ensalada-cesar': IMG('IMG_4023.jpg'),
  'ensalada-coleslaw': IMG('IMG_4024.jpg'),
  'ensalada-fresca': IMG('IMG_4025.jpg'),
  'nata': IMG('IMG_4026.jpg'),
  'yuca-hervida': IMG('IMG_4027.jpg'),
  'yuca-frita': IMG('IMG_4028.jpg'),
  'arroz': IMG('IMG_4029.jpg'),
  'papas-fritas': IMG('IMG_4030.jpg'),
  'arepas-fritas': IMG('IMG_4031.jpg'),
  'caraotas': IMG('IMG_4032.jpg'),

  // BEBIDAS
  'cerveza-polar': IMG('IMG_4033.jpg'),
  'cerveza-zulia': IMG('IMG_4034.jpg'),
  'bud-light': IMG('IMG_4035.jpg'),
  'bucket': IMG('IMG_4036.jpg'),
  'papelon-vaso': IMG('IMG_4037.jpg'),
  'papelon-jarra': IMG('IMG_4038.jpg'),
  'nestea-vaso': IMG('IMG_4039.jpg'),
  'nestea-jarra': IMG('IMG_4040.jpg'),
  'coke': IMG('IMG_4041.jpg'),
  'coke-zero': IMG('IMG_4042.jpg'),
  'sprite': IMG('IMG_4043.jpg'),
  'frescolita': IMG('IMG_4044.jpg'),
  'uva': IMG('IMG_4045.jpg'),
  'malta': IMG('IMG_4046.jpg'),
  'agua-mineral': IMG('IMG_4047.jpg'),
};

// Lookup helper — returns undefined when no confident match.
export const getDishImage = (key) => (key ? dishImage[key] : undefined);

// HERO candidates (large, food-forward shots).
export const HERO_IMAGE = IMG('IMG_4001.jpg'); // Pargo — best hero
export const HERO_SECONDARY = IMG('IMG_4015.jpg'); // Parrilla Super Especial
export const HERO_TERTIARY = IMG('IMG_4003.jpg'); // Lebranche

// Highlights category covers
export const CATEGORY_COVERS = {
  pescado: IMG('IMG_4001.jpg'), // Pargo
  mariscos: IMG('IMG_4016.jpg'), // Cazuela de Mariscos
  parrillas: IMG('IMG_4015.jpg'), // Parrilla Super Especial
  bebidas: IMG('IMG_4036.jpg'), // Bucket
};

// Curated gallery selection (food + composition shots only).
export const GALLERY = [
  { src: IMG('IMG_4001.jpg'), alt: 'Pargo entero frito con patacones', span: 'tall' },
  { src: IMG('IMG_4015.jpg'), alt: 'Parrilla Super Especial' },
  { src: IMG('IMG_4016.jpg'), alt: 'Cazuela de Mariscos' },
  { src: IMG('IMG_4014.jpg'), alt: 'Parrilla Mar y Tierra' },
  { src: IMG('IMG_4003.jpg'), alt: 'Lebranche entero frito', span: 'tall' },
  { src: IMG('IMG_4011.jpg'), alt: 'Pasta Marinera con mejillones y camarones' },
  { src: IMG('IMG_4002.jpg'), alt: 'Mojarra frita con papas' },
  { src: IMG('IMG_4010.jpg'), alt: 'Duo Picaña & Camarones' },
  { src: IMG('IMG_4007.jpg'), alt: 'Filet Marinero con plátanos' },
  { src: IMG('IMG_4036.jpg'), alt: 'Bucket de cervezas frías', span: 'tall' },
  { src: IMG('IMG_3996.jpg'), alt: 'Trio de Ceviches' },
  { src: IMG('IMG_3995.jpg'), alt: 'Degustación variada' },
];
