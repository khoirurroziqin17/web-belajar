import {
  BookOpenIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Materi",
    description:
      "Terdapat semua materi pembelajaran mulai dari kelas 7 sampai kelas 9.",
    icon: BookOpenIcon,
  },
  {
    name: "Contoh",
    description:
      "Contoh digunakan untuk lebih memahami suatu materi dan rujukan dari latihan soal yang akan dikerjakan.",
    icon: DocumentTextIcon,
  },
  {
    name: "Latihan",
    description:
      "Latihan soal digunakan untuk mengasah kemampuan siswa terhadap materi yang sedang dipelajari.",
    icon: ArrowPathIcon,
  },
  {
    name: "Nilai",
    description:
      "Kumpulan nilai yang sudah siswa dapatkan akan diunggah ke google spreadsheet agar bisa di akses secara umum.",
    icon: PresentationChartLineIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Dokumen siswa
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Semua yang siswa butuhkan dalam pembelajaran
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Beberapa fitur yang disediakan disini seperti materi pembelajaran,
            contoh soal, latihan soal, dan nilai hasil kerja siswa
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
