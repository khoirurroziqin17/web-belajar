"use client";

import React from "react";
import { Navigation } from "@/components/HeroSection";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";

const Daftarpelajaran = [
  {
    hari: "Senin, 2 Desember 2024",
    pelajaran: [
      [
        "Bahasa Indonesia",
        ["1FAIpQLScep5FrGgOSu7p0-702si9OXlQ4GJ62M_njEYrA_8EVeiHujA", "#", "#"],
        "07.30 - 09.30 WIB",
      ],
      ["Fikih", ["#", "#", "#"], "10.00 - 11.30 WIB"],
    ],
  },
  {
    hari: "Selasa, 3 Desember 2024",
    pelajaran: [
      [
        "Bahasa Inggris",
        ["#", "#", "1FAIpQLSf2Y369aTnxIPYvJdK2_YKGXefOKbH3Nnlc_AdaEkqpIiF7XA"],
        "07.30 - 09.30 WIB",
      ],
      ["Akidah Akhlak", ["#", "#", "#"], "10.00 - 11.30 WIB"],
    ],
  },
  {
    hari: "Rabu, 4 Desember 2024",
    pelajaran: [
      [
        "Matematika",
        ["#", "1FAIpQLSfos2F2Js1bG1OsWg8SBsycqU1FHrFBu3h8MxqrWVanhEicCw", "#"],
        "07.30 - 09.30 WIB",
      ],
      ["Alquran Hadits", ["#", "#", "#"], "10.00 - 11.30 WIB"],
    ],
  },
  {
    hari: "Kamis, 5 Desember 2024",
    pelajaran: [
      ["Ilmu Pengetauan Alam", ["#", "#", "#"], "07.30 - 09.30 WIB"],
      [
        "Sejarah Kebudayaan Islam",
        [
          "1FAIpQLSeJkcllglwozaTwNg855aZjp91boGJ0F6tnFSWWvTf07_lF2Q",
          "1FAIpQLSelcmBKeCSmre3NTAc1U6XZXXd6EeZ7u6biA15evOg3a21zeA",
          "1FAIpQLSdw8curUdg3MSLC8RlcJdlAPSQBmTmFcQHo5qB-S7ZwnJXlvQ",
        ],
        "10.00 - 11.30 WIB",
      ],
    ],
  },
  {
    hari: "Jum'at, 6 Desember 2024",
    pelajaran: [
      ["Bahasa Jawa", ["#", "#", "#"], "07.30 - 09.00 WIB"],
      ["Ke-NU-An", ["#", "#", "#"], "09.15 - 10.45 WIB"],
    ],
  },
  {
    hari: "Senin, 9 Desember 2024",
    pelajaran: [
      ["Bahasa Arab", ["#", "#", "#"], "07.30 - 09.30 WIB"],
      ["Seni Budaya", ["#", "#", "#"], "10.00 - 11.30 WIB"],
    ],
  },
  {
    hari: "Selasa, 10 Desember 2024",
    pelajaran: [
      ["Ilmu Pengetauan Sosial", ["#", "#", "#"], "07.30 - 09.30 WIB"],
      ["Prakarya", ["#", "#", "#"], "10.00 - 11.30 WIB"],
    ],
  },
  {
    hari: "Rabu, 11 Desember 2024",
    pelajaran: [
      [
        "Pendidikan Pancasila dan Kewarganegaraan",
        ["#", "#", "#"],
        "07.30 - 09.00 WIB",
      ],
      [
        "Pendidikan Jasmani, Olahraga, dan Kesehatan",
        ["#", "#", "#"],
        "09.30 - 11.00 WIB",
      ],
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
              <ModalConfirm
                key={String(p[0])}
                link={`${
                  kelas == "7" ? p[1][0] : kelas == "8" ? p[1][1] : p[1][2]
                }`}
                kelas={kelas}
                mapel={p[0]}
                waktu={p[2]}
              >
                <AlertDialogTrigger className="block mx-auto px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  {p[0]}
                </AlertDialogTrigger>
              </ModalConfirm>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ModalConfirm({ link, kelas, mapel, waktu, children }) {
  const [disabled, isDisabled] = React.useState<boolean>(true);
  return (
    <AlertDialog>
      {children}
      <AlertDialogContent className="bg-white dark:bg-neutral-950">
        <AlertDialogHeader>
          <AlertDialogTitle>Informasi PAS</AlertDialogTitle>
          <AlertDialogDescription className="font-medium">
            <p>Mata Pelajaran : {mapel}</p>
            <p>
              Kelas :{" "}
              {kelas == "7"
                ? "Tujuh (7)"
                : kelas == "8"
                ? "Delapan (8)"
                : "Sembilan (9)"}
            </p>
            <p>Waktu : {waktu}</p>
          </AlertDialogDescription>
          <div className="items-top flex space-x-2 pt-4">
            <Checkbox
              id="terms1"
              checked={!disabled}
              onCheckedChange={() => isDisabled(!disabled)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mengerjakan soal ujian dengan JUJUR
              </label>
              <p className="text-sm text-muted-foreground">
                Saya berjanji akan mengerjakan soal ujian ini dengan jujur.
              </p>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction
            disabled={disabled}
            className="text-white bg-neutral-950 dark:text-black dark:bg-white"
          >
            <Link href={`${kelas}/${link}`}>Mulai</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
