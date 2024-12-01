import { Navigation } from "@/components/HeroSection";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Navigation />
      <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-center sm:text-4xl dark:text-white">
              Panduan mengakses link soal PAS 2024
            </h2>
            <p className="mt-6 text-lg leading-8 font-medium text-gray-600 dark:text-gray-300">
              1. Pilih kelas yang sesuai. <br /> 2. Pilih mata pelajaran sesuai
              yang akan diujikan. <br /> 3. Kemudian akan muncul pop-up seperti
              gambar berikut. Jika tidak muncul pop-up seperti gambar berikut,
              silakan muat ulang halaman website.
            </p>
            <Image
              src={"/panduan-pas-1.png"}
              className="mx-auto"
              alt="pop-up panduan pas 1"
              height={360}
              width={360}
            />
            <p className="text-lg leading-8 font-medium text-gray-600 dark:text-gray-300">
              4. Centang kotak &#34;Mengerjakan soal ujain dengan JUJUR&#34;
              <br />
              5. Klik Mulai.
            </p>
            <Image
              src={"/panduan-pas-2.png"}
              className="mx-auto"
              alt="pop-up panduan pas 2"
              height={360}
              width={360}
            />
            <p className="text-lg leading-8 font-medium text-gray-600 dark:text-gray-300">
              6. Kemudian akan diarahkan ke halaman ujian.
            </p>
            <Image
              src={"/panduan-pas-3.png"}
              className="mx-auto"
              alt="pop-up panduan pas 3"
              height={360}
              width={360}
            />
            <h3 className="text-xl font-semibold tracking-tight mt-6 text-gray-900 sm:text-2xl dark:text-white">
              Macam-macam Pop-up
            </h3>
            <p className="mt-6 text-lg leading-8 font-medium text-gray-600 dark:text-gray-300">
              1. Gambar pop-up jika ujian sudah bisa dimulai.
            </p>
            <Image
              src={"/panduan-pas-1.png"}
              className="mx-auto"
              alt="pop-up panduan pas 1"
              height={360}
              width={360}
            />
            <p className="mt-2 text-lg leading-8 font-medium text-gray-600 dark:text-gray-300">
              2. Gambar pop-up jika ujian belum bisa dimulai.
            </p>
            <Image
              src={"/panduan-pas-4.png"}
              className="mx-auto"
              alt="pop-up panduan pas 4"
              height={360}
              width={360}
            />
            <h3 className="text-xl font-semibold tracking-tight mt-6 text-gray-900 sm:text-2xl dark:text-white">
              Jenis Soal Ujian
            </h3>
            <p className="mt-6 text-lg leading-8 font-medium text-gray-600 dark:text-gray-300">
              1. Pilihan Ganda: Pilih satu jawaban paling tepat. &#40;2
              Poin&#41;
            </p>
            <p className="mt-2 text-lg leading-8 font-medium text-gray-600 dark:text-gray-300">
              2. Pilihan Ganda Kompleks: Pilih dua jawaban paling tepat. &#40;3
              Poin&#41;
            </p>
            <Image
              src={"/panduan-pas-5.png"}
              className="mx-auto"
              alt="pop-up panduan pas 5"
              height={360}
              width={360}
            />
            <p className="mt-2 text-lg leading-8 font-medium text-gray-600 dark:text-gray-300">
              3. Benar Salah. &#40;1 Poin&#41;
            </p>
            <h3 className="text-xl font-semibold tracking-tight mt-6 text-gray-900 sm:text-2xl dark:text-white">
              Coba Simulasi Ujian
            </h3>
            <p className="mt-2 text-lg leading-8 font-medium text-gray-600 dark:text-gray-300">
              Silah coba simulasi ujian bagi kelas 7 melalui link berikut:{" "}
              <br />
              <Link
                href={"/pas-2024"}
                className="flex items-center underline text-black dark:text-white"
              >
                <LinkIcon className="mr-1" />
                Link Coba Ujian
              </Link>{" "}
              <br />
              Token Ujian: COBAUJIAN
            </p>
            <Image
              src={"/panduan-pas-6.png"}
              className="mx-auto"
              alt="pop-up panduan pas 6"
              height={360}
              width={360}
            />
          </div>
        </div>
      </div>
    </>
  );
}
