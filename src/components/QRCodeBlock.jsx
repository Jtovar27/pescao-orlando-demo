import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';
import { LOGO_SRC } from '../data/assetMap';

export default function QRCodeBlock({ url, label = 'Escanea para abrir el menú', size = 224 }) {
  const [origin, setOrigin] = useState('');
  useEffect(() => {
    setOrigin(typeof window !== 'undefined' ? window.location.origin : '');
  }, []);

  const value = url || `${origin}/#menu`;

  return (
    <div className="relative inline-flex flex-col items-center rounded-3xl bg-white p-7 shadow-lift ring-1 ring-black/5">
      <div className="rounded-2xl bg-white p-3 ring-1 ring-black/5">
        <QRCodeSVG
          value={value}
          size={size}
          level="H"
          fgColor="#0f2c4f"
          bgColor="#ffffff"
          imageSettings={{
            src: LOGO_SRC,
            height: 36,
            width: 36,
            excavate: true,
          }}
        />
      </div>
      <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
        {label}
      </p>
      <p className="num mt-1 max-w-[260px] truncate text-center text-[12px] text-brand-primary/80">
        {value || 'Cargando…'}
      </p>
    </div>
  );
}
