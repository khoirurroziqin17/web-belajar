import { Navigation } from "@/components/HeroSection";
import { cn } from "@/lib/utils";
import Link from "next/link";

const DaftarKelas = [
  {
    kelas: "7",
    bg: "bg-green-300 dark:bg-green-700",
    button:
      "bg-green-700 text-white hover:text-black hover:bg-opacity-30 dark:bg-green-300 dark:text-black dark:hover:text-white dark:hover:bg-opacity-30",
  },

  {
    kelas: "8",
    bg: "bg-yellow-300 dark:bg-yellow-700",
    button:
      "bg-yellow-700 text-white hover:text-black hover:bg-opacity-30 dark:bg-yellow-300 dark:text-black dark:hover:text-white dark:hover:bg-opacity-30",
  },

  {
    kelas: "9",
    bg: "bg-red-300 dark:bg-red-700",
    button:
      "bg-red-700 text-white hover:text-black hover:bg-opacity-30 dark:bg-red-300 dark:text-black dark:hover:text-white dark:hover:bg-opacity-30",
  },
];

export default function Page() {
  return (
    <>
      <Navigation />
      <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Penilaian Akhir Semester 2024
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              <span className="font-bold">Penilaian Akhir Semester (PAS)</span>{" "}
              adalah evaluasi yang dilakukan oleh sekolah pada akhir setiap
              semester untuk mengukur sejauh mana siswa telah mencapai
              kompetensi yang telah ditetapkan dalam kurikulum. PAS bertujuan
              untuk menilai pemahaman siswa terhadap seluruh materi pelajaran
              yang telah diajarkan selama satu semester.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-10 lg:grid-cols-3">
            {DaftarKelas.map((dk) => (
              <Card
                key={dk.kelas}
                kelas={dk.kelas}
                bg={dk.bg}
                btn={dk.button}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

interface Card {
  kelas: string;
  bg: string;
  btn: string;
}

function Card({ kelas, bg, btn }: Card) {
  return (
    <>
      <div className="mx-auto mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div
          className={cn(
            "rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 dark:ring-gray-300 lg:flex lg:flex-col lg:justify-center lg:py-16",
            bg
          )}
        >
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600 dark:text-gray-300">
              Pilih Kelas
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-300">
                kelas
              </span>
              <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                {kelas}
              </span>
            </p>
            <Link
              href={`pas-2024/${kelas}`}
              className={cn(
                "inline-block mt-6 rounded-md  px-4 py-2 text-sm font-medium duration-150    focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
                btn
              )}
            >
              Pilih Mata Pelajaran
            </Link>

            <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-gray-300">
              Pastikan kamu memilih kelas yang sesuai.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
