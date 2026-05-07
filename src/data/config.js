// Restaurant configuration — edit any of these to update the site.

export const RESTAURANT_NAME = 'Pescao';
export const RESTAURANT_TAGLINE = 'Restaurant & Bar';

export const ADDRESS_LINE_1 = '4862 South Orange Blossom Trail';
export const ADDRESS_LINE_2 = 'Orlando, FL 32839';
export const ADDRESS_FULL = `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`;

export const PHONE_DISPLAY = '+1 (786) 547-6468';
export const PHONE_TEL = '+17865476468';

// Contact-only WhatsApp link (NOT for ordering).
export const WHATSAPP_URL =
  'https://wa.me/17865476468?text=Hola%20Pescao%2C%20tengo%20una%20pregunta.';

// Edit when the restaurant gives the real Instagram handle.
export const INSTAGRAM_URL = '#';

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=4862%20South%20Orange%20Blossom%20Trail%2C%20Orlando%2C%20FL%2032839';

// Demo links computed at runtime (origin-aware).
export const getDemoMenuUrl = () =>
  typeof window !== 'undefined'
    ? `${window.location.origin}/#menu`
    : 'https://example.com/#menu';

export const getDemoSiteUrl = () =>
  typeof window !== 'undefined' ? window.location.origin : 'https://example.com';

// Branded copy
export const HERO_HEADLINE = 'Sabor caribeño,';
export const HERO_HEADLINE_LINE2 = 'pescado fresco';
export const HERO_HEADLINE_LINE3 = 'y mariscos en Orlando.';

export const HERO_SUBHEADLINE =
  'Una experiencia casual, abundante y llena de sabor. Pescado frito, parrillas, mariscos y bebidas caribeñas para disfrutar como en casa.';

export const HOURS_NOTE = 'Horarios por confirmar — llámanos para reservar';

export const RESTAURANT_TYPE_TAGS = [
  'Pescado frito',
  'Mariscos',
  'Comida caribeña',
  'Orlando, FL',
];

export const FOOTER_CREDIT = 'Demo created by RuutDev';
