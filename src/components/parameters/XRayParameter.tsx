'use client';

import { motion } from 'framer-motion';

export function XRayParameter() {
  const parameters = [
    {
      label: 'Kecepatan & Beban',
      value: 'Konveyor 0,22 m/detik, beban hingga 170 kg',
    },
    {
      label: 'Sudut Pandang',
      value: 'Bawah & samping, tembus pelat baja 40 mm',
    },
    { label: 'Resolusi', value: 'Garis: Φ 0,0787 mm, Penetrasi: Φ 0,202 mm' },
    { label: 'Resolusi Spasial', value: 'Horizontal & vertikal: Φ 1,0 mm' },
    {
      label: 'Ukuran Saluran & Dosis',
      value: '650×500 mm, < 4 μGy per pemeriksaan',
    },
    {
      label: 'Radiasi Sekitar',
      value: '< 0,2 μSv/jam, sesuai standar nasional/internasional',
    },
    {
      label: 'Perlindungan Radiasi',
      value: 'Tirai timbal ganda, pelat timbal 2–5 mm',
    },
    { label: 'Sinar-X', value: 'Digital, 80–160 kV, 0,3–1,2 mA' },
    { label: 'Pendinginan', value: 'Sistem oli tertutup, siklus kerja 100%' },
    { label: 'Keamanan', value: 'Pelindung penjepit jari di area saluran' },
    { label: 'Indikator', value: 'Lampu pilar di 4 sudut' },
    { label: 'Kenyamanan', value: 'Keyboard profesional & meja ergonomis' },
    {
      label: 'Material Konveyor',
      value: 'Pola berlian 3 mm, antistatis & tahan gores',
    },
    { label: 'Rangka', value: 'Baja tahan karat GB 304 & pelat canai dingin' },
  ];

  return (
    <section className="w-full bg-accent-900 px-4 py-10 sm:px-6 md:px-10 lg:px-24">
      <div className="mx-auto w-full max-w-full md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px]">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-6 text-lg font-semibold text-white sm:text-xl md:text-2xl"
        >
          Parameters
        </motion.h2>

        <div className="overflow-hidden rounded-xl border border-white/10">
          {parameters.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-1 px-4 py-4 text-sm sm:flex-row sm:items-start sm:gap-4 sm:text-base ${
                index % 2 === 0
                  ? 'bg-white/10 hover:bg-white/10'
                  : 'bg-white/5 hover:bg-white/20'
              } transition-colors duration-200`}
            >
              <div className="w-full font-medium text-gray-300 sm:w-1/3 md:w-1/4">
                {item.label}
              </div>
              <div className="w-full text-gray-100 sm:w-2/3 md:w-3/4">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
