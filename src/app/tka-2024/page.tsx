"use client";

import { Navigation } from "@/components/HeroSection";
import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const includedFeatures = [
  "Bahasa Indonesia",
  "Ilmu Pengetahuan Alam",
  "Ilmu Pengetahuan Sosial",
  "Matematika",
  "Pendidikan Pancasila dan Kewarganegaraan",
];

export default function Page() {
  return (
    <>
      <Navigation />
      <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Tes Kemampuan Awal 2024
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              <span className="font-bold">Tes kemampuan awal,</span> yang juga
              dikenal sebagai <span className="font-bold">pretest,</span> adalah
              penilaian yang dilakukan sebelum memulai suatu program
              pembelajaran atau pelatihan. Tujuannya adalah untuk mengukur
              pengetahuan, keterampilan, dan pengalaman yang dimiliki peserta
              didik atau peserta pelatihan{" "}
              <span className="font-bold">sebelum</span> mereka memulai program
              tersebut.
            </p>
          </div>
          <Card
            title="Hari Pertama"
            date="Senin, 8 Juli 2024"
            link="https://forms.gle/87oBeAEnA8gWf85e9"
          />
          <Card
            title="Hari Kedua"
            date="Selasa, 9 Juli 2024"
            link="https://forms.gle/QEirkZZZiyKNuMzY7"
          />
        </div>
      </div>
    </>
  );
}

interface Card {
  title: string;
  date: string;
  link: string;
}

function Card({ title, date, link }: Card) {
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none dark:ring-gray-100/60">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="mt-6 text-base leading-7 font-medium text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            {date}
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>Sesi 1 : 07.30 - 09.30 WIB</p>
            </div>
            <p className="ml-8">Sesi 2 : 10.00 - 12.00 WIB</p>
            <p className="ml-8">Sesi 3 : 13.00 - 15.00 WIB</p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
            Berisi Materi
          </h4>
          <div className="h-px flex-auto bg-gray-100 dark:text-gray-800" />
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6 dark:text-gray-300"
        >
          {includedFeatures.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 dark:bg-gray-800 dark:ring-gray-100/60">
          <div className="mx-auto max-w-xs px-8">
            <Image
              className="mx-auto"
              src="/motivasi-belajar.jpg"
              alt="Semangat belajar"
              width={500}
              height={500}
            />
            <a
              href={link}
              target="_blank"
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Dapatkan Akses
            </a>
            <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-gray-300">
              Peserta akan diarahkan ke halaman ujian dan bisa mengerjakan soal
              setelah diberi token oleh pengawas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
