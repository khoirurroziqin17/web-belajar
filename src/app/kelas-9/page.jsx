import { Navigation } from "@/components/HeroSection";

function kelas9() {
  return (
    <div>
      <Navigation />
      <main className="pt-20 px-6 md:px-8">
        <h2 className="font-semibold text-xl">Daftar Soal</h2>
        <div className="mt-6 space-y-5">
          <a
            href="https://scmatsamuga.notion.site/Soal-Remidial-Kelas-9-th-2023-c1bae7b2b71548a58d8e24a2db1a331b?pvs=4"
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
            href="https://forms.gle/REkt4eDPajSZLdVR9"
            className="block bg-slate-100 border-2 border-gray-900 p-4 rounded dark:bg-slate-700 dark:border-gray-400"
            target="_blank"
            rel="follow"
          >
            <h3 className="text-lg font-medium">Ulangan Bab 1</h3>
            <p>Sistem Reproduksi Manusia</p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default kelas9;
