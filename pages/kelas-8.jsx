import { Navigation } from "@/components/HeroSection";

function kelas8() {
  return (
    <div>
      <Navigation />
      <main className="pt-20 px-6 md:px-8">
        <h2 className="font-semibold text-xl">Daftar Soal</h2>
        <div className="mt-6">
          <a
            href="https://scmatsamuga.notion.site/scmatsamuga/Soal-Kelas-8-90f2dccc7b6c4ecc96dbe5bfc803ad43"
            className="block bg-slate-100 border-2 border-gray-900 p-4 rounded dark:bg-slate-700 dark:border-gray-400"
            target="_blank"
            rel="follow"
          >
            <h3 className="text-lg font-medium">Tugas Harian</h3>
            <p>
              Selesaikan semua tugas harian yang diberikan guru untuk bisa
              mengikuti ujian akhir semester.
            </p>
          </a>
          {/* <a
            href="https://forms.gle/REkt4eDPajSZLdVR9"
            className="block bg-slate-100 border-2 border-gray-900 p-4 rounded"
            target="_blank"
            rel="follow"
          >
            <h3 className="text-lg font-medium">Ulangan Bab 1</h3>
            <p>Sistem Reproduksi Manusia</p>
          </a> */}
        </div>
      </main>
    </div>
  );
}

export default kelas8;
