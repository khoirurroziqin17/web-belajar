import { Navigation } from "@/components/HeroSection";

function kelas7() {
  return (
    <div>
      <Navigation />
      <main className="pt-20 px-6 md:px-8">
        <h2 className="font-semibold text-xl">Daftar Soal</h2>
        <div className="mt-6 space-y-5">
          <a
            href="https://scmatsamuga.notion.site/Soal-Remidial-Kelas-7-tahun-2023-5e579039d9514eeb9d2df90e89aa21eb?pvs=4"
            className="block bg-slate-100 border-2 border-gray-900 p-4 rounded dark:bg-slate-700 dark:border-gray-400"
            target="_blank"
            rel="follow"
          >
            <h3 className="text-lg font-medium">Remidi tugas harian</h3>
            <p>
              Kumpulan tugas remidi untuk syarat mengikuti PAS. Tugas bisa
              dikirim melalui WhatsApp.
            </p>
          </a>
          <a
            href="https://forms.gle/PP4JULWUu13fYnnu5"
            className="block bg-slate-100 border-2 border-gray-900 p-4 rounded dark:bg-slate-700 dark:border-gray-400"
            target="_blank"
            rel="follow"
          >
            <h3 className="text-lg font-medium">Ulangan Bab 1</h3>
            <p>Objek IPA dan Pengamatannya</p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default kelas7;
