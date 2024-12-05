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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Daftarpelajaran = [
  {
    hari: "Senin, 2 Desember 2024",
    pelajaran: [
      [
        "Bahasa Indonesia",
        [
          "1FAIpQLScep5FrGgOSu7p0-702si9OXlQ4GJ62M_njEYrA_8EVeiHujA",
          "1FAIpQLSf1TMwKIuJlbcYtzEvp583prjbrn-I4gU3Vr4ljcNWd-9ygEA",
          "1FAIpQLSd51g2o3LFABgcK01uxP4DYQ1XX-QMomuMKPdapeDwuLFOFfQ",
        ],
        "December 2, 24 07:30:00 GMT+07:00",
        "December 3, 24 13:00:00 GMT+07:00",
      ],
      [
        "Fikih",
        [
          "1FAIpQLSeO91ci9ZmQt4fjd87owSFZcRcKJKZG6kybN9y-3sqn2XIRhg",
          "1FAIpQLSenBF7m7CaMWIq9HFHOvuMAk3YPBOkwtC8vPn2RgJcaVh97Cw",
          "1FAIpQLSffwl5ctAYus--uXYXbafr4ZDeWhUqKWwMao1qLdGcSEVHoqg",
        ],
        "December 2, 24 10:00:00 GMT+07:00",
        "December 3, 24 13:00:00 GMT+07:00",
      ],
    ],
  },
  {
    hari: "Selasa, 3 Desember 2024",
    pelajaran: [
      [
        "Bahasa Inggris",
        [
          "1FAIpQLSfcaAISdLgl5JDwxKhX4pCFeN6lNLg5EuCR2BHOuij4T48JUA",
          "1FAIpQLSfVtOhj5bsdG1uiHbD2RwC7K3EWLI-NCgKDXs4m6WaOJKCBdw",
          "1FAIpQLSf2Y369aTnxIPYvJdK2_YKGXefOKbH3Nnlc_AdaEkqpIiF7XA",
        ],
        "December 3, 24 07:30:00 GMT+07:00",
        "December 3, 24 12:30:00 GMT+07:00",
      ],
      [
        "Akidah Akhlak",
        [
          "1FAIpQLSeDoXTtBK3p5fgRDigIPaxqVkARgQSa1uPCRMFTiF0Jo-TYrA",
          "1FAIpQLSdBFs012HpL3cNH_iP9UxlgN1nI91AGxpzxA0bbp1zlLnhrDg",
          "1FAIpQLSfACwJAPjz1LQFY5VktSkx4leeJMcai-JYBvBqu6btI4jyitg",
        ],
        "December 3, 24 10:00:00 GMT+07:00",
        "December 3, 24 11:30:00 GMT+07:00",
      ],
    ],
  },
  {
    hari: "Rabu, 4 Desember 2024",
    pelajaran: [
      [
        "Matematika",
        [
          "1FAIpQLScIjNHbJ0WGkdqoJWl5feb6XCQs50RBtx-bGaCqesGDuJ2HaQ",
          "1FAIpQLSfos2F2Js1bG1OsWg8SBsycqU1FHrFBu3h8MxqrWVanhEicCw",
          "1FAIpQLSd7Ts2U1NzTCmSbqo1VFsvb1MBd5UB_WXACjNRnpPoyruMRqg",
        ],
        "December 4, 24 07:30:00 GMT+07:00",
        "December 4, 24 09:30:00 GMT+07:00",
      ],
      [
        "Alquran Hadits",
        [
          "1FAIpQLScu6_6U8GxYulFxPbmkVmyIoC2IT70NFGTaxNTqTVKM-33lOA",
          "1FAIpQLSdrVHgCZ1QMtUB1mNK7GUWxPDojfpFxkdWnQtcd4GuaWCyQtw",
          "1FAIpQLScpRrokrVbxmPCkX2hIX-teciaOJBcO1XmBq6WagPhr7QgFBQ",
        ],
        "December 4, 24 10:00:00 GMT+07:00",
        "December 4, 24 11:30:00 GMT+07:00",
      ],
    ],
  },
  {
    hari: "Kamis, 5 Desember 2024",
    pelajaran: [
      [
        "Ilmu Pengetauan Alam",
        [
          "1FAIpQLScSstPnmvKy_eaPQRLbG1-v3akPxZzoS05_g6J8lRV_8a0_Pw",
          "1FAIpQLSebADWHgZAAzyxLEgFlny53RoirfpfTeAngxuhs5-NCaZjLIw",
          "1FAIpQLSe8KRBRB43VTTX85enWvohOX4puHG_CwlY6i1C-zTeFWTPDHw",
        ],
        "December 5, 24 07:30:00 GMT+07:00",
        "December 5, 24 10:00:00 GMT+07:00",
      ],
      [
        "Sejarah Kebudayaan Islam",
        [
          "1FAIpQLSeJkcllglwozaTwNg855aZjp91boGJ0F6tnFSWWvTf07_lF2Q",
          "1FAIpQLSelcmBKeCSmre3NTAc1U6XZXXd6EeZ7u6biA15evOg3a21zeA",
          "1FAIpQLSdw8curUdg3MSLC8RlcJdlAPSQBmTmFcQHo5qB-S7ZwnJXlvQ",
        ],
        "December 5, 24 10:00:00 GMT+07:00",
        "December 5, 24 11:30:00 GMT+07:00",
        ,
      ],
    ],
  },
  {
    hari: "Jum'at, 6 Desember 2024",
    pelajaran: [
      [
        "Bahasa Jawa",
        [
          "1FAIpQLSf22j_Jl03ZqItJZkg0GCETaZQlOK7qQeMcihBm4hImLatByg",
          "1FAIpQLScIdqJiUMPzl6VM5BRfjKRaE_depv0Oig0V8RZMLZ1rcOcdnw",
          "1FAIpQLSdctZGEbP6F1w61t79U0SGpLCo84giqMEjLQNw3f_g4uTUthQ",
        ],
        "December 6, 24 07:30:00 GMT+07:00",
        "December 6, 24 09:00:00 GMT+07:00",
      ],
      [
        "Ke-NU-An",
        ["#", "#", "#"],
        "December 6, 24 09:15:00 GMT+07:00",
        "December 6, 24 10:45:00 GMT+07:00",
      ],
    ],
  },
  {
    hari: "Senin, 9 Desember 2024",
    pelajaran: [
      [
        "Bahasa Arab",
        ["#", "1FAIpQLScPEIrMljx_bwVQLQNYqIlOKK-oGl0J3nbdVDCoMw5yA6Z5QQ", "#"],
        "December 9, 24 07:30:00 GMT+07:00",
        "December 9, 24 09:30:00 GMT+07:00",
      ],
      [
        "Seni Budaya",
        ["#", "#", "#"],
        "December 9, 24 10:00:00 GMT+07:00",
        "December 9, 24 11:30:00 GMT+07:00",
      ],
    ],
  },
  {
    hari: "Selasa, 10 Desember 2024",
    pelajaran: [
      [
        "Ilmu Pengetauan Sosial",
        [
          "1FAIpQLSctp-5IxoYuLQeOUMaBB2Leg28Gy5X6jKexziBgFelaSz19pQ",
          "1FAIpQLSesU6z4cN5OT3A3YKuuO0rChKlDR-K7rxiMsqtKkljCmKCiCA",
          "1FAIpQLSdtgfEM9hYzEWaztHmPgQ_EFZQBzSxmfyhAq5e6Y7JLtSXMtA",
        ],
        "December 10, 24 07:30:00 GMT+07:00",
        "December 10, 24 09:30:00 GMT+07:00",
      ],
      [
        "Prakarya / Informatika",
        [
          "1FAIpQLSfIwz-vdm7cENt2iBePAt9GKU6Hgth5N-Pupu9JQ60UqEzr2Q",
          "1FAIpQLSedb-Eywcao7rrHebtR7CtYliWBXRHLHfHDVKN3ZZuYmnqo7A",
          "1FAIpQLSc5Rp3mBwL1ZRgSiC1UjUFYJZcmBaZetcPzrVXQUo4mXDhm7w",
        ],
        "December 10, 24 10:00:00 GMT+07:00",
        "December 10, 24 11:30:00 GMT+07:00",
      ],
    ],
  },
  {
    hari: "Rabu, 11 Desember 2024",
    pelajaran: [
      [
        "Pendidikan Pancasila dan Kewarganegaraan",
        [
          "1FAIpQLSfayYigbM0QXb2LYxkxg4LO1oKPue8MoJWjHG5QHSbF2Ksyag",
          "1FAIpQLScdsSZ9N8k554ZkaqBmckKyVR-n_U25AmOw-EnZGyOh144PEg",
          "1FAIpQLSfmP6gQU7pFUHqVRT_U2CtvmzgwK6pX7kLVQtrc7zlfwTH6EA",
        ],
        "December 11, 24 07:30:00 GMT+07:00",
        "December 11, 24 09:00:00 GMT+07:00",
        ,
      ],
      [
        "Pendidikan Jasmani, Olahraga, dan Kesehatan",
        ["#", "#", "#"],
        "December 11, 24 09:30:00 GMT+07:00",
        "December 11, 24 11:00:00 GMT+07:00",
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
          {params.kelas == "7" &&
            Date.now() >
              new Date("December 1, 24 07:00:00 GMT+07:00").getTime() &&
            Date.now() <
              new Date("December 2, 24 07:00:00 GMT+07:00").getTime() && (
              <div className="mx-auto mt-2 w-full lg:max-w-md lg:flex-shrink-0">
                <div
                  className={
                    "rounded-2xl py-4 text-center ring-2 ring-inset ring-gray-900/5 dark:ring-gray-300 lg:flex lg:flex-col lg:justify-center lg:py-6"
                  }
                >
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 border-b pb-2">
                      Minggu, 1 Desember 2024
                    </p>

                    <ModalConfirm
                      link={
                        "1FAIpQLSd9fSfpWx3pltjuMrVzgDtTyhu0e9lXsJsHK0Y2DcBgiTs0-g"
                      }
                      kelas={"7"}
                      mapel={"IPA dan Matematika"}
                      waktuMulai={"December 1, 24 07:00:00 GMT+07:00"}
                      waktuSelesai={"December 2, 24 07:00:00 GMT+07:00"}
                    >
                      <AlertDialogTrigger className="block mx-auto px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Uji Coba Ujian 2024
                      </AlertDialogTrigger>
                    </ModalConfirm>
                  </div>
                </div>
              </div>
            )}

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
            // Soal belum tersedia
            if (kelas == "7" && p[1][0] == "#") {
              return (
                <ModalUnavailable key={String(p[0])}>
                  <DialogTrigger className="block mx-auto px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {p[0]}
                  </DialogTrigger>
                </ModalUnavailable>
              );
            }
            if (kelas == "8" && p[1][1] == "#") {
              return (
                <ModalUnavailable key={String(p[0])}>
                  <DialogTrigger className="block mx-auto px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {p[0]}
                  </DialogTrigger>
                </ModalUnavailable>
              );
            }
            if (kelas == "9" && p[1][2] == "#") {
              return (
                <ModalUnavailable key={String(p[0])}>
                  <DialogTrigger className="block mx-auto px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {p[0]}
                  </DialogTrigger>
                </ModalUnavailable>
              );
            }

            if (Date.now() < new Date(String(p[2])).getTime()) {
              return (
                <ModalBeforeExam key={String(p[0])}>
                  <DialogTrigger className="block mx-auto px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {p[0]}
                  </DialogTrigger>
                </ModalBeforeExam>
              );
            }
            if (Date.now() > new Date(String(p[3])).getTime()) {
              return (
                <ModalAfterExam key={String(p[0])}>
                  <DialogTrigger className="block mx-auto px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    {p[0]}
                  </DialogTrigger>
                </ModalAfterExam>
              );
            }

            return (
              <ModalConfirm
                key={String(p[0])}
                link={`${
                  kelas == "7" ? p[1][0] : kelas == "8" ? p[1][1] : p[1][2]
                }`}
                kelas={kelas}
                mapel={p[0]}
                waktuMulai={p[2]}
                waktuSelesai={p[3]}
              >
                <AlertDialogTrigger className="block mx-auto px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  {p[0] as String}
                </AlertDialogTrigger>
              </ModalConfirm>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ModalConfirm({
  link,
  kelas,
  mapel,
  waktuMulai,
  waktuSelesai,
  children,
}) {
  const [disabled, isDisabled] = React.useState<boolean>(true);
  const startTime = `${new Date(waktuMulai).getHours()}.${new Date(
    waktuMulai
  ).getMinutes()}`;
  const endTime = `${new Date(waktuSelesai).getHours()}.${new Date(
    waktuSelesai
  ).getMinutes()}`;

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
            <p>
              Waktu : {startTime} - {endTime} WIB.
            </p>
          </AlertDialogDescription>
          <div className="text-start items-top flex space-x-2 pt-4">
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
            className="text-white bg-neutral-950 dark:text-black dark:bg-white p-0"
          >
            <Link className="w-full h-full px-4 py-2" href={`${kelas}/${link}`}>
              Mulai
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function ModalUnavailable({ children }) {
  return (
    <Dialog>
      {children}
      <DialogContent className="bg-white dark:bg-neutral-950 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Soal Ujian Belum Tersedia</DialogTitle>
          <Image
            src={"/bear-still-composing.gif"}
            alt="the bear is still composing exam questions GIF"
            width={500}
            height={500}
            className="py-2"
          />
          <DialogDescription className="text-center text-base font-medium">
            Upsss, soal ujiannya lagi dikerjain nih sama guru-guru. Tunggu
            sebentar ya, bentar lagi kelar kok!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function ModalBeforeExam({ children }) {
  return (
    <Dialog>
      {children}
      <DialogContent className="bg-white dark:bg-neutral-950 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ujian Belum Dimulai</DialogTitle>
          <Image
            src={"/Milk And Mocha Wait.gif"}
            alt="Milk And Mocha Waiting GIF"
            width={500}
            height={500}
            className="py-2"
          />
          <DialogDescription className="text-center text-base font-medium">
            Sabar ya! Ujian belum mulai. Santai dulu, jangan panik.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function ModalAfterExam({ children }) {
  return (
    <Dialog>
      {children}
      <DialogContent className="bg-white dark:bg-neutral-950 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ujian Sudah Selesai</DialogTitle>
          <Image
            src={"/bear-late.gif"}
            alt="Bear Late GIF"
            width={500}
            height={500}
            className="py-2"
          />
          <DialogDescription className="text-center text-base font-medium">
            Waduh, ketinggalan nih! Ujiannya udah selesai. Kamu bisa menghubungi
            panitia untuk informasi lebih lanjut.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
