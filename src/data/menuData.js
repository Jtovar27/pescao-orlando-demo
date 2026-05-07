// Menu data for Pescao. Prices are static and authoritative.
// Each item has: id, name, price, description, imageKey (optional),
// and modifierGroups (optional). Modifier groups are coherent with the dish.

const ACOMPANANTE_OPTIONS = [
  { id: 'patacones', label: 'Patacones', priceDelta: 0 },
  { id: 'papas-fritas', label: 'Papas fritas', priceDelta: 0 },
  { id: 'arroz', label: 'Arroz', priceDelta: 0 },
  { id: 'yuca-frita', label: 'Yuca frita', priceDelta: 0 },
  { id: 'ensalada-fresca', label: 'Ensalada fresca', priceDelta: 0 },
  { id: 'tostones', label: 'Tostones', priceDelta: 0 },
];

const PARRILLA_TERMINO = [
  { id: 'medio', label: 'Término medio', priceDelta: 0 },
  { id: 'tres-cuartos', label: 'Tres cuartos', priceDelta: 0 },
  { id: 'bien-cocida', label: 'Bien cocida', priceDelta: 0 },
];

const PARRILLA_ACOMPANANTE = [
  { id: 'arroz', label: 'Arroz', priceDelta: 0 },
  { id: 'papas-fritas', label: 'Papas fritas', priceDelta: 0 },
  { id: 'yuca', label: 'Yuca frita', priceDelta: 0 },
  { id: 'ensalada', label: 'Ensalada fresca', priceDelta: 0 },
];

const EXTRAS_PESCADO = [
  { id: 'queso-extra', label: 'Queso frito extra', priceDelta: 4.00 },
  { id: 'nata-extra', label: 'Nata extra', priceDelta: 3.00 },
  { id: 'patacones-extra', label: 'Patacones extra', priceDelta: 4.00 },
  { id: 'papas-extra', label: 'Papas fritas extra', priceDelta: 3.50 },
  { id: 'yuca-extra', label: 'Yuca frita extra', priceDelta: 3.50 },
];

const EXTRAS_MARISCOS = [
  { id: 'camarones-extra', label: 'Camarones extra', priceDelta: 6.00 },
  { id: 'queso-extra', label: 'Queso frito extra', priceDelta: 4.00 },
  { id: 'patacones-extra', label: 'Patacones extra', priceDelta: 4.00 },
];

const PRINCIPAL_GROUPS = (extras = EXTRAS_PESCADO) => [
  {
    id: 'acompanantes',
    title: 'Elige tus acompañantes',
    helper: 'Selecciona uno (sin costo)',
    type: 'single',
    required: true,
    options: ACOMPANANTE_OPTIONS,
  },
  {
    id: 'extras',
    title: 'Extras',
    helper: 'Opcional',
    type: 'multi',
    required: false,
    options: extras,
  },
];

const MARISCOS_PREP = [
  { id: 'al-ajillo', label: 'Al ajillo', priceDelta: 0 },
  { id: 'marinero', label: 'Marinero', priceDelta: 0 },
  { id: 'criollo', label: 'Salsa criolla', priceDelta: 0 },
];

const SOPA_PORCION = [
  { id: 'porcion-completa', label: 'Porción completa', priceDelta: 0 },
  { id: 'media-porcion', label: 'Media porción', priceDelta: -7.00 },
];

const BEBIDA_FRIA = [
  { id: 'bien-fria', label: 'Bien fría', priceDelta: 0 },
  { id: 'fria', label: 'Fría', priceDelta: 0 },
  { id: 'al-tiempo', label: 'Al tiempo', priceDelta: 0 },
];

export const categories = [
  { id: 'especiales', name: 'Especiales' },
  { id: 'entradas', name: 'Entradas' },
  { id: 'principales', name: 'Principales' },
  { id: 'parrillas', name: 'Parrillas' },
  { id: 'sopas', name: 'Sopas' },
  { id: 'contornos', name: 'Contornos' },
  { id: 'bebidas', name: 'Bebidas' },
];

export const menu = {
  especiales: [
    {
      id: 'lunch-special',
      name: 'Lunch Special',
      price: 11.99,
      description:
        '1 proteína a tu elección, 2 contornos y sopa del día. Disponible al mediodía.',
      tag: 'Más vendido',
      modifierGroups: [
        {
          id: 'proteina',
          title: 'Proteína',
          helper: 'Elige una',
          type: 'single',
          required: true,
          options: [
            { id: 'pollo-plancha', label: 'Pollo a la plancha', priceDelta: 0 },
            { id: 'pescado-frito', label: 'Filet de pescado frito', priceDelta: 0 },
            { id: 'carne-mechada', label: 'Carne mechada', priceDelta: 0 },
            { id: 'pernil', label: 'Pernil de cerdo', priceDelta: 0 },
          ],
        },
        {
          id: 'contornos',
          title: 'Contornos',
          helper: 'Elige hasta 2',
          type: 'multi',
          max: 2,
          required: true,
          options: [
            { id: 'arroz', label: 'Arroz', priceDelta: 0 },
            { id: 'caraotas', label: 'Caraotas', priceDelta: 0 },
            { id: 'patacones', label: 'Patacones', priceDelta: 0 },
            { id: 'papas-fritas', label: 'Papas fritas', priceDelta: 0 },
            { id: 'ensalada', label: 'Ensalada fresca', priceDelta: 0 },
          ],
        },
      ],
    },
    {
      id: 'lunch-special-full',
      name: 'Lunch Special Full',
      price: 15.99,
      description:
        'Versión completa: proteína premium, 2 contornos y sopa del día.',
      modifierGroups: [
        {
          id: 'proteina',
          title: 'Proteína',
          helper: 'Elige una',
          type: 'single',
          required: true,
          options: [
            { id: 'pescado-completo', label: 'Pescado frito completo', priceDelta: 0 },
            { id: 'camarones', label: 'Camarones al ajillo', priceDelta: 0 },
            { id: 'parrilla-pollo', label: 'Parrilla de pollo', priceDelta: 0 },
            { id: 'churrasco', label: 'Churrasco a la parrilla', priceDelta: 0 },
          ],
        },
        {
          id: 'contornos',
          title: 'Contornos',
          helper: 'Elige hasta 2',
          type: 'multi',
          max: 2,
          required: true,
          options: [
            { id: 'arroz', label: 'Arroz', priceDelta: 0 },
            { id: 'caraotas', label: 'Caraotas', priceDelta: 0 },
            { id: 'patacones', label: 'Patacones', priceDelta: 0 },
            { id: 'yuca', label: 'Yuca frita', priceDelta: 0 },
            { id: 'ensalada', label: 'Ensalada fresca', priceDelta: 0 },
          ],
        },
      ],
    },
  ],

  entradas: [
    {
      id: 'chicharrones-pescao',
      name: 'Chicharrones de Pescao',
      price: 10.99,
      imageKey: 'chicharrones-pescao',
      description: 'Trozos de pescado fresco, marinados y crujientes.',
    },
    {
      id: 'chicharrones-cerdo',
      name: 'Chicharrones de Cerdo',
      price: 9.99,
      imageKey: 'chicharrones-cerdo',
      description: 'Cerdo dorado con limón y un toque de cilantro.',
    },
    {
      id: 'tostones-playeros',
      name: 'Tostones Playeros',
      price: 8.99,
      imageKey: 'tostones-playeros',
      description:
        'Tostones cubiertos con queso fresco, salsa rosada y cilantro fresco.',
    },
    {
      id: 'degustacion',
      name: 'Degustación',
      price: 22.99,
      imageKey: 'degustacion',
      description:
        'Plato variado para compartir: chicharrón, yuca frita, papas y empanadas con salsa.',
      tag: 'Para compartir',
    },
    {
      id: 'trio-ceviche',
      name: 'Trio Ceviche',
      price: 22.99,
      imageKey: 'trio-ceviche',
      description:
        'Tres ceviches frescos: pescado clásico, camarones y mixto, con totopos.',
    },
    {
      id: 'nuggets-papas',
      name: 'Nuggets y Papas Fritas',
      price: 10.50,
      imageKey: 'nuggets-papas',
      description: 'Crispy nuggets dorados con papas fritas y salsa de la casa.',
    },
    {
      id: 'tequenos',
      name: 'Servicio de Tequeños (5)',
      price: 10.50,
      imageKey: 'tequenos',
      description: 'Cinco tequeños venezolanos crujientes con dip de guasacaca.',
    },
  ],

  principales: [
    {
      id: 'pargo',
      name: 'Pargo',
      price: 26.99,
      imageKey: 'pargo',
      description:
        'Pargo entero frito al estilo caribeño, crujiente por fuera y jugoso por dentro.',
      tag: 'Favorito',
      modifierGroups: PRINCIPAL_GROUPS(),
    },
    {
      id: 'mojarra',
      name: 'Mojarra',
      price: 18.99,
      imageKey: 'mojarra',
      description: 'Mojarra frita servida con papas y queso fresco.',
      modifierGroups: PRINCIPAL_GROUPS(),
    },
    {
      id: 'lebranche',
      name: 'Lebranche',
      price: 25.99,
      imageKey: 'lebranche',
      description: 'Pescado entero crujiente con queso frito y patacones.',
      modifierGroups: PRINCIPAL_GROUPS(),
    },
    {
      id: 'rueda-carite',
      name: 'Rueda de Carite',
      price: 19.99,
      imageKey: 'rueda-carite',
      description: 'Dos ruedas de carite a la plancha con tostones y queso frito.',
      modifierGroups: PRINCIPAL_GROUPS(),
    },
    {
      id: 'camarones-ajillo',
      name: 'Camarones al Ajillo',
      price: 19.99,
      imageKey: 'camarones-ajillo',
      description:
        'Camarones salteados en aceite de ajo, perejil y un toque de vino blanco.',
      modifierGroups: [
        {
          id: 'preparacion',
          title: 'Preparación',
          type: 'single',
          required: true,
          options: MARISCOS_PREP,
        },
        ...PRINCIPAL_GROUPS(EXTRAS_MARISCOS),
      ],
    },
    {
      id: 'filet-pescao-ajillo',
      name: 'Filet de Pescao al Ajillo',
      price: 16.99,
      imageKey: 'filet-pescao-ajillo',
      description: 'Filet en salsa de ajillo con arroz y ensalada fresca.',
      modifierGroups: PRINCIPAL_GROUPS(),
    },
    {
      id: 'filet-marinero',
      name: 'Filet Marinero',
      price: 23.99,
      imageKey: 'filet-marinero',
      description:
        'Filet de pescado bañado en salsa marinera con calamares y camarones.',
      modifierGroups: PRINCIPAL_GROUPS(EXTRAS_MARISCOS),
    },
    {
      id: 'filet-crema-camarones',
      name: 'Filet en Crema con Camarones',
      price: 23.99,
      imageKey: 'filet-crema-camarones',
      description: 'Filet bañado en crema suave con camarones, arroz y papas fritas.',
      modifierGroups: PRINCIPAL_GROUPS(EXTRAS_MARISCOS),
    },
    {
      id: 'arroz-mariscos',
      name: 'Arroz con Mariscos',
      price: 20.99,
      imageKey: 'arroz-mariscos',
      description: 'Arroz cremoso con la mezcla de mariscos del día.',
      modifierGroups: PRINCIPAL_GROUPS(EXTRAS_MARISCOS),
    },
    {
      id: 'duo-picana-camarones',
      name: 'Duo Picaña & Camarones',
      price: 25.99,
      imageKey: 'duo-picana-camarones',
      description:
        'Picaña a la parrilla con camarones salteados, ensalada y patacones.',
      tag: 'Mar y Tierra',
      modifierGroups: [
        {
          id: 'termino',
          title: 'Término de la carne',
          type: 'single',
          required: true,
          options: PARRILLA_TERMINO,
        },
        ...PRINCIPAL_GROUPS(EXTRAS_MARISCOS),
      ],
    },
    {
      id: 'pasta-marinera',
      name: 'Pasta Marinera',
      price: 20.99,
      imageKey: 'pasta-marinera',
      description: 'Spaghetti con mejillones, camarones y calamares en salsa marinera.',
    },
    {
      id: 'chivo-coco',
      name: 'Chivo en Coco',
      price: 20.99,
      imageKey: 'chivo-coco',
      description: 'Chivo guisado en leche de coco con arroz, arepa y plátanos.',
    },
    {
      id: 'mojito',
      name: 'Mojito',
      price: 17.99,
      imageKey: 'mojito',
      description: 'Pescado desmechado salteado al mojo, con yuca y arroz.',
    },
  ],

  parrillas: [
    {
      id: 'parrilla-pollo',
      name: 'Parrilla de Pollo',
      price: 17.99,
      description: 'Pechuga de pollo a la parrilla con dos contornos a elegir.',
      modifierGroups: [
        { id: 'acomp', title: 'Acompañante', type: 'single', required: true, options: PARRILLA_ACOMPANANTE },
        { id: 'extra-salsa', title: '¿Extra salsa?', type: 'multi', options: [{ id: 'salsa', label: 'Extra salsa', priceDelta: 1.50 }] },
      ],
    },
    {
      id: 'parrilla-carne',
      name: 'Parrilla de Carne',
      price: 22.99,
      description: 'Carne a la parrilla servida con dos contornos a elegir.',
      modifierGroups: [
        { id: 'termino', title: 'Término de la carne', type: 'single', required: true, options: PARRILLA_TERMINO },
        { id: 'acomp', title: 'Acompañante', type: 'single', required: true, options: PARRILLA_ACOMPANANTE },
      ],
    },
    {
      id: 'parrilla-mixta',
      name: 'Parrilla Mixta',
      price: 23.99,
      description: 'Pollo y carne a la parrilla con dos contornos.',
      modifierGroups: [
        { id: 'termino', title: 'Término de la carne', type: 'single', required: true, options: PARRILLA_TERMINO },
        { id: 'acomp', title: 'Acompañante', type: 'single', required: true, options: PARRILLA_ACOMPANANTE },
      ],
    },
    {
      id: 'parrilla-mar-tierra',
      name: 'Parrilla Mar y Tierra',
      price: 32.99,
      imageKey: 'parrilla-mar-tierra',
      description:
        'Carne a la parrilla y selección de mariscos del día con guacamole y queso.',
      tag: 'Favorito',
      modifierGroups: [
        { id: 'termino', title: 'Término de la carne', type: 'single', required: true, options: PARRILLA_TERMINO },
        { id: 'acomp', title: 'Acompañante', type: 'single', required: true, options: PARRILLA_ACOMPANANTE },
      ],
    },
    {
      id: 'parrilla-mariscos',
      name: 'Parrilla de Mariscos',
      price: 28.99,
      description: 'Selección de mariscos a la parrilla con dos contornos.',
      modifierGroups: [
        { id: 'acomp', title: 'Acompañante', type: 'single', required: true, options: PARRILLA_ACOMPANANTE },
      ],
    },
    {
      id: 'parrilla-super-especial',
      name: 'Parrilla Super Especial',
      price: 65.00,
      imageKey: 'parrilla-super-especial',
      description:
        'Parrilla XL para compartir: carne, pollo, mariscos, almejas y mucho más.',
      tag: 'Para compartir',
      modifierGroups: [
        { id: 'termino', title: 'Término de la carne', type: 'single', required: true, options: PARRILLA_TERMINO },
        { id: 'acomp', title: 'Acompañante', type: 'single', required: true, options: PARRILLA_ACOMPANANTE },
      ],
    },
  ],

  sopas: [
    {
      id: 'cazuela-mariscos',
      name: 'Cazuela de Mariscos',
      price: 17.99,
      imageKey: 'cazuela-mariscos',
      description:
        'Caldo concentrado de mariscos con camarones, mejillones y calamares.',
      tag: 'Especialidad',
      modifierGroups: [
        { id: 'porcion', title: 'Porción', type: 'single', required: true, options: SOPA_PORCION },
      ],
    },
    {
      id: 'media-cazuela',
      name: '1/2 Cazuela de Mariscos',
      price: 10.99,
      imageKey: 'media-cazuela',
      description: 'Media porción de cazuela, servida con arroz y arepa frita.',
    },
    {
      id: 'sopa-dia',
      name: 'Sopa del Día',
      price: 4.00,
      imageKey: 'sopa-dia',
      description: 'Sopa del día preparada por nuestra cocina. Pregunta al mesero.',
    },
  ],

  contornos: [
    { id: 'patacones', name: 'Patacones', price: 5.49, imageKey: 'patacones' },
    { id: 'maduritos', name: 'Maduritos', price: 5.49, imageKey: 'maduritos' },
    { id: 'queso-frito', name: 'Queso Frito', price: 5.49, imageKey: 'queso-frito' },
    { id: 'queso-fresco', name: 'Queso Fresco', price: 5.49, imageKey: 'queso-fresco' },
    { id: 'ensalada-cesar', name: 'Ensalada Cesar', price: 5.49, imageKey: 'ensalada-cesar' },
    { id: 'ensalada-coleslaw', name: 'Ensalada Colews', price: 5.49, imageKey: 'ensalada-coleslaw' },
    { id: 'ensalada-fresca', name: 'Ensalada Fresca', price: 5.49, imageKey: 'ensalada-fresca' },
    { id: 'nata', name: 'Nata', price: 5.49, imageKey: 'nata' },
    { id: 'yuca-hervida', name: 'Yuca Hervida', price: 5.49, imageKey: 'yuca-hervida' },
    { id: 'yuca-frita', name: 'Yuca Frita', price: 5.49, imageKey: 'yuca-frita' },
    { id: 'arroz', name: 'Arroz', price: 5.49, imageKey: 'arroz' },
    { id: 'papas-fritas', name: 'Papas Fritas', price: 5.49, imageKey: 'papas-fritas' },
    { id: 'arepas-fritas', name: 'Arepas Fritas (3)', price: 5.49, imageKey: 'arepas-fritas' },
    { id: 'caraotas', name: 'Caraotas', price: 5.49, imageKey: 'caraotas' },
  ].map((item) => ({
    ...item,
    description: 'Contorno de la casa.',
  })),

  bebidas: [
    {
      id: 'cerveza-polar',
      name: 'Cerveza Polar',
      price: 4.00,
      imageKey: 'cerveza-polar',
      description: 'Pilsner clásica venezolana, bien fría.',
      modifierGroups: [{ id: 'temp', title: 'Temperatura', type: 'single', options: BEBIDA_FRIA }],
    },
    {
      id: 'cerveza-zulia',
      name: 'Zulia',
      price: 4.00,
      imageKey: 'cerveza-zulia',
      description: 'La original — cerveza Zulia bien fría.',
      modifierGroups: [{ id: 'temp', title: 'Temperatura', type: 'single', options: BEBIDA_FRIA }],
    },
    {
      id: 'bud-light',
      name: 'Bud Light',
      price: 4.00,
      imageKey: 'bud-light',
      description: 'Cerveza ligera, bien fría.',
    },
    {
      id: 'michelob',
      name: 'Michelob Ultra',
      price: 4.00,
      description: 'Cerveza ligera premium.',
    },
    {
      id: 'corona',
      name: 'Corona',
      price: 4.00,
      description: 'Cerveza mexicana suave, servida con limón.',
    },
    {
      id: 'bucket',
      name: 'Bucket (6 cervezas)',
      price: 21.99,
      imageKey: 'bucket',
      description: 'Cubeta de hielo con seis cervezas a tu elección.',
      tag: 'Para compartir',
      modifierGroups: [
        {
          id: 'mix',
          title: 'Elige tus cervezas',
          helper: 'Hasta 6 unidades',
          type: 'multi',
          max: 6,
          options: [
            { id: 'polar', label: 'Polar', priceDelta: 0 },
            { id: 'zulia', label: 'Zulia', priceDelta: 0 },
            { id: 'bud-light', label: 'Bud Light', priceDelta: 0 },
            { id: 'michelob', label: 'Michelob Ultra', priceDelta: 0 },
            { id: 'corona', label: 'Corona', priceDelta: 0 },
          ],
        },
      ],
    },
    {
      id: 'papelon-vaso',
      name: 'Vaso de Papelón',
      price: 4.50,
      imageKey: 'papelon-vaso',
      description: 'Papelón con limón, dulce caribeño tradicional.',
    },
    {
      id: 'papelon-jarra',
      name: 'Jarra de Papelón',
      price: 12.49,
      imageKey: 'papelon-jarra',
      description: 'Jarra de papelón con limón para compartir.',
    },
    {
      id: 'nestea-vaso',
      name: 'Nestea Durazno (vaso)',
      price: 4.50,
      imageKey: 'nestea-vaso',
      description: 'Té helado de durazno, refrescante.',
    },
    {
      id: 'nestea-jarra',
      name: 'Nestea Durazno (jarra)',
      price: 12.49,
      imageKey: 'nestea-jarra',
      description: 'Jarra de Nestea durazno para la mesa.',
    },
    { id: 'coke', name: 'Coke', price: 2.50, imageKey: 'coke', description: 'Coca-Cola clásica.' },
    { id: 'coke-zero', name: 'Coke Zero', price: 2.50, imageKey: 'coke-zero', description: 'Coca-Cola sin azúcar.' },
    { id: 'sprite', name: 'Sprite', price: 2.50, imageKey: 'sprite', description: 'Sprite, sabor limón.' },
    {
      id: 'frescolita',
      name: 'Frescolita',
      price: 2.50,
      imageKey: 'frescolita',
      description: 'El sabor de Venezuela en lata.',
    },
    { id: 'uva', name: 'Uva', price: 2.50, imageKey: 'uva', description: 'Refresco de uva.' },
    { id: 'malta', name: 'Malta', price: 4.00, imageKey: 'malta', description: 'Malta Polar, dulce y maltosa.' },
    {
      id: 'agua-mineral',
      name: 'Agua Mineral',
      price: 2.00,
      imageKey: 'agua-mineral',
      description: 'Agua mineral embotellada.',
    },
  ],
};

// Flatten helper
export const allItems = Object.entries(menu).flatMap(([catId, items]) =>
  items.map((it) => ({ ...it, categoryId: catId }))
);

export const findItem = (id) => allItems.find((i) => i.id === id);

// Featured (favoritos de la casa)
export const FEATURED_IDS = [
  'pargo',
  'mojarra',
  'parrilla-mar-tierra',
  'cazuela-mariscos',
  'papelon-jarra',
  'frescolita',
];

export const featuredItems = FEATURED_IDS.map(findItem).filter(Boolean);
