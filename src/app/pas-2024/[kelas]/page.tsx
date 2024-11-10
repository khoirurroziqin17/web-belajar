import { Navigation } from "@/components/HeroSection";
import Link from "next/link";

const Daftarpelajaran = [
  {
    hari: "Senin, 2 Desember 2024",
    pelajaran: [
      [
        "Bahasa Indonesia",
        ["1FAIpQLSdFys83_FPsvUegIFXiMvTlwi8Z8KByu2_FuHb9LEvQRtUYiw", "/", "/"],
      ],
      ["Fikih", ["/", "/", "/"]],
    ],
  },
  {
    hari: "Selasa, 3 Desember 2024",
    pelajaran: [
      ["Bahasa Inggris", ["/", "/", "/"]],
      ["Akidah Akhlak", ["/", "/", "/"]],
    ],
  },
  {
    hari: "Rabu, 4 Desember 2024",
    pelajaran: [
      ["Matematika", ["/", "/", "/"]],
      ["Alquran Hadits", ["/", "/", "/"]],
    ],
  },
  {
    hari: "Kamis, 5 Desember 2024",
    pelajaran: [
      ["Ilmu Pengetauan Alam", ["/", "/", "/"]],
      ["Sejarah Kebudayaan Islam", ["/", "/", "/"]],
    ],
  },
  {
    hari: "Jum'at, 6 Desember 2024",
    pelajaran: [
      ["Bahasa Jawa", ["/", "/", "/"]],
      ["Ke-NU-An", ["/", "/", "/"]],
    ],
  },
  {
    hari: "Senin, 9 Desember 2024",
    pelajaran: [
      ["Bahasa Arab", ["/", "/", "/"]],
      ["Seni Budaya", ["/", "/", "/"]],
    ],
  },
  {
    hari: "Selasa, 10 Desember 2024",
    pelajaran: [
      ["Ilmu Pengetauan Sosial", ["/", "/", "/"]],
      ["Prakarya", ["/", "/", "/"]],
    ],
  },
  {
    hari: "Rabu, 11 Desember 2024",
    pelajaran: [
      ["Pendidikan Pancasila dan Kewarganegaraan", ["/", "/", "/"]],
      ["Pendidikan Jasmani, Olahraga, dan Kesehatan", ["/", "/", "/"]],
    ],
  },
];

export default function Page({ params }: { params: { kelas: string } }) {
  return (
    <>
      <Navigation />
      <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Penilaian Akhir Semester 2024 <br /> Kelas {params.kelas}
            </h2>
          </div>
          <div className="mt-6">
            <p className="text-md font-semibold md:text-lg md:text-center">
              Pilih Mata Pelajaran
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:mt-4">
              {Daftarpelajaran.map((dp) => (
                <Card key={dp.hari} params={dp} kelas={params.kelas} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Card({
  params,
  kelas,
}: {
  params: { hari: string; pelajaran: (string | string[])[][] };
  kelas: string;
}) {
  return (
    <div className="mx-auto mt-2 w-full lg:max-w-md lg:flex-shrink-0">
      <div
        className={
          "rounded-2xl py-4 text-center ring-2 ring-inset ring-gray-900/5 dark:ring-gray-300 lg:flex lg:flex-col lg:justify-center lg:py-6"
        }
      >
        <div className="mx-auto max-w-xs px-8">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 border-b pb-2">
            {params.hari}
          </p>

          {params.pelajaran.map((p) => {
            return (
              <Link
                key={String(p[0])}
                href={`${kelas}/${
                  kelas == "7" ? p[1][0] : kelas == "8" ? p[1][1] : p[1][2]
                }`}
                className={
                  "block rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                }
              >
                {p[0]}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
