'use client';

import { motion } from 'framer-motion';

export function MKiosParameter() {
  const parameters = [
    {
      label: 'Modul pintar',
      value:
        'Inovasi dari mesin vending tradisional dengan modul pintar untuk efisiensi dan kemudahan operasional.',
    },
    {
      label: 'Pembayaran & layar sentuh',
      value:
        'Dilengkapi sistem pembayaran cepat dan layar sentuh berukuran besar.',
    },
    {
      label: 'Keamanan & manajemen',
      value:
        'Memiliki alarm anti-pencurian dan sistem manajemen cerdas untuk pemantauan jarak jauh.',
    },
    {
      label: 'Desain modern',
      value:
        'Desain modern dengan jendela kaca besar untuk tampilan produk yang menarik dan jelas.',
    },
    {
      label: 'Lokasi strategis',
      value:
        'Ideal ditempatkan di lokasi strategis seperti pusat informasi wisata, ruang publik, dan lobi hotel.',
    },
    {
      label: 'Efisiensi operasional',
      value:
        'Menghemat biaya operasional karena dapat beroperasi tanpa pengawasan staf.',
    },
    {
      label: 'Jalur pengeluaran',
      value:
        'Mendukung berbagai jalur pengeluaran barang: sistem pegas, rantai, dan sabuk berjalan.',
    },
    {
      label: 'Jenis produk',
      value:
        'Dapat menjual berbagai jenis produk seperti minuman kaleng, makanan segar, dan camilan.',
    },
    {
      label: 'Kaca anti-embun',
      value:
        'Dilengkapi kaca tempered ganda dengan pemanas untuk mencegah embun atau es.',
    },
    {
      label: 'Fitur tambahan',
      value:
        'Fitur tambahan: pengingat suara, alarm pemantauan kesalahan, dan pelaporan otomatis jika terjadi kegagalan pengiriman barang.',
    },
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
              className={`flex flex-col gap-1 px-4 py-4 text-sm transition-colors duration-200 sm:flex-row sm:items-start sm:gap-4 sm:text-base ${
                index % 2 === 0
                  ? 'bg-white/10 hover:bg-white/10'
                  : 'bg-white/5 hover:bg-white/20'
              }`}
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
