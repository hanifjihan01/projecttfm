'use client';

import { motion } from 'framer-motion';

export function LcdStandingParameter() {
  const parameters = [
    {
      label: 'Ukuran & Sudut Pandang',
      value:
        'Tersedia dalam berbagai ukuran layar: 32, 43, 49, 55, 65, dan 75 inci, dengan aspek rasio 16:9 dan sudut pandang 89° dari semua arah.',
    },
    {
      label: 'Resolusi & Kualitas Gambar',
      value:
        'Mendukung resolusi Full HD (1920x1080) dan 4K (3840x2160), dengan kecerahan 400 nits, kontras rasio 1000:1, dan waktu respons <6ms.',
    },
    {
      label: 'Pencahayaan',
      value: 'Menggunakan LED backlight dengan masa pakai hingga 100.000 jam.',
    },
    {
      label: 'Jenis Layar',
      value: 'Pilihan layar: non-touch, infrared touch, dan capacitive touch.',
    },
    {
      label: 'Sistem Android',
      value:
        'Sistem Android default (versi 5.1/6.0/7.1/8.1) dengan prosesor RK3128, RK3288, atau RK3399.',
    },
    {
      label: 'Kapasitas Memori Android',
      value:
        'RAM tersedia dalam pilihan 1GB, 2GB, hingga 4GB, dan ROM dari 8GB hingga 32GB.',
    },
    {
      label: 'Sistem Windows',
      value:
        'Juga tersedia versi Windows (Win7/8/10) dengan prosesor Intel i3/i5/i7, RAM 4GB–16GB DDR3, dan SSD 128GB–512GB.',
    },
    {
      label: 'Konektivitas',
      value:
        'Mendukung konektivitas LAN (10/100M atau 1000M), Wi-Fi, dan opsional 3G/4G.',
    },
    {
      label: 'Port Input/Output',
      value: 'Tersedia berbagai port: USB, RJ45, HDMI, dan audio.',
    },
    {
      label: 'Format Media',
      value:
        'Dukungan media: gambar (JPG, PNG, BMP, GIF), audio (MP3, WMA, FLAC, dll), dan video (MP4, AVI, MKV, MOV, dll).',
    },
    {
      label: 'Aplikasi Bawaan',
      value:
        'Sistem dilengkapi aplikasi seperti pemutar video, pemutar gambar, browser, dan file manager.',
    },
    {
      label: 'Penggunaan',
      value: 'Cocok untuk kebutuhan display digital interaktif atau komersial.',
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
