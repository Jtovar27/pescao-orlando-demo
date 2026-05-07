import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_SRC } from '../data/assetMap';
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  FOOTER_CREDIT,
} from '../data/config';

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark text-white/85">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="rounded-2xl bg-white/95 p-4 inline-block">
              <img src={LOGO_SRC} alt="Pescao" className="h-10 w-auto" />
            </div>
            <p className="display-italic mt-5 text-[20px] text-white max-w-sm leading-snug">
              Sabor caribeño, pescado fresco y mariscos en Orlando.
            </p>
            <p className="mt-3 text-[14px] text-white/60 max-w-sm leading-relaxed">
              Pescado frito, parrillas, cazuelas y bebidas caribeñas. Hechos para compartir.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">
              Visita
            </h4>
            <p className="mt-3 text-[14px] text-white/85 leading-relaxed">
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-3 inline-block text-[14px] text-white/85 hover:text-white"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">
              Explorar
            </h4>
            <ul className="mt-3 space-y-2 text-[14px]">
              <li><a href="/#menu" className="hover:text-white">Menú</a></li>
              <li><a href="/#galeria" className="hover:text-white">Galería</a></li>
              <li><a href="/#ubicacion" className="hover:text-white">Ubicación</a></li>
              <li><Link to="/demo" className="hover:text-white">Demo</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">
              Conecta
            </h4>
            <ul className="mt-3 space-y-2.5 text-[14px]">
              <li>
                <a href={INSTAGRAM_URL} className="inline-flex items-center gap-2 hover:text-white">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                  <MapPin className="h-4 w-4" /> Google Maps
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4" /> Llamar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10 pt-6 text-[12.5px] text-white/55">
          <span>© {new Date().getFullYear()} Pescao Restaurant & Bar. Todos los derechos reservados.</span>
          <span className="text-white/45 tracking-wide">{FOOTER_CREDIT}</span>
        </div>
      </div>
    </footer>
  );
}
