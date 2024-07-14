"use client";

import { Navigation } from "@/components/HeroSection";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Overlay";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DaftarKelas = [
  {
    kelas: "7B",
    link: "https://chat.whatsapp.com/GkNkJi7bZ8s86PiGx00Xlj",
    token: "svnb",
  },
  {
    kelas: "7C",
    link: "https://chat.whatsapp.com/IiooD1m2dBbBUt5hBWg7yy",
    token: "svnc",
  },
  {
    kelas: "8B",
    link: "https://chat.whatsapp.com/G3mzqna6Dk71zsaIdAS1OB",
    token: "egtb",
  },
  {
    kelas: "8C",
    link: "https://chat.whatsapp.com/Es5967VVQizBrWsG1R4oR5",
    token: "egtc",
  },
  {
    kelas: "9C",
    link: "https://chat.whatsapp.com/KRDu4v7kTEKL6FbvW7n98O",
    token: "nnec",
  },
  {
    kelas: "9D",
    link: "https://chat.whatsapp.com/HkmISOx3u3pGEgddbmz1Pk",
    token: "nned",
  },
];

export default function page() {
  return (
    <>
      <Navigation />
      <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              WhatsApp Grup IPA
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              <span className="font-bold">WhatsApp Grup IPA,</span> digunakan
              untuk berkomunikasi seputar pelajaran IPA seperti materi, soal,
              maupun pengumpulan tugas.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-10 sm:grid-cols-2">
            {DaftarKelas.map((dk) => (
              <Card
                key={dk.kelas}
                kelas={dk.kelas}
                link={dk.link}
                token={dk.token}
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
  link: string;
  token: string;
}

function Card({ kelas, link, token }: Card) {
  const router = useRouter();
  const [confirmToken, setConfirmToken] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [invalid, setInvalid] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setInvalid(false);
  }
  function sendModal() {
    if (token == confirmToken) {
      router.push(link);
    } else {
      setInvalid(true);
    }
  }

  return (
    <>
      <div className="mx-auto mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 dark:ring-gray-300 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600 dark:text-gray-300">
              WhatApp Grup IPA
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-300">
                kelas
              </span>
              <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                {kelas}
              </span>
            </p>
            <button
              type="button"
              onClick={openModal}
              className="mt-6 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Bergabung ke grub
            </button>
            <p className="mt-6 text-xs leading-5 text-gray-600 dark:text-gray-300">
              Pastikan kamu memasukkan sesuai yang diberikan oleh gurumu.
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendModal();
          }}
        >
          <div className="relative rounded-md shadow-sm mt-2">
            <input
              type="text"
              className={`block w-full text-sm leading-6 rounded-md border-0 py-1.5 pl-2 pr-10 outline-none ring-1 ring-inset   focus:ring-2 focus:ring-inset  ${
                invalid
                  ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500 dark:text-white"
                  : "text-gray-900 ring-gray-300 placeholder:text-gray-300 focus:ring-gray-500 dark:text-white"
              }`}
              onChange={(e) => setConfirmToken(e.target.value)}
              placeholder="Masukkan token"
            />
            {invalid && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
          </div>
          {invalid && (
            <p className="mt-2 text-sm text-red-600">Token tidak cocok.</p>
          )}
          <div className="mt-4 space-x-2">
            <Button intent={"danger"} onClick={closeModal}>
              Batal
            </Button>
            <Button intent={"primary"} onClick={sendModal}>
              Kirim
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
